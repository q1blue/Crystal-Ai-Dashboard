import React from 'react';
import { Clock, Brain, BarChart, AlertTriangle, Database, User } from 'lucide-react';

interface ActivityItem {
  id: number;
  title: string;
  description: string;
  time: string;
  icon: React.ReactNode;
  iconBackground: string;
}

const ActivityFeed: React.FC = () => {
  const activities: ActivityItem[] = [
    {
      id: 1,
      title: 'Training Completed',
      description: 'Quantum NLP Parser completed training with 98.2% accuracy',
      time: '2 hours ago',
      icon: <Brain size={16} />,
      iconBackground: 'bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400'
    },
    {
      id: 2,
      title: 'Model Deployed',
      description: 'Multi-Dim Classifier was deployed to production environment',
      time: '5 hours ago',
      icon: <BarChart size={16} />,
      iconBackground: 'bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400'
    },
    {
      id: 3,
      title: 'Resource Warning',
      description: 'GPU memory usage exceeded 80% threshold for over 15 minutes',
      time: '1 day ago',
      icon: <AlertTriangle size={16} />,
      iconBackground: 'bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-400'
    },
    {
      id: 4,
      title: 'Data Source Updated',
      description: 'Customer database sync completed with 15,240 new records',
      time: '2 days ago',
      icon: <Database size={16} />,
      iconBackground: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400'
    },
    {
      id: 5,
      title: 'New Team Member',
      description: 'Alex Kim joined the project as Data Engineer',
      time: '3 days ago',
      icon: <User size={16} />,
      iconBackground: 'bg-rose-100 text-rose-600 dark:bg-rose-900/40 dark:text-rose-400'
    }
  ];

  return (
    <div className="flow-root">
      <ul className="-mb-8">
        {activities.map((activity, activityIdx) => (
          <li key={activity.id}>
            <div className="relative pb-8">
              {activityIdx !== activities.length - 1 ? (
                <span
                  className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-slate-200 dark:bg-slate-700"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex items-start space-x-3">
                <div>
                  <div className={`relative px-1 h-10 w-10 flex items-center justify-center rounded-full ${activity.iconBackground}`}>
                    {activity.icon}
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div>
                    <div className="text-sm font-medium text-slate-900 dark:text-white">
                      {activity.title}
                    </div>
                    <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
                      {activity.description}
                    </p>
                  </div>
                  <div className="mt-2 text-xs text-slate-400 dark:text-slate-500 flex items-center">
                    <Clock size={12} className="mr-1" />
                    {activity.time}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;