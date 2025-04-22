import React from 'react';
import { ArrowUp, ArrowDown, Clock, Users, Brain, Star } from 'lucide-react';
import MetricCard from '../components/dashboard/MetricCard';
import TrainingChart from '../components/dashboard/TrainingChart';
import ModelCard from '../components/dashboard/ModelCard';
import ActivityFeed from '../components/dashboard/ActivityFeed';
import PerformanceStats from '../components/dashboard/PerformanceStats';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Dashboard</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Overview of your AI training and performance metrics
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <button className="px-4 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors">
            Export Data
          </button>
          <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md text-sm font-medium text-white transition-colors">
            New Training
          </button>
        </div>
      </div>

      {/* Metrics Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard 
          title="Active Models" 
          value="12" 
          change={2}
          changeType="increase"
          icon={<Brain className="text-purple-500" />}
        />
        <MetricCard 
          title="Training Sessions" 
          value="28" 
          change={5}
          changeType="increase"
          icon={<Clock className="text-blue-500" />}
        />
        <MetricCard 
          title="Accuracy" 
          value="94.2%" 
          change={1.8}
          changeType="increase"
          icon={<Star className="text-amber-500" />}
        />
        <MetricCard 
          title="Resource Usage" 
          value="68%" 
          change={12}
          changeType="decrease"
          icon={<Users className="text-emerald-500" />}
        />
      </div>

      {/* Charts and Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm p-4">
          <h2 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Training Performance</h2>
          <TrainingChart />
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-4">
          <h2 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Resource Allocation</h2>
          <PerformanceStats />
        </div>
      </div>

      {/* Recent Models */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-slate-900 dark:text-white">Recent Models</h2>
          <a href="#" className="text-sm text-purple-600 dark:text-purple-400 hover:underline">View All</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ModelCard 
            title="Quantum NLP Parser"
            description="Natural language processing with quantum optimization"
            accuracy={98.2}
            lastTrained="2 hours ago"
            status="active"
          />
          <ModelCard 
            title="Multi-Dim Classifier"
            description="24-dimensional pattern recognition for complex datasets"
            accuracy={94.7}
            lastTrained="1 day ago"
            status="active"
          />
          <ModelCard 
            title="Deep Forecast Engine"
            description="Predictive analytics with deep learning and time series"
            accuracy={92.3}
            lastTrained="3 days ago"
            status="training"
          />
        </div>
      </div>

      {/* Activity Feed */}
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-4">
        <h2 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Recent Activity</h2>
        <ActivityFeed />
      </div>
    </div>
  );
};

export default Dashboard;