import { useState } from 'react';
import type { UserSelection } from '../types/index.js';
import { mockValueStreams, mockJourneys } from '../data/mockData.js';
import { Calendar } from 'lucide-react';

interface UserSelectionsProps {
  onSelectionChange: (selection: UserSelection) => void;
}

export function UserSelections({ onSelectionChange }: UserSelectionsProps) {
  const [selection, setSelection] = useState<UserSelection>({
    valueStream: mockValueStreams[0],
    userJourney: null,
    startDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
    endDate: new Date(),
  });

  const handleChange = (updates: Partial<UserSelection>) => {
    const newSelection = { ...selection, ...updates };
    setSelection(newSelection);
    onSelectionChange(newSelection);
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4 md:p-6 shadow-sm h-full flex flex-col">
      <h2 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-foreground">Filters</h2>

      <div className="flex flex-col gap-3 md:gap-4 w-full">
        {/* Value Stream Selection */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Value Stream
          </label>
          <select
            className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
            value={selection.valueStream?.id || ''}
            onChange={(e) => {
              const vs = mockValueStreams.find((v) => v.id === e.target.value);
              handleChange({ valueStream: vs || null });
            }}
          >
            <option value="">Select a value stream</option>
            {mockValueStreams.map((vs) => (
              <option key={vs.id} value={vs.id}>
                {vs.name}
              </option>
            ))}
          </select>
        </div>

        {/* User Journey Selection */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            User Journey
          </label>
          <select
            className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
            value={selection.userJourney?.id || ''}
            onChange={(e) => {
              const journey = mockJourneys.find((j) => j.id === e.target.value);
              handleChange({ userJourney: journey || null });
            }}
          >
            <option value="">All Journeys</option>
            {mockJourneys.map((journey) => (
              <option key={journey.id} value={journey.id}>
                {journey.name}
              </option>
            ))}
          </select>
        </div>

        {/* Start Date */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            <Calendar className="inline w-4 h-4 mr-1" />
            Start Date
          </label>
          <input
            type="date"
            className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-sm"
            value={selection.startDate?.toISOString().split('T')[0] || ''}
            onChange={(e) => {
              handleChange({ startDate: e.target.value ? new Date(e.target.value) : null });
            }}
          />
        </div>

        {/* End Date */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            <Calendar className="inline w-4 h-4 mr-1" />
            End Date
          </label>
          <input
            type="date"
            className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-sm"
            value={selection.endDate?.toISOString().split('T')[0] || ''}
            onChange={(e) => {
              handleChange({ endDate: e.target.value ? new Date(e.target.value) : null });
            }}
          />
        </div>

        {/* Current Selection Summary */}
        {selection.valueStream && (
          <div className="mt-4 p-3 bg-muted rounded-md border border-border">
            <p className="text-sm text-foreground">
              <strong>Selected:</strong> {selection.valueStream.name}
              {selection.userJourney && ` → ${selection.userJourney.name}`}
            </p>
            {selection.startDate && selection.endDate && (
              <p className="text-xs text-muted-foreground mt-1">
                {selection.startDate.toLocaleDateString()} - {selection.endDate.toLocaleDateString()}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

