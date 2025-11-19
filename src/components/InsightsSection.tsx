import { mockInsights } from '../data/mockData';
import { AlertCircle, Info, AlertTriangle, Sparkles } from 'lucide-react';
import { format } from 'date-fns';

export function InsightsSection() {
  const getSeverityIcon = (severity?: 'info' | 'warning' | 'critical') => {
    switch (severity) {
      case 'critical':
        return <AlertCircle className="w-5 h-5 text-red-600" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
      default:
        return <Info className="w-5 h-5 text-blue-600" />;
    }
  };

  const getSeverityBgColor = (severity?: 'info' | 'warning' | 'critical') => {
    switch (severity) {
      case 'critical':
        return 'bg-red-50 border-red-200';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200';
      default:
        return 'bg-blue-50 border-blue-200';
    }
  };

  const getSeverityTextColor = (severity?: 'info' | 'warning' | 'critical') => {
    switch (severity) {
      case 'critical':
        return 'text-red-900';
      case 'warning':
        return 'text-yellow-900';
      default:
        return 'text-blue-900';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm h-full flex flex-col">
      <div className="flex items-center mb-4">
        <Sparkles className="w-5 h-5 text-blue-800 mr-2" />
        <h2 className="text-lg font-semibold text-foreground">
          Insights - Natural Language
        </h2>
      </div>
      
      <div className="space-y-4">
        {mockInsights.map((insight) => (
          <div
            key={insight.id}
            className={`p-4 rounded-lg border ${getSeverityBgColor(insight.severity)}`}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-0.5">
                {getSeverityIcon(insight.severity)}
              </div>
              <div className="ml-3 flex-1">
                <h3 className={`text-sm font-semibold ${getSeverityTextColor(insight.severity)}`}>
                  {insight.title}
                </h3>
                <p className={`mt-1 text-sm ${getSeverityTextColor(insight.severity)} opacity-90`}>
                  {insight.description}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  {format(insight.timestamp, 'MMM dd, yyyy HH:mm')}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* AI-powered note */}
      <div className="mt-4 p-3 bg-muted border border-border rounded-md">
        <p className="text-xs text-foreground">
          <Sparkles className="inline w-3 h-3 mr-1" />
          These insights are generated using AI analysis of user behavior patterns and journey metrics.
        </p>
      </div>
    </div>
  );
}

