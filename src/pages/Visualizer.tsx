import React, { useState, useEffect } from 'react';
import { AlertCircle } from 'lucide-react';
import HolographicScene from '../components/visualizer/HolographicScene';

const Visualizer: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Neural Network Visualizer</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Explore and understand your model architecture in real-time
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <button className="px-4 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors">
            Load Model
          </button>
          <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md text-sm font-medium text-white transition-colors">
            Export View
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 bg-white dark:bg-slate-800 rounded-lg shadow-sm p-4">
          <h2 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Controls</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Layer Visibility
              </label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" checked className="h-4 w-4 text-purple-600 rounded border-slate-300" />
                  <label className="ml-2 text-sm text-slate-600 dark:text-slate-400">Input Layer</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" checked className="h-4 w-4 text-purple-600 rounded border-slate-300" />
                  <label className="ml-2 text-sm text-slate-600 dark:text-slate-400">Hidden Layers</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" checked className="h-4 w-4 text-purple-600 rounded border-slate-300" />
                  <label className="ml-2 text-sm text-slate-600 dark:text-slate-400">Output Layer</label>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Display Options
              </label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" checked className="h-4 w-4 text-purple-600 rounded border-slate-300" />
                  <label className="ml-2 text-sm text-slate-600 dark:text-slate-400">Show Weights</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" checked className="h-4 w-4 text-purple-600 rounded border-slate-300" />
                  <label className="ml-2 text-sm text-slate-600 dark:text-slate-400">Animate Activations</label>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Visualization Type
              </label>
              <select className="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 py-2 px-3 text-sm text-slate-900 dark:text-slate-200">
                <option>Network Graph</option>
                <option>Layer Activations</option>
                <option>Feature Maps</option>
                <option>Weight Matrices</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm p-4 flex items-center justify-center min-h-[500px]">
          {loading ? (
            <div className="flex flex-col items-center justify-center">
              <div className="w-12 h-12 border-4 border-slate-200 dark:border-slate-700 border-t-purple-600 dark:border-t-purple-400 rounded-full animate-spin"></div>
              <p className="mt-4 text-slate-500 dark:text-slate-400">Loading visualization...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center text-center p-6">
              <AlertCircle size={48} className="text-rose-500 mb-4" />
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                Visualization Error
              </h3>
              <p className="text-slate-500 dark:text-slate-400 max-w-md">
                {error}. Please try refreshing the page or contact support if the problem persists.
              </p>
            </div>
          ) : (
            <div className="w-full h-[500px]">
              <HolographicScene />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Visualizer;