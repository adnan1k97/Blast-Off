const SETTINGS_KEY = 'tiltmaze_settings';

export type HomeTheme = 'blastoff';

export interface GameSettings {
  controlMode: 'keyboard' | 'gyroscope';
  gyroSensitivity: number;     // 0.02 - 0.30
  keyTouchSensitivity: number; // 0.20 - 2.00
  soundEnabled: boolean;
  homeTheme: HomeTheme;
}

export const DEFAULT_SETTINGS: GameSettings = {
  controlMode: 'keyboard',
  gyroSensitivity: 0.10,
  keyTouchSensitivity: 1.0,
  soundEnabled: true,
  homeTheme: 'blastoff',
};

export const loadSettings = (): GameSettings => {
  try {
    const stored = localStorage.getItem(SETTINGS_KEY);
    if (stored) {
      return { ...DEFAULT_SETTINGS, ...JSON.parse(stored), homeTheme: 'blastoff' };
    }
  } catch (e) {
    console.error('Failed to load settings:', e);
  }

  // Migrate legacy control mode preference
  const legacyMode = localStorage.getItem('tiltmaze_control_mode');
  if (legacyMode === 'gyroscope' || legacyMode === 'keyboard') {
    return { ...DEFAULT_SETTINGS, controlMode: legacyMode };
  }

  return { ...DEFAULT_SETTINGS };
};

export const saveSettings = (settings: GameSettings): void => {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    // Keep legacy key in sync for GameCanvas compatibility
    localStorage.setItem('tiltmaze_control_mode', settings.controlMode);
  } catch (e) {
    console.error('Failed to save settings:', e);
  }
};
