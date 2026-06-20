import { useState, useEffect, useCallback, useRef } from 'react';

interface GyroscopeState {
  isSupported: boolean;
  isEnabled: boolean;
  needsPermission: boolean;
  permissionGranted: boolean;
  tilt: { x: number; y: number };
  sensitivity: number;
}

const DEFAULT_SENSITIVITY = 0.10;
const DEFAULT_DEAD_ZONE = 0.02;
const DEFAULT_SMOOTHING = 0.25;
const DEFAULT_MAX_TILT = 1;

export const useGyroscope = () => {
  const [state, setState] = useState<GyroscopeState>({
    isSupported: false,
    isEnabled: false,
    needsPermission: false,
    permissionGranted: false,
    tilt: { x: 0, y: 0 },
    sensitivity: DEFAULT_SENSITIVITY,
  });

  const calibrationRef = useRef<{ beta: number; gamma: number } | null>(null);
  const isEnabledRef = useRef(false);
  const smoothedTiltRef = useRef({ x: 0, y: 0 });
  const lastUpdateRef = useRef(0);
  const orientationRef = useRef<'portrait' | 'landscape'>('portrait');
  const sensitivityRef = useRef(DEFAULT_SENSITIVITY);

  // Detect screen orientation
  useEffect(() => {
    const updateOrientation = () => {
      const isLandscape = window.innerWidth > window.innerHeight;
      orientationRef.current = isLandscape ? 'landscape' : 'portrait';
    };
    
    updateOrientation();
    window.addEventListener('resize', updateOrientation);
    window.addEventListener('orientationchange', updateOrientation);
    
    return () => {
      window.removeEventListener('resize', updateOrientation);
      window.removeEventListener('orientationchange', updateOrientation);
    };
  }, []);

  // Check if device orientation is supported
  useEffect(() => {
    const isSupported = 'DeviceOrientationEvent' in window;
    const needsPermission = typeof (DeviceOrientationEvent as any).requestPermission === 'function';
    
    setState(prev => ({
      ...prev,
      isSupported,
      needsPermission,
    }));
  }, []);

  const handleOrientation = useCallback((event: DeviceOrientationEvent) => {
    if (!isEnabledRef.current) return;
    
    // Throttle updates to ~60fps for performance
    const now = performance.now();
    if (now - lastUpdateRef.current < 16) return;
    lastUpdateRef.current = now;
    
    let beta = event.beta ?? 0;  // Front-back tilt (-180 to 180)
    let gamma = event.gamma ?? 0; // Left-right tilt (-90 to 90)

    // Handle orientation - swap axes in landscape mode
    if (orientationRef.current === 'landscape') {
      const temp = beta;
      beta = gamma;
      gamma = -temp;
    }

    // Calibrate on first reading
    if (!calibrationRef.current) {
      calibrationRef.current = { beta, gamma };
    }

    // Calculate relative tilt from calibration point
    const relativeBeta = beta - calibrationRef.current.beta;
    const relativeGamma = gamma - calibrationRef.current.gamma;

    // Apply dead zone BEFORE sensitivity - ignore very small physical movements (in degrees)
    const DEAD_ZONE_DEGREES = 2; // 2 degrees of physical tilt dead zone
    let adjustedBeta = Math.abs(relativeBeta) < DEAD_ZONE_DEGREES ? 0 : relativeBeta;
    let adjustedGamma = Math.abs(relativeGamma) < DEAD_ZONE_DEGREES ? 0 : relativeGamma;

    // Apply sensitivity and clamp to max tilt
    const sensitivity = sensitivityRef.current;
    
    let rawTiltX = adjustedGamma * sensitivity;
    let rawTiltY = adjustedBeta * sensitivity;

    // Clamp to max tilt
    rawTiltX = Math.max(-DEFAULT_MAX_TILT, Math.min(DEFAULT_MAX_TILT, rawTiltX));
    rawTiltY = Math.max(-DEFAULT_MAX_TILT, Math.min(DEFAULT_MAX_TILT, rawTiltY));

    // Apply exponential smoothing for fluid motion
    const prevSmoothed = smoothedTiltRef.current;
    const smoothedX = prevSmoothed.x + (rawTiltX - prevSmoothed.x) * (1 - DEFAULT_SMOOTHING);
    const smoothedY = prevSmoothed.y + (rawTiltY - prevSmoothed.y) * (1 - DEFAULT_SMOOTHING);
    
    smoothedTiltRef.current = { x: smoothedX, y: smoothedY };

    setState(prev => ({
      ...prev,
      tilt: { x: smoothedX, y: smoothedY },
    }));
  }, []);

  const requestPermission = useCallback(async (): Promise<boolean> => {
    if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
      try {
        const permission = await (DeviceOrientationEvent as any).requestPermission();
        const granted = permission === 'granted';
        setState(prev => ({ ...prev, permissionGranted: granted }));
        return granted;
      } catch (error) {
        console.error('Error requesting device orientation permission:', error);
        return false;
      }
    }
    // Permission not needed
    setState(prev => ({ ...prev, permissionGranted: true }));
    return true;
  }, []);

  const enable = useCallback(async () => {
    if (!state.isSupported) return false;

    // Request permission if needed
    if (state.needsPermission && !state.permissionGranted) {
      const granted = await requestPermission();
      if (!granted) return false;
    }

    // Reset calibration and smoothed values
    calibrationRef.current = null;
    smoothedTiltRef.current = { x: 0, y: 0 };
    isEnabledRef.current = true;

    window.addEventListener('deviceorientation', handleOrientation);
    setState(prev => ({ ...prev, isEnabled: true }));
    return true;
  }, [state.isSupported, state.needsPermission, state.permissionGranted, requestPermission, handleOrientation]);

  const disable = useCallback(() => {
    isEnabledRef.current = false;
    window.removeEventListener('deviceorientation', handleOrientation);
    smoothedTiltRef.current = { x: 0, y: 0 };
    setState(prev => ({ ...prev, isEnabled: false, tilt: { x: 0, y: 0 } }));
  }, [handleOrientation]);

  const recalibrate = useCallback(() => {
    calibrationRef.current = null;
    smoothedTiltRef.current = { x: 0, y: 0 };
    // Immediately update state to reset tilt
    setState(prev => ({ ...prev, tilt: { x: 0, y: 0 } }));
  }, []);

  const setSensitivity = useCallback((newSensitivity: number) => {
    const clamped = Math.max(0.02, Math.min(0.30, newSensitivity));
    sensitivityRef.current = clamped;
    setState(prev => ({ ...prev, sensitivity: clamped }));
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, [handleOrientation]);

  return {
    ...state,
    enable,
    disable,
    recalibrate,
    requestPermission,
    setSensitivity,
  };
};
