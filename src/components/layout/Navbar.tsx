import React, { useContext } from 'react';
import { Menu, Search, Bell, User, Sun, Moon } from 'lucide-react';
import { ThemeContext } from '../../context/ThemeContext';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="sticky top-0 z-10 bg-white dark:bg-slate-800 backdrop-blur-md bg-opacity-80 dark:bg-opacity-80 border-b border-slate-200 dark:border-slate-700 transition-colors duration-300">
      <div className="px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <button 
            onClick={toggleSidebar}
            className="p-2 rounded-md text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white focus:outline-none"
          >
            <Menu size={20} />
          </button>
          <div className="hidden md:flex relative ml-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 w-80 rounded-md bg-slate-100 dark:bg-slate-700 border border-transparent focus:border-purple-500 dark:focus:border-purple-400 focus:outline-none text-slate-900 dark:text-white"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-md text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white focus:outline-none relative">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-md text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white focus:outline-none"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <div className="ml-2 relative">
            <button className="flex items-center focus:outline-none rounded-full">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white">
                <User size={16} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;