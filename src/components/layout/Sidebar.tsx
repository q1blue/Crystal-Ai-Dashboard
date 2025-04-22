import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Database, 
  Activity, 
  Settings, 
  FileText, 
  Boxes,
  Brain,
  Network
} from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
  const navItems = [
    { to: '/', icon: <Home size={20} />, text: 'Dashboard' },
    { to: '/models', icon: <Brain size={20} />, text: 'Models' },
    { to: '/visualize', icon: <Network size={20} />, text: 'Visualizer' },
    { to: '/data', icon: <Database size={20} />, text: 'Data Sources' },
    { to: '/metrics', icon: <Activity size={20} />, text: 'Metrics' },
    { to: '/docs', icon: <FileText size={20} />, text: 'Documentation' },
    { to: '/settings', icon: <Settings size={20} />, text: 'Settings' }
  ];

  return (
    <aside 
      className={`${
        collapsed ? 'w-16' : 'w-64'
      } h-screen fixed flex flex-col bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 transition-all duration-300 ease-in-out z-20`}
    >
      <div className="h-16 flex items-center px-4 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center">
          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600">
            <Boxes className="h-6 w-6 text-white" />
          </div>
          {!collapsed && (
            <span className="ml-2 text-xl font-semibold text-slate-900 dark:text-white">
              Crystal AI
            </span>
          )}
        </div>
      </div>
      
      <nav className="flex-1 overflow-y-auto pt-5 pb-4">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? 'bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300'
                      : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700/50'
                  } flex items-center px-3 py-2 rounded-md transition-colors duration-200`
                }
              >
                <span className="flex-shrink-0">{item.icon}</span>
                {!collapsed && <span className="ml-3">{item.text}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-slate-200 dark:border-slate-700">
        <div className={`${collapsed ? 'justify-center' : 'justify-start'} flex items-center`}>
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white">
            <span className="text-xs font-medium">JS</span>
          </div>
          {!collapsed && (
            <div className="ml-3">
              <p className="text-sm font-medium text-slate-900 dark:text-white">Jane Smith</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Data Scientist</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;