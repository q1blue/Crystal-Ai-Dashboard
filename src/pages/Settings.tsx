import React, { useState, useContext } from 'react';
import { Save, Bell, Shield, User, Zap, Server, Database, Monitor } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';

const Settings: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState('account');
  
  const [notificationSettings, setNotificationSettings] = useState({
    email: true,
    training: true,
    system: false,
    marketing: false
  });
  
  const [apiSettings, setApiSettings] = useState({
    enableLogging: true,
    rateLimiting: false,
    cacheResults: true
  });
  
  const handleNotificationChange = (setting: string) => {
    setNotificationSettings({
      ...notificationSettings,
      [setting]: !notificationSettings[setting as keyof typeof notificationSettings]
    });
  };
  
  const handleApiSettingChange = (setting: string) => {
    setApiSettings({
      ...apiSettings,
      [setting]: !apiSettings[setting as keyof typeof apiSettings]
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Settings</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Manage your account and application settings
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md text-sm font-medium text-white transition-colors">
            <Save size={16} className="mr-2" />
            Save Changes
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm overflow-hidden">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-64 border-r border-slate-200 dark:border-slate-700">
            <nav className="p-4 space-y-1">
              <button
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'account'
                    ? 'bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700/50'
                }`}
                onClick={() => setActiveTab('account')}
              >
                <User size={18} className="mr-3" />
                Account
              </button>
              <button
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'notifications'
                    ? 'bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700/50'
                }`}
                onClick={() => setActiveTab('notifications')}
              >
                <Bell size={18} className="mr-3" />
                Notifications
              </button>
              <button
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'api'
                    ? 'bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700/50'
                }`}
                onClick={() => setActiveTab('api')}
              >
                <Server size={18} className="mr-3" />
                API
              </button>
              <button
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'security'
                    ? 'bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700/50'
                }`}
                onClick={() => setActiveTab('security')}
              >
                <Shield size={18} className="mr-3" />
                Security
              </button>
              <button
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'appearance'
                    ? 'bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700/50'
                }`}
                onClick={() => setActiveTab('appearance')}
              >
                <Monitor size={18} className="mr-3" />
                Appearance
              </button>
              <button
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'data'
                    ? 'bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700/50'
                }`}
                onClick={() => setActiveTab('data')}
              >
                <Database size={18} className="mr-3" />
                Data Management
              </button>
              <button
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'performance'
                    ? 'bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700/50'
                }`}
                onClick={() => setActiveTab('performance')}
              >
                <Zap size={18} className="mr-3" />
                Performance
              </button>
            </nav>
          </div>
          
          <div className="flex-1 p-6">
            {activeTab === 'account' && (
              <div>
                <h2 className="text-lg font-medium text-slate-900 dark:text-white">Account Settings</h2>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 mb-6">
                  Update your account information and preferences.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      defaultValue="Jane Smith"
                      className="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 py-2 px-3 text-sm text-slate-900 dark:text-slate-200"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      defaultValue="jane.smith@example.com"
                      className="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 py-2 px-3 text-sm text-slate-900 dark:text-slate-200"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Role
                    </label>
                    <input
                      type="text"
                      id="role"
                      defaultValue="Data Scientist"
                      className="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 py-2 px-3 text-sm text-slate-900 dark:text-slate-200"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="bio" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      rows={3}
                      defaultValue="Machine learning specialist with expertise in NLP and computer vision."
                      className="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 py-2 px-3 text-sm text-slate-900 dark:text-slate-200"
                    />
                  </div>
                  
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                    <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md text-sm font-medium text-white transition-colors">
                      Update Account
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'notifications' && (
              <div>
                <h2 className="text-lg font-medium text-slate-900 dark:text-white">Notification Preferences</h2>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 mb-6">
                  Control how and when you receive notifications.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-slate-900 dark:text-white">Email Notifications</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Receive important updates via email
                      </p>
                    </div>
                    <div className="flex items-center">
                      <button
                        type="button"
                        onClick={() => handleNotificationChange('email')}
                        className={`${
                          notificationSettings.email
                            ? 'bg-purple-600'
                            : 'bg-slate-200 dark:bg-slate-700'
                        } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out`}
                      >
                        <span className="sr-only">Enable email notifications</span>
                        <span
                          aria-hidden="true"
                          className={`${
                            notificationSettings.email ? 'translate-x-5' : 'translate-x-1'
                          } inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out mt-1`}
                        />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-slate-900 dark:text-white">Training Notifications</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Get notified when model training completes or fails
                      </p>
                    </div>
                    <div className="flex items-center">
                      <button
                        type="button"
                        onClick={() => handleNotificationChange('training')}
                        className={`${
                          notificationSettings.training
                            ? 'bg-purple-600'
                            : 'bg-slate-200 dark:bg-slate-700'
                        } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out`}
                      >
                        <span className="sr-only">Enable training notifications</span>
                        <span
                          aria-hidden="true"
                          className={`${
                            notificationSettings.training ? 'translate-x-5' : 'translate-x-1'
                          } inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out mt-1`}
                        />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-slate-900 dark:text-white">System Alerts</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Receive alerts about system performance and resource usage
                      </p>
                    </div>
                    <div className="flex items-center">
                      <button
                        type="button"
                        onClick={() => handleNotificationChange('system')}
                        className={`${
                          notificationSettings.system
                            ? 'bg-purple-600'
                            : 'bg-slate-200 dark:bg-slate-700'
                        } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out`}
                      >
                        <span className="sr-only">Enable system alerts</span>
                        <span
                          aria-hidden="true"
                          className={`${
                            notificationSettings.system ? 'translate-x-5' : 'translate-x-1'
                          } inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out mt-1`}
                        />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-slate-900 dark:text-white">Marketing Updates</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Receive updates about new features and product announcements
                      </p>
                    </div>
                    <div className="flex items-center">
                      <button
                        type="button"
                        onClick={() => handleNotificationChange('marketing')}
                        className={`${
                          notificationSettings.marketing
                            ? 'bg-purple-600'
                            : 'bg-slate-200 dark:bg-slate-700'
                        } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out`}
                      >
                        <span className="sr-only">Enable marketing updates</span>
                        <span
                          aria-hidden="true"
                          className={`${
                            notificationSettings.marketing ? 'translate-x-5' : 'translate-x-1'
                          } inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out mt-1`}
                        />
                      </button>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                    <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md text-sm font-medium text-white transition-colors">
                      Save Preferences
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'appearance' && (
              <div>
                <h2 className="text-lg font-medium text-slate-900 dark:text-white">Appearance Settings</h2>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 mb-6">
                  Customize how Crystal AI looks for you.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-slate-900 dark:text-white mb-3">Color Theme</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div
                        className={`flex flex-col items-center p-4 rounded-lg border-2 ${
                          theme === 'light'
                            ? 'border-purple-500'
                            : 'border-slate-200 dark:border-slate-700'
                        } cursor-pointer`}
                        onClick={() => theme !== 'light' && toggleTheme()}
                      >
                        <div className="w-full h-24 mb-3 bg-white rounded-md shadow-sm border border-slate-200"></div>
                        <span className="text-sm font-medium text-slate-900 dark:text-white">Light Mode</span>
                      </div>
                      
                      <div
                        className={`flex flex-col items-center p-4 rounded-lg border-2 ${
                          theme === 'dark'
                            ? 'border-purple-500'
                            : 'border-slate-200 dark:border-slate-700'
                        } cursor-pointer`}
                        onClick={() => theme !== 'dark' && toggleTheme()}
                      >
                        <div className="w-full h-24 mb-3 bg-slate-800 rounded-md shadow-sm border border-slate-700"></div>
                        <span className="text-sm font-medium text-slate-900 dark:text-white">Dark Mode</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-slate-900 dark:text-white mb-3">Sidebar Position</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col items-center p-4 rounded-lg border-2 border-purple-500 cursor-pointer">
                        <div className="w-full h-24 mb-3 bg-slate-100 dark:bg-slate-700 rounded-md shadow-sm flex overflow-hidden">
                          <div className="w-1/4 h-full bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-600"></div>
                          <div className="flex-1"></div>
                        </div>
                        <span className="text-sm font-medium text-slate-900 dark:text-white">Left Sidebar</span>
                      </div>
                      
                      <div className="flex flex-col items-center p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700 cursor-pointer">
                        <div className="w-full h-24 mb-3 bg-slate-100 dark:bg-slate-700 rounded-md shadow-sm flex overflow-hidden">
                          <div className="flex-1"></div>
                          <div className="w-1/4 h-full bg-white dark:bg-slate-800 border-l border-slate-200 dark:border-slate-600"></div>
                        </div>
                        <span className="text-sm font-medium text-slate-900 dark:text-white">Right Sidebar</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                    <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md text-sm font-medium text-white transition-colors">
                      Save Appearance
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'api' && (
              <div>
                <h2 className="text-lg font-medium text-slate-900 dark:text-white">API Settings</h2>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 mb-6">
                  Manage your API keys and integration settings.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="api-key" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      API Key
                    </label>
                    <div className="flex">
                      <input
                        type="password"
                        id="api-key"
                        defaultValue="sk_crystal_3a846939db6e40b8acf8"
                        className="flex-1 rounded-l-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 py-2 px-3 text-sm text-slate-900 dark:text-slate-200"
                        readOnly
                      />
                      <button className="px-4 py-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 rounded-r-md text-sm font-medium text-slate-900 dark:text-white transition-colors">
                        Copy
                      </button>
                    </div>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      Keep this key secret. Do not share it in public repositories or client-side code.
                    </p>
                  </div>
                  
                  <div className="space-y-4 mt-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-slate-900 dark:text-white">Enable Request Logging</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Log all API requests for debugging and analytics
                        </p>
                      </div>
                      <div className="flex items-center">
                        <button
                          type="button"
                          onClick={() => handleApiSettingChange('enableLogging')}
                          className={`${
                            apiSettings.enableLogging
                              ? 'bg-purple-600'
                              : 'bg-slate-200 dark:bg-slate-700'
                          } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out`}
                        >
                          <span className="sr-only">Enable request logging</span>
                          <span
                            aria-hidden="true"
                            className={`${
                              apiSettings.enableLogging ? 'translate-x-5' : 'translate-x-1'
                            } inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out mt-1`}
                          />
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-slate-900 dark:text-white">Rate Limiting</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Limit the number of API requests per minute
                        </p>
                      </div>
                      <div className="flex items-center">
                        <button
                          type="button"
                          onClick={() => handleApiSettingChange('rateLimiting')}
                          className={`${
                            apiSettings.rateLimiting
                              ? 'bg-purple-600'
                              : 'bg-slate-200 dark:bg-slate-700'
                          } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out`}
                        >
                          <span className="sr-only">Enable rate limiting</span>
                          <span
                            aria-hidden="true"
                            className={`${
                              apiSettings.rateLimiting ? 'translate-x-5' : 'translate-x-1'
                            } inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out mt-1`}
                          />
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-slate-900 dark:text-white">Cache Results</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Cache API responses for faster performance
                        </p>
                      </div>
                      <div className="flex items-center">
                        <button
                          type="button"
                          onClick={() => handleApiSettingChange('cacheResults')}
                          className={`${
                            apiSettings.cacheResults
                              ? 'bg-purple-600'
                              : 'bg-slate-200 dark:bg-slate-700'
                          } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out`}
                        >
                          <span className="sr-only">Enable result caching</span>
                          <span
                            aria-hidden="true"
                            className={`${
                              apiSettings.cacheResults ? 'translate-x-5' : 'translate-x-1'
                            } inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out mt-1`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                    <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md text-sm font-medium text-white transition-colors">
                      Save API Settings
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;