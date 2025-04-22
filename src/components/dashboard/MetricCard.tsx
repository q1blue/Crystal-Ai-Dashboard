import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  changeType: 'increase' | 'decrease';
  icon: React.ReactNode;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  change, 
  changeType, 
  icon 
}) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-5 shadow-sm border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-md">
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</p>
          <p className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">{value}</p>
        </div>
        <div className="h-12 w-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
          {icon}
        </div>
      </div>
      
      <div className="mt-4 flex items-center">
        {changeType === 'increase' ? (
          <ArrowUp size={16} className="text-emerald-500 mr-1" />
        ) : (
          <ArrowDown size={16} className="text-rose-500 mr-1" />
        )}
        <span 
          className={`text-sm font-medium ${
            changeType === 'increase' ? 'text-emerald-500' : 'text-rose-500'
          }`}
        >
          {change}%
        </span>
        <span className="ml-2 text-sm text-slate-500 dark:text-slate-400">from last week</span>
      </div>
    </div>
  );
};

export default MetricCard;