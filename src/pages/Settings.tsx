import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loadSettings, saveSettings, GameSettings, DEFAULT_SETTINGS } from '@/lib/settings';
import { cn } from '@/lib/utils';
import { PhoneIcon, SpeakerIcon, RefreshIcon, ShieldIcon, WarningIcon, TrashIcon, LightningIcon } from '@/components/CustomIcons';

const Settings: React.FC = () => {
  const navigate = useNavigate();
  const [settings, setSettings] = useState<GameSettings>(loadSettings);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showResetAllConfirm, setShowResetAllConfirm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const update = (partial: Partial<GameSettings>) => {
    setSettings(prev => {
      const next = { ...prev, ...partial };
      saveSettings(next);
      return next;
    });
  };

  const handleResetProgress = () => {
    if (!showResetConfirm) {
      setShowResetConfirm(true);
      return;
    }
    localStorage.removeItem('tiltmaze_progress');
    localStorage.removeItem('tiltmaze_achievements');
    setShowResetConfirm(false);
  };

  const handleResetSettings = () => {
    setSettings(DEFAULT_SETTINGS);
    saveSettings(DEFAULT_SETTINGS);
  };

  const sensPercent = Math.round(settings.keyTouchSensitivity * 100);
  const sensNormalized = ((sensPercent - 20) / 180) * 100;

  return (
    <div className="fixed inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-[420px] z-[200] overflow-y-auto pb-10" style={{
      backgroundColor: '#0D0A1A',
      backgroundImage: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(83,68,169,0.45) 0%, transparent 70%)',
      fontFamily: "'Barlow Condensed', sans-serif",
      color: '#F0ECF8',
    }}>
      {/* Header */}
      <div className="flex items-center gap-4 px-7 pt-11 pb-6 sticky top-0 z-10" style={{
        background: 'rgba(13,10,26,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(240,236,248,0.08)',
      }}>
        <button
          onClick={() => navigate(-1)}
          className="w-9 h-9 rounded-[9px] flex items-center justify-center cursor-pointer transition-colors hover:bg-white/[0.08]"
          style={{
            background: 'none',
            border: '1px solid rgba(240,236,248,0.08)',
            color: '#F0ECF8',
            fontSize: '16px',
          }}
        >←</button>
        <span style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '28px',
          letterSpacing: '0.08em',
          color: '#F0ECF8',
        }}>Base Control</span>
      </div>

      {/* Controls Section */}
      <SettingsSection title={<><PhoneIcon className="w-3.5 h-3.5 inline-block mr-1" style={{ color: '#FFB32B' }} /> Controls</>} delay={100} isLoaded={isLoaded}>
        <SettingsRow>
          <div className="settings-row-label">Gyroscope Control</div>
          <Toggle
            on={settings.controlMode === 'gyroscope'}
            onToggle={() => {
              const mode = settings.controlMode === 'gyroscope' ? 'keyboard' : 'gyroscope';
              update({ controlMode: mode });
              localStorage.setItem('tiltmaze_control_mode', mode);
            }}
          />
        </SettingsRow>
        <div>
          <SettingsRow noBorder>
            <div className="settings-row-label">Touch Sensitivity</div>
            <span style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '14px',
              color: '#FFB32B',
            }}>{sensPercent}%</span>
          </SettingsRow>
          <div className="px-5 pb-4">
            <div className="flex justify-between mb-2" style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '9px', letterSpacing: '0.1em',
              color: 'rgba(240,236,248,0.35)',
            }}>
              <span>● Precise</span>
              <span className="flex items-center gap-1"><LightningIcon className="w-3 h-3 inline-block" /> Quick</span>
            </div>
            <input
              type="range"
              min={20}
              max={200}
              step={5}
              value={sensPercent}
              onChange={(e) => update({ keyTouchSensitivity: parseInt(e.target.value) / 100 })}
              className="settings-slider"
              style={{
                background: `linear-gradient(90deg, #FFB32B 0%, #FFB32B ${sensNormalized}%, rgba(255,255,255,0.12) ${sensNormalized}%)`,
              }}
            />
          </div>
        </div>
      </SettingsSection>

      {/* Audio Section */}
      <SettingsSection title={<><SpeakerIcon className="w-3.5 h-3.5 inline-block mr-1" style={{ color: '#FFB32B' }} /> Audio</>} delay={200} isLoaded={isLoaded}>
        <SettingsRow>
          <div className="settings-row-label">Sound Effects</div>
          <Toggle
            on={settings.soundEnabled}
            onToggle={() => update({ soundEnabled: !settings.soundEnabled })}
          />
        </SettingsRow>
      </SettingsSection>

      {/* Data Section */}
      <SettingsSection title={<><RefreshIcon className="w-3.5 h-3.5 inline-block mr-1" style={{ color: '#FFB32B' }} /> Data Management</>} delay={300} isLoaded={isLoaded}>
        <SettingsRow>
          <div className="settings-row-label">Reset Settings</div>
          <button onClick={handleResetSettings} className="btn-danger-custom"><RefreshIcon className="w-3 h-3" /> Reset</button>
        </SettingsRow>
        <SettingsRow>
          <div className="settings-row-label" style={{ color: '#F47F6B' }}>Reset Progress</div>
          <button
            onClick={handleResetProgress}
            className="btn-danger-custom"
          >
            {showResetConfirm ? <><WarningIcon className="w-3 h-3" /> Confirm?</> : <><TrashIcon className="w-3 h-3" /> Reset</>}
          </button>
        </SettingsRow>
        <SettingsRow last>
          <div className="settings-row-label" style={{ color: '#BB5098' }}>Reset All Data</div>
          <button
            onClick={() => {
              if (!showResetAllConfirm) {
                setShowResetAllConfirm(true);
                return;
              }
              localStorage.clear();
              setSettings(DEFAULT_SETTINGS);
              setShowResetAllConfirm(false);
            }}
            className="btn-delete-custom"
          >
            {showResetAllConfirm ? <><WarningIcon className="w-3 h-3" /> Confirm Delete</> : <><WarningIcon className="w-3 h-3" /> Delete All</>}
          </button>
        </SettingsRow>
      </SettingsSection>

      {/* Privacy Section */}
      <SettingsSection title={<><ShieldIcon className="w-3.5 h-3.5 inline-block mr-1" style={{ color: '#FFB32B' }} /> Privacy</>} delay={350} isLoaded={isLoaded}>
        <SettingsRow last>
          <Link
            to="/privacy"
            style={{
              color: '#FFB32B',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(255,179,43,0.3)',
            }}
          >
            View Privacy Policy
          </Link>
        </SettingsRow>
      </SettingsSection>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&family=Barlow+Condensed:wght@300;400;600;700;800&display=swap');
        .settings-row-label {
          font-size: 15px; font-weight: 600; letter-spacing: 0.04em;
        }
        .settings-row-sub {
          font-family: 'Space Mono', monospace;
          font-size: 10px; color: rgba(240,236,248,0.35);
          margin-top: 2px; letter-spacing: 0.05em;
        }
        .settings-slider {
          width: 100%; height: 6px; border-radius: 3px;
          -webkit-appearance: none; appearance: none;
          outline: none; cursor: pointer;
        }
        .settings-slider::-webkit-slider-thumb {
          -webkit-appearance: none; appearance: none;
          width: 20px; height: 20px; border-radius: 50%;
          background: #F5C63C;
          box-shadow: 0 0 8px rgba(255,179,43,0.6);
          border: 2px solid #F0ECF8;
        }
        .btn-danger-custom {
          background: rgba(244,127,107,0.12);
          border: 1px solid rgba(244,127,107,0.3);
          color: #F47F6B;
          font-family: 'Space Mono', monospace;
          font-size: 11px; letter-spacing: 0.1em;
          padding: 9px 16px; border-radius: 9px;
          cursor: pointer;
          display: flex; align-items: center; gap: 6px;
          transition: background 0.15s;
        }
        .btn-danger-custom:hover { background: rgba(244,127,107,0.2); }
        .btn-delete-custom {
          background: rgba(187,80,152,0.12);
          border: 1px solid rgba(187,80,152,0.3);
          color: #BB5098;
          font-family: 'Space Mono', monospace;
          font-size: 11px; letter-spacing: 0.1em;
          padding: 9px 16px; border-radius: 9px;
          cursor: pointer;
          display: flex; align-items: center; gap: 6px;
          transition: background 0.15s;
        }
        .btn-delete-custom:hover { background: rgba(187,80,152,0.2); }
      `}</style>
      {/* Version & Credits */}
      <div className={cn(
        "px-7 mt-8 mb-4 flex flex-col items-center gap-1 transition-all duration-500 delay-500",
        isLoaded ? "opacity-100" : "opacity-0"
      )}>
        <div style={{ 
          fontFamily: "'Space Mono', monospace", 
          fontSize: '9px', 
          letterSpacing: '0.15em', 
          color: 'rgba(240,236,248,0.2)' 
        }}>
          v1.0.4
        </div>
      </div>
    </div>
  );
};

/* Sub-components */

const SettingsSection: React.FC<{
  title: React.ReactNode;
  delay: number;
  isLoaded: boolean;
  children: React.ReactNode;
}> = ({ title, delay, isLoaded, children }) => (
  <div className={cn(
    "mx-7 mt-3.5 rounded-2xl overflow-hidden transition-all duration-500",
    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
  )} style={{
    transitionDelay: `${delay}ms`,
    border: '1px solid rgba(240,236,248,0.08)',
    background: 'rgba(255,255,255,0.025)',
  }}>
    <div className="px-5 pt-4 pb-2.5 flex items-center gap-2" style={{
      fontFamily: "'Space Mono', monospace",
      fontSize: '10px', letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: '#FFB32B',
      borderBottom: '1px solid rgba(240,236,248,0.08)',
    }}>{title}</div>
    {children}
  </div>
);

const SettingsRow: React.FC<{
  children: React.ReactNode;
  last?: boolean;
  noBorder?: boolean;
}> = ({ children, last, noBorder }) => (
  <div className="flex items-center px-5 py-4 gap-3" style={{
    borderBottom: last || noBorder ? 'none' : '1px solid rgba(240,236,248,0.08)',
  }}>
    {children}
  </div>
);

const Toggle: React.FC<{ on: boolean; onToggle: () => void }> = ({ on, onToggle }) => (
  <div
    onClick={onToggle}
    className="w-[46px] h-[26px] rounded-[13px] relative cursor-pointer transition-colors flex-shrink-0"
    style={{
      background: on ? 'linear-gradient(90deg, #FFB32B, #F5C63C)' : 'rgba(255,255,255,0.1)',
      border: on ? '1px solid transparent' : '1px solid rgba(255,255,255,0.1)',
    }}
  >
    <div
      className="absolute top-[3px] left-[3px] w-[18px] h-[18px] rounded-full transition-transform"
      style={{
        background: '#F0ECF8',
        boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
        transform: on ? 'translateX(20px)' : 'translateX(0)',
        transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    />
  </div>
);

export default Settings;
