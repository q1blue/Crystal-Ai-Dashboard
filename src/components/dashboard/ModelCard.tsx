import React from 'react';
import { Network, Clock, Activity } from 'lucide-react';

interface ModelCardProps {
  title: string;
  description: string;
  accuracy: number;
  lastTrained: string;
  status: 'active' | 'training' | 'failed' | 'idle';
}

const ModelCard: React.FC<ModelCardProps> = ({
  title,
  description,
  accuracy,
  lastTrained,
  status
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300';
      case 'training':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'failed':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      case 'idle':
        return 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300';
      default:
        return 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300';
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-md transition-all duration-300">
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="text-lg font-medium text-slate-900 dark:text-white">{title}</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{description}</p>
          </div>
          <span className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </div>
        
        <div className="mt-4 flex items-center">
          <Activity size={16} className="text-purple-500 mr-2" />
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Accuracy: {accuracy}%</span>
        </div>
        
        <div className="mt-2 flex items-center">
          <Clock size={16} className="text-slate-400 mr-2" />
          <span className="text-sm text-slate-500 dark:text-slate-400">Last trained {lastTrained}</span>
        </div>
      </div>
      
      <div className="px-5 py-3 bg-slate-50 dark:bg-slate-700/50 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center">
        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
          Version 2.4.0
        </span>
        <div className="flex space-x-2">
          <button className="text-xs font-medium text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300">
            View Details
          </button>
          <span className="text-slate-300 dark:text-slate-600">|</span>
          <button className="text-xs font-medium text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300">
            Run Model
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;