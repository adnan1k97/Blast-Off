import { useCallback, useRef, useEffect, useMemo } from 'react';

export const useSoundEffects = () => {
  const audioContextRef = useRef<AudioContext | null>(null);
  const isEnabledRef = useRef(true);

  // Initialize audio context on first user interaction
  const initAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }
    return audioContextRef.current;
  }, []);

  // Ball rolling sound - continuous low rumble
  const playRolling = useCallback((speed: number) => {
    if (!isEnabledRef.current) return;
    const ctx = initAudioContext();
    if (!ctx) return;

    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    oscillator.type = 'triangle';
    oscillator.frequency.value = 40 + speed * 20;
    
    filter.type = 'lowpass';
    filter.frequency.value = 200 + speed * 100;

    gainNode.gain.value = Math.min(0.1, speed * 0.05);

    oscillator.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.start();
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
    oscillator.stop(ctx.currentTime + 0.1);
  }, [initAudioContext]);

  // Wall collision - short percussive thud
  const playWallHit = useCallback(() => {
    if (!isEnabledRef.current) return;
    const ctx = initAudioContext();
    if (!ctx) return;

    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    oscillator.type = 'sine';
    oscillator.frequency.value = 150;
    oscillator.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.1);

    filter.type = 'lowpass';
    filter.frequency.value = 500;

    gainNode.gain.value = 0.3;
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);

    oscillator.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.start();
    oscillator.stop(ctx.currentTime + 0.15);

    // Add noise for impact texture
    const bufferSize = ctx.sampleRate * 0.05;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuffer;
    const noiseGain = ctx.createGain();
    noiseGain.gain.value = 0.1;
    noiseGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
    noise.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    noise.start();
  }, [initAudioContext]);

  // Switch activation - positive chime
  const playSwitch = useCallback(() => {
    if (!isEnabledRef.current) return;
    const ctx = initAudioContext();
    if (!ctx) return;

    const frequencies = [523.25, 659.25, 783.99]; // C5, E5, G5 chord
    
    frequencies.forEach((freq, i) => {
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.type = 'sine';
      oscillator.frequency.value = freq;

      gainNode.gain.value = 0.15;
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.start(ctx.currentTime + i * 0.05);
      oscillator.stop(ctx.currentTime + 0.5);
    });
  }, [initAudioContext]);

  // Goal reached - victory fanfare
  const playGoal = useCallback(() => {
    if (!isEnabledRef.current) return;
    const ctx = initAudioContext();
    if (!ctx) return;

    const notes = [
      { freq: 523.25, time: 0, duration: 0.15 },     // C5
      { freq: 587.33, time: 0.1, duration: 0.15 },   // D5
      { freq: 659.25, time: 0.2, duration: 0.15 },   // E5
      { freq: 783.99, time: 0.3, duration: 0.4 },    // G5
      { freq: 659.25, time: 0.5, duration: 0.15 },   // E5
      { freq: 783.99, time: 0.6, duration: 0.6 },    // G5 (long)
    ];

    notes.forEach(({ freq, time, duration }) => {
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.type = 'square';
      oscillator.frequency.value = freq;

      gainNode.gain.value = 0;
      gainNode.gain.linearRampToValueAtTime(0.12, ctx.currentTime + time + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + time + duration);

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.start(ctx.currentTime + time);
      oscillator.stop(ctx.currentTime + time + duration + 0.1);
    });
  }, [initAudioContext]);

  // Falling into hole - descending tone
  const playFall = useCallback(() => {
    if (!isEnabledRef.current) return;
    const ctx = initAudioContext();
    if (!ctx) return;

    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.type = 'sawtooth';
    oscillator.frequency.value = 400;
    oscillator.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.5);

    gainNode.gain.value = 0.2;
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.start();
    oscillator.stop(ctx.currentTime + 0.6);

    // Add whoosh noise
    const bufferSize = ctx.sampleRate * 0.5;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
    }
    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuffer;
    const noiseGain = ctx.createGain();
    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.value = 1000;
    noiseGain.gain.value = 0.15;
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    noise.start();
  }, [initAudioContext]);

  // Teleport/portal sound
  const playTeleport = useCallback(() => {
    if (!isEnabledRef.current) return;
    const ctx = initAudioContext();
    if (!ctx) return;

    // Ascending sci-fi whoosh
    const oscillator1 = ctx.createOscillator();
    const oscillator2 = ctx.createOscillator();
    const gainNode = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    oscillator1.type = 'sine';
    oscillator1.frequency.value = 200;
    oscillator1.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.2);

    oscillator2.type = 'triangle';
    oscillator2.frequency.value = 400;
    oscillator2.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.15);

    filter.type = 'bandpass';
    filter.frequency.value = 600;
    filter.Q.value = 2;

    gainNode.gain.value = 0.15;
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);

    oscillator1.connect(filter);
    oscillator2.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator1.start();
    oscillator2.start();
    oscillator1.stop(ctx.currentTime + 0.3);
    oscillator2.stop(ctx.currentTime + 0.3);
  }, [initAudioContext]);

  // UI click sound
  const playClick = useCallback(() => {
    if (!isEnabledRef.current) return;
    const ctx = initAudioContext();
    if (!ctx) return;

    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.value = 800;

    gainNode.gain.value = 0.1;
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.start();
    oscillator.stop(ctx.currentTime + 0.05);
  }, [initAudioContext]);

  // Collectible pickup sound - satisfying coin/gem sound
  const playCollect = useCallback((isGem: boolean = false) => {
    if (!isEnabledRef.current) return;
    const ctx = initAudioContext();
    if (!ctx) return;

    if (isGem) {
      // Gem sound - magical shimmer
      const frequencies = [880, 1108.73, 1318.51]; // A5, C#6, E6
      frequencies.forEach((freq, i) => {
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.type = 'sine';
        oscillator.frequency.value = freq;

        gainNode.gain.value = 0.12;
        gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.start(ctx.currentTime + i * 0.03);
        oscillator.stop(ctx.currentTime + 0.6);
      });
    } else {
      // Coin sound - classic pickup
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.type = 'square';
      oscillator.frequency.value = 987.77; // B5
      oscillator.frequency.setValueAtTime(987.77, ctx.currentTime);
      oscillator.frequency.setValueAtTime(1318.51, ctx.currentTime + 0.05); // E6

      gainNode.gain.value = 0.1;
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.start();
      oscillator.stop(ctx.currentTime + 0.15);
    }
  }, [initAudioContext]);

  // Power-up pickup sound - energizing
  const playPowerUp = useCallback((type: 'shield' | 'speed' | 'multiplier') => {
    if (!isEnabledRef.current) return;
    const ctx = initAudioContext();
    if (!ctx) return;

    // Base power-up sound with variations per type
    const baseFreq = type === 'shield' ? 300 : type === 'speed' ? 400 : 350;
    const frequencies = [baseFreq, baseFreq * 1.5, baseFreq * 2, baseFreq * 2.5];
    
    frequencies.forEach((freq, i) => {
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.type = type === 'shield' ? 'sine' : type === 'speed' ? 'sawtooth' : 'triangle';
      oscillator.frequency.value = freq;

      gainNode.gain.value = 0.08;
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.start(ctx.currentTime + i * 0.04);
      oscillator.stop(ctx.currentTime + 0.5);
    });
  }, [initAudioContext]);

  const setEnabled = useCallback((enabled: boolean) => {
    isEnabledRef.current = enabled;
  }, []);

  // Cleanup
  useEffect(() => {
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  return useMemo(() => ({
    playRolling,
    playWallHit,
    playSwitch,
    playGoal,
    playFall,
    playTeleport,
    playCollect,
    playPowerUp,
    playClick,
    setEnabled,
    initAudioContext,
  }), [
    playRolling,
    playWallHit,
    playSwitch,
    playGoal,
    playFall,
    playTeleport,
    playCollect,
    playPowerUp,
    playClick,
    setEnabled,
    initAudioContext,
  ]);
};
