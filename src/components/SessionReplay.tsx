import { Play, Pause, SkipForward, SkipBack, Eye } from 'lucide-react';
import { useState } from 'react';

export function SessionReplay() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Eye className="w-5 h-5 text-indigo-600 mr-2" />
          <h2 className="text-lg font-semibold text-foreground">
            Session Replay (Graphistry)
          </h2>
        </div>
        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
          Interactive Visualization
        </span>
      </div>
      
      {/* Placeholder for Graphistry visualization */}
      <div className="bg-muted rounded-lg border-2 border-dashed border-border p-8 mb-4">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full mb-4">
            <Eye className="w-8 h-8 text-indigo-600" />
          </div>
          <h3 className="text-lg font-medium text-foreground mb-2">
            Session Replay Visualization
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Interactive graph showing user journey paths and behavior patterns
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto text-xs">
            <div className="bg-muted p-3 rounded border border-indigo-200">
              <div className="font-semibold text-indigo-600">1,247</div>
              <div className="text-muted-foreground">Active Sessions</div>
            </div>
            <div className="bg-muted p-3 rounded border border-indigo-200">
              <div className="font-semibold text-purple-600">4.2 min</div>
              <div className="text-muted-foreground">Avg. Duration</div>
            </div>
            <div className="bg-muted p-3 rounded border border-indigo-200">
              <div className="font-semibold text-pink-600">23</div>
              <div className="text-muted-foreground">Unique Paths</div>
            </div>
          </div>
        </div>
      </div>

      {/* Playback Controls */}
      <div className="flex items-center justify-center space-x-4 p-4 bg-muted rounded-lg">
        <button className="p-2 hover:bg-muted rounded-full transition-colors">
          <SkipBack className="w-5 h-5 text-foreground" />
        </button>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-3 bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-white" />
          ) : (
            <Play className="w-6 h-6 text-white" />
          )}
        </button>
        <button className="p-2 hover:bg-muted rounded-full transition-colors">
          <SkipForward className="w-5 h-5 text-foreground" />
        </button>
      </div>

      {/* Info */}
      <div className="mt-4 p-3 bg-muted border border-border rounded-md">
        <p className="text-xs text-foreground">
          <strong>Graphistry Integration:</strong> This section would display an interactive graph visualization
          of user session replays, showing navigation patterns, click paths, and behavior flows.
        </p>
      </div>
    </div>
  );
}

