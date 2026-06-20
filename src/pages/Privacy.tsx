import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Privacy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto p-6">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Privacy Policy</h1>
        </div>

        <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
          <p className="text-xs text-muted-foreground">Last updated: March 8, 2026</p>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Overview</h2>
            <p>
              Blast off ("we", "our", "the app") is a mobile maze game. We respect your privacy
              and are committed to transparency about how your data is handled.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Data We Store</h2>
            <p>
              All data is stored <strong className="text-foreground">locally on your device</strong> using
              your browser's localStorage. We do <strong className="text-foreground">not</strong> collect,
              transmit, or store any data on external servers. The data stored includes:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong className="text-foreground">Game progress</strong> — level completion status, star ratings, and best times</li>
              <li><strong className="text-foreground">Achievements</strong> — unlocked category achievements</li>
              <li><strong className="text-foreground">Settings</strong> — control mode, sensitivity, sound preferences, and home theme</li>
              <li><strong className="text-foreground">Shop state</strong> — selected and unlocked ball skins</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Data We Do NOT Collect</h2>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Personal information (name, email, phone number)</li>
              <li>Location data</li>
              <li>Device identifiers or advertising IDs</li>
              <li>Analytics or usage tracking data</li>
              <li>Payment or financial information</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Third-Party Services</h2>
            <p>
              The app does not integrate any third-party analytics, advertising, or tracking services.
              No data is shared with third parties.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Data Deletion</h2>
            <p>
              You can delete all stored data at any time from <strong className="text-foreground">Settings → Reset All Data</strong>.
              This permanently removes all game progress, achievements, shop purchases, and preferences from your device.
              Alternatively, clearing your browser or app data will achieve the same result.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Children's Privacy</h2>
            <p>
              The app does not knowingly collect any personal information from children or any other users.
              No account creation or personal data input is required to use the app.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be reflected
              on this page with an updated revision date.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Contact</h2>
            <p>
              If you have questions or concerns about this Privacy Policy or wish to request data deletion,
              please contact us at: <strong className="text-foreground">support@blastoff.game</strong>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
