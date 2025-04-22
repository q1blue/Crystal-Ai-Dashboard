import React, { useState } from 'react';
import { Plus, Search, Filter, ArrowDown, ArrowUp, Network, Clock, Activity } from 'lucide-react';

interface Model {
  id: string;
  name: string;
  description: string;
  type: string;
  accuracy: number;
  lastTrained: string;
  status: 'active' | 'training' | 'failed' | 'idle';
  createdAt: string;
}

const ModelExplorer: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [searchQuery, setSearchQuery] = useState('');

  const models: Model[] = [
    {
      id: '1',
      name: 'Quantum NLP Parser',
      description: 'Natural language processing with quantum optimization',
      type: 'NLP',
      accuracy: 98.2,
      lastTrained: '2 hours ago',
      status: 'active',
      createdAt: '2025-02-15',
    },
    {
      id: '2',
      name: 'Multi-Dim Classifier',
      description: '24-dimensional pattern recognition for complex datasets',
      type: 'Classification',
      accuracy: 94.7,
      lastTrained: '1 day ago',
      status: 'active',
      createdAt: '2025-01-28',
    },
    {
      id: '3',
      name: 'Deep Forecast Engine',
      description: 'Predictive analytics with deep learning and time series',
      type: 'Forecasting',
      accuracy: 92.3,
      lastTrained: '3 days ago',
      status: 'training',
      createdAt: '2025-03-10',
    },
    {
      id: '4',
      name: 'Image Segmentation Pro',
      description: 'Advanced image segmentation using vision transformer',
      type: 'Computer Vision',
      accuracy: 96.5,
      lastTrained: '1 week ago',
      status: 'active',
      createdAt: '2024-12-05',
    },
    {
      id: '5',
      name: 'Anomaly Detector V2',
      description: 'Unsupervised learning for anomaly detection in time series',
      type: 'Anomaly Detection',
      accuracy: 89.1,
      lastTrained: '2 weeks ago',
      status: 'failed',
      createdAt: '2025-02-22',
    },
    {
      id: '6',
      name: 'Recommendation Engine',
      description: 'Collaborative filtering for personalized recommendations',
      type: 'Recommendation',
      accuracy: 91.8,
      lastTrained: '5 days ago',
      status: 'idle',
      createdAt: '2025-01-15',
    },
  ];

  // Filter models based on selection and search query
  const filteredModels = models.filter(model => {
    // Filter by status
    if (selectedFilter !== 'all' && model.status !== selectedFilter) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery && !model.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !model.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  // Sort models
  const sortedModels = [...filteredModels].sort((a, b) => {
    let comparison = 0;
    
    if (sortBy === 'name') {
      comparison = a.name.localeCompare(b.name);
    } else if (sortBy === 'accuracy') {
      comparison = a.accuracy - b.accuracy;
    } else if (sortBy === 'lastTrained') {
      comparison = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    }
    
    return sortDirection === 'asc' ? comparison : -comparison;
  });

  const toggleSortDirection = () => {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

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
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Model Explorer</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Manage and explore your AI models
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md text-sm font-medium text-white transition-colors">
            <Plus size={16} className="mr-2" />
            New Model
          </button>
        </div>
      </div>

      {/* Search and filters */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={16} className="text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Search models..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 w-full rounded-md bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:border-purple-500 dark:focus:border-purple-400 focus:outline-none text-slate-900 dark:text-white"
          />
        </div>
        <div className="flex space-x-4">
          <div className="w-40">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter size={16} className="text-slate-400" />
              </div>
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="pl-10 pr-4 py-2 w-full rounded-md bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:border-purple-500 dark:focus:border-purple-400 focus:outline-none text-slate-900 dark:text-white appearance-none"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="training">Training</option>
                <option value="failed">Failed</option>
                <option value="idle">Idle</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ArrowDown size={16} className="text-slate-400" />
              </div>
            </div>
          </div>
          <div className="w-40">
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="pl-4 pr-8 py-2 w-full rounded-md bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:border-purple-500 dark:focus:border-purple-400 focus:outline-none text-slate-900 dark:text-white appearance-none"
              >
                <option value="name">Name</option>
                <option value="accuracy">Accuracy</option>
                <option value="lastTrained">Last Trained</option>
              </select>
              <button
                onClick={toggleSortDirection}
                className="absolute inset-y-0 right-0 flex items-center pr-2"
              >
                {sortDirection === 'asc' ? (
                  <ArrowUp size={16} className="text-slate-400" />
                ) : (
                  <ArrowDown size={16} className="text-slate-400" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Model cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedModels.map((model) => (
          <div key={model.id} className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-md transition-all duration-300">
            <div className="p-5">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white">{model.name}</h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{model.description}</p>
                  <div className="mt-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                      {model.type}
                    </span>
                  </div>
                </div>
                <span className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(model.status)}`}>
                  {model.status.charAt(0).toUpperCase() + model.status.slice(1)}
                </span>
              </div>
              
              <div className="mt-4 flex items-center">
                <Activity size={16} className="text-purple-500 mr-2" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Accuracy: {model.accuracy}%</span>
              </div>
              
              <div className="mt-2 flex items-center">
                <Clock size={16} className="text-slate-400 mr-2" />
                <span className="text-sm text-slate-500 dark:text-slate-400">Last trained {model.lastTrained}</span>
              </div>
            </div>
            
            <div className="px-5 py-3 bg-slate-50 dark:bg-slate-700/50 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Version 2.4.0
              </span>
              <div className="flex space-x-2">
                <button className="text-xs font-medium text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300">
                  Edit
                </button>
                <span className="text-slate-300 dark:text-slate-600">|</span>
                <button className="text-xs font-medium text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300">
                  Run
                </button>
                <span className="text-slate-300 dark:text-slate-600">|</span>
                <button className="text-xs font-medium text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300">
                  Visualize
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Empty state */}
      {sortedModels.length === 0 && (
        <div className="flex flex-col items-center justify-center bg-white dark:bg-slate-800 rounded-lg shadow-sm p-10 text-center">
          <Network size={48} className="text-slate-400 mb-4" />
          <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">No models found</h3>
          <p className="text-slate-500 dark:text-slate-400 max-w-md mb-6">
            No models match your current filters. Try adjusting your search or create a new model.
          </p>
          <button className="flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md text-sm font-medium text-white transition-colors">
            <Plus size={16} className="mr-2" />
            New Model
          </button>
        </div>
      )}
    </div>
  );
};

export default ModelExplorer;