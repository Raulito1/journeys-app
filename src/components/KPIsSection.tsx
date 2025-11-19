import { mockKPIs } from '../data/mockData';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

export function KPIsSection() {
  const getTrendIcon = (trend?: 'up' | 'down' | 'neutral') => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-600" />;
      default:
        return <Minus className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getTrendColor = (trend?: 'up' | 'down' | 'neutral') => {
    switch (trend) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm h-full flex flex-col">
      <h2 className="text-lg font-semibold mb-4 text-foreground">KPIs</h2>
      
      <div className="flex flex-col gap-4 w-full">
        {mockKPIs.map((kpi) => (
          <div
            key={kpi.id}
            className="p-4 bg-muted rounded-lg border border-border hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-sm font-medium text-muted-foreground">{kpi.name}</h3>
              {getTrendIcon(kpi.trend)}
            </div>
            
            <div className="mb-2">
              <p className="text-2xl font-bold text-foreground">
                {typeof kpi.value === 'number' ? kpi.value.toLocaleString() : kpi.value}
              </p>
            </div>
            
            {kpi.change !== undefined && (
              <div className="flex items-center">
                <span className={`text-sm font-medium ${getTrendColor(kpi.trend)}`}>
                  {kpi.change > 0 ? '+' : ''}
                  {kpi.change}%
                </span>
                <span className="text-xs text-muted-foreground ml-2">vs last period</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

