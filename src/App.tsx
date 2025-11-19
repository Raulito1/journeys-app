import { useState } from 'react';
import type { UserSelection } from './types/index.js';
import { UserSelections } from './components/UserSelections.js';
import { JourneyFlow } from './components/JourneyFlow.js';
import { SessionReplay } from './components/SessionReplay.js';
import { KPIsSection } from './components/KPIsSection.js';
import { InsightsSection } from './components/InsightsSection.js';
import { ChartsSection } from './components/ChartsSection.js';
import { SiteHeader } from './components/SiteHeader';

function App() {
  const [_selection, setSelection] = useState<UserSelection>({
    valueStream: null,
    userJourney: null,
    startDate: null,
    endDate: null,
  });

  const handleSelectionChange = (newSelection: UserSelection) => {
    setSelection(newSelection);
    // Selection state is available for future filtering/data updates
  };

  return (
    <div className="flex flex-col h-screen w-full overflow-hidden bg-background">
      {/* Header */}
      <SiteHeader />

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto">
        <div className="w-full h-full p-3 md:p-4 lg:p-6 space-y-3 md:space-y-4 lg:space-y-6">
          {/* Filters + Journey Flow inline on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 items-stretch">
            {/* Filters */}
            <div className="lg:col-span-1 h-full">
              <UserSelections onSelectionChange={handleSelectionChange} />
            </div>

            {/* Journey Flow */}
            <div className="lg:col-span-3 h-full">
              <div className="bg-card rounded-lg shadow-sm border border-border p-3 md:p-4 h-full">
                <h2 className="text-base md:text-lg font-semibold text-foreground mb-3 md:mb-4">Journey Flow</h2>
                <div className="h-[260px] md:h-[360px] lg:h-[460px]">
                  <JourneyFlow />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom sections - Session Replay, KPIs, Insights inline; Charts below */}
          <div className="space-y-3 md:space-y-4 lg:space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 items-stretch">
              <div className="h-full">
                <SessionReplay />
              </div>
              <div className="h-full">
                <KPIsSection />
              </div>
              <div className="h-full">
                <InsightsSection />
              </div>
            </div>
            <ChartsSection />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border px-4 py-2 md:py-3 flex-shrink-0">
        <p className="text-center text-xs md:text-sm text-muted-foreground">
          Journeys Analytics Dashboard
        </p>
      </footer>
    </div>
  );
}

export default App;
