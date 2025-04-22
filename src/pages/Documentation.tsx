import React, { useState } from 'react';
import { Search, FileText, Code, BookOpen, GitMerge, ArrowRight, ChevronDown } from 'lucide-react';

const Documentation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('guides');
  const [expandedSections, setExpandedSections] = useState<string[]>(['getting-started']);

  const toggleSection = (sectionId: string) => {
    if (expandedSections.includes(sectionId)) {
      setExpandedSections(expandedSections.filter(id => id !== sectionId));
    } else {
      setExpandedSections([...expandedSections, sectionId]);
    }
  };

  const isExpanded = (sectionId: string) => expandedSections.includes(sectionId);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Documentation</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Guides, references, and resources for using Crystal AI
          </p>
        </div>
        <div className="mt-4 md:mt-0 w-full md:w-64">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search documentation..."
              className="pl-10 pr-4 py-2 w-full rounded-md bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:border-purple-500 dark:focus:border-purple-400 focus:outline-none text-slate-900 dark:text-white"
            />
          </div>
        </div>
      </div>

      {/* Documentation navigation */}
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm overflow-hidden">
        <div className="flex border-b border-slate-200 dark:border-slate-700">
          <button
            className={`px-4 py-3 text-sm font-medium ${
              activeTab === 'guides'
                ? 'text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
            onClick={() => setActiveTab('guides')}
          >
            <BookOpen size={16} className="inline mr-2" />
            Guides
          </button>
          <button
            className={`px-4 py-3 text-sm font-medium ${
              activeTab === 'api'
                ? 'text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
            onClick={() => setActiveTab('api')}
          >
            <Code size={16} className="inline mr-2" />
            API Reference
          </button>
          <button
            className={`px-4 py-3 text-sm font-medium ${
              activeTab === 'examples'
                ? 'text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
            onClick={() => setActiveTab('examples')}
          >
            <FileText size={16} className="inline mr-2" />
            Examples
          </button>
          <button
            className={`px-4 py-3 text-sm font-medium ${
              activeTab === 'releases'
                ? 'text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
            onClick={() => setActiveTab('releases')}
          >
            <GitMerge size={16} className="inline mr-2" />
            Release Notes
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'guides' && (
            <div className="space-y-6">
              <div>
                <button 
                  className="flex w-full items-center justify-between text-left text-lg font-medium text-slate-900 dark:text-white" 
                  onClick={() => toggleSection('getting-started')}
                >
                  <span>Getting Started</span>
                  <ChevronDown 
                    size={20} 
                    className={`transition-transform ${isExpanded('getting-started') ? 'rotate-180' : ''}`} 
                  />
                </button>
                {isExpanded('getting-started') && (
                  <div className="mt-4 ml-4 space-y-2">
                    <div className="border-l-2 border-purple-500 pl-4 py-2">
                      <h3 className="text-md font-medium text-slate-900 dark:text-white">Introduction to Crystal AI</h3>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        Learn about the core concepts and capabilities of Crystal AI.
                      </p>
                      <a href="#" className="mt-2 inline-flex items-center text-sm text-purple-600 dark:text-purple-400 hover:underline">
                        Read guide <ArrowRight size={14} className="ml-1" />
                      </a>
                    </div>
                    <div className="border-l-2 border-slate-200 dark:border-slate-700 pl-4 py-2">
                      <h3 className="text-md font-medium text-slate-900 dark:text-white">Installation and Setup</h3>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        Step-by-step guide to install and configure Crystal AI in your environment.
                      </p>
                      <a href="#" className="mt-2 inline-flex items-center text-sm text-purple-600 dark:text-purple-400 hover:underline">
                        Read guide <ArrowRight size={14} className="ml-1" />
                      </a>
                    </div>
                    <div className="border-l-2 border-slate-200 dark:border-slate-700 pl-4 py-2">
                      <h3 className="text-md font-medium text-slate-900 dark:text-white">Your First Model</h3>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        Create and train your first AI model with Crystal AI.
                      </p>
                      <a href="#" className="mt-2 inline-flex items-center text-sm text-purple-600 dark:text-purple-400 hover:underline">
                        Read guide <ArrowRight size={14} className="ml-1" />
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <button 
                  className="flex w-full items-center justify-between text-left text-lg font-medium text-slate-900 dark:text-white" 
                  onClick={() => toggleSection('advanced-features')}
                >
                  <span>Advanced Features</span>
                  <ChevronDown 
                    size={20} 
                    className={`transition-transform ${isExpanded('advanced-features') ? 'rotate-180' : ''}`} 
                  />
                </button>
                {isExpanded('advanced-features') && (
                  <div className="mt-4 ml-4 space-y-2">
                    <div className="border-l-2 border-slate-200 dark:border-slate-700 pl-4 py-2">
                      <h3 className="text-md font-medium text-slate-900 dark:text-white">Quantum Optimization</h3>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        Leverage quantum computing principles to optimize your AI models.
                      </p>
                      <a href="#" className="mt-2 inline-flex items-center text-sm text-purple-600 dark:text-purple-400 hover:underline">
                        Read guide <ArrowRight size={14} className="ml-1" />
                      </a>
                    </div>
                    <div className="border-l-2 border-slate-200 dark:border-slate-700 pl-4 py-2">
                      <h3 className="text-md font-medium text-slate-900 dark:text-white">Multi-Dimensional Analysis</h3>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        Work with 24-dimensional data representations for complex pattern recognition.
                      </p>
                      <a href="#" className="mt-2 inline-flex items-center text-sm text-purple-600 dark:text-purple-400 hover:underline">
                        Read guide <ArrowRight size={14} className="ml-1" />
                      </a>
                    </div>
                    <div className="border-l-2 border-slate-200 dark:border-slate-700 pl-4 py-2">
                      <h3 className="text-md font-medium text-slate-900 dark:text-white">Custom Neural Architectures</h3>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        Design and implement custom neural network architectures.
                      </p>
                      <a href="#" className="mt-2 inline-flex items-center text-sm text-purple-600 dark:text-purple-400 hover:underline">
                        Read guide <ArrowRight size={14} className="ml-1" />
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <button 
                  className="flex w-full items-center justify-between text-left text-lg font-medium text-slate-900 dark:text-white" 
                  onClick={() => toggleSection('integration')}
                >
                  <span>Integration</span>
                  <ChevronDown 
                    size={20} 
                    className={`transition-transform ${isExpanded('integration') ? 'rotate-180' : ''}`} 
                  />
                </button>
                {isExpanded('integration') && (
                  <div className="mt-4 ml-4 space-y-2">
                    <div className="border-l-2 border-slate-200 dark:border-slate-700 pl-4 py-2">
                      <h3 className="text-md font-medium text-slate-900 dark:text-white">REST API</h3>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        Integrate Crystal AI into your applications using our REST API.
                      </p>
                      <a href="#" className="mt-2 inline-flex items-center text-sm text-purple-600 dark:text-purple-400 hover:underline">
                        Read guide <ArrowRight size={14} className="ml-1" />
                      </a>
                    </div>
                    <div className="border-l-2 border-slate-200 dark:border-slate-700 pl-4 py-2">
                      <h3 className="text-md font-medium text-slate-900 dark:text-white">Python SDK</h3>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        Use our Python SDK for seamless integration with your data science workflows.
                      </p>
                      <a href="#" className="mt-2 inline-flex items-center text-sm text-purple-600 dark:text-purple-400 hover:underline">
                        Read guide <ArrowRight size={14} className="ml-1" />
                      </a>
                    </div>
                    <div className="border-l-2 border-slate-200 dark:border-slate-700 pl-4 py-2">
                      <h3 className="text-md font-medium text-slate-900 dark:text-white">JavaScript SDK</h3>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        Embed Crystal AI capabilities in your web applications.
                      </p>
                      <a href="#" className="mt-2 inline-flex items-center text-sm text-purple-600 dark:text-purple-400 hover:underline">
                        Read guide <ArrowRight size={14} className="ml-1" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'api' && (
            <div className="space-y-6">
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Complete reference documentation for the Crystal AI API endpoints and parameters.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 dark:bg-slate-700/30 rounded-lg">
                  <h3 className="text-md font-medium text-slate-900 dark:text-white">Models</h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Create, train, and manage AI models
                  </p>
                  <div className="mt-3 space-y-2">
                    <a href="#" className="block text-sm text-purple-600 dark:text-purple-400 hover:underline">GET /api/models</a>
                    <a href="#" className="block text-sm text-purple-600 dark:text-purple-400 hover:underline">POST /api/models</a>
                    <a href="#" className="block text-sm text-purple-600 dark:text-purple-400 hover:underline">GET /api/models/{'{id}'}</a>
                    <a href="#" className="block text-sm text-purple-600 dark:text-purple-400 hover:underline">PUT /api/models/{'{id}'}</a>
                    <a href="#" className="block text-sm text-purple-600 dark:text-purple-400 hover:underline">DELETE /api/models/{'{id}'}</a>
                  </div>
                </div>
                
                <div className="p-4 bg-slate-50 dark:bg-slate-700/30 rounded-lg">
                  <h3 className="text-md font-medium text-slate-900 dark:text-white">Training</h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Train models and manage training sessions
                  </p>
                  <div className="mt-3 space-y-2">
                    <a href="#" className="block text-sm text-purple-600 dark:text-purple-400 hover:underline">POST /api/models/{'{id}'}/train</a>
                    <a href="#" className="block text-sm text-purple-600 dark:text-purple-400 hover:underline">GET /api/training-sessions</a>
                    <a href="#" className="block text-sm text-purple-600 dark:text-purple-400 hover:underline">GET /api/training-sessions/{'{id}'}</a>
                    <a href="#" className="block text-sm text-purple-600 dark:text-purple-400 hover:underline">PUT /api/training-sessions/{'{id}'}/cancel</a>
                  </div>
                </div>
                
                <div className="p-4 bg-slate-50 dark:bg-slate-700/30 rounded-lg">
                  <h3 className="text-md font-medium text-slate-900 dark:text-white">Predictions</h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Generate predictions using trained models
                  </p>
                  <div className="mt-3 space-y-2">
                    <a href="#" className="block text-sm text-purple-600 dark:text-purple-400 hover:underline">POST /api/models/{'{id}'}/predict</a>
                    <a href="#" className="block text-sm text-purple-600 dark:text-purple-400 hover:underline">POST /api/models/{'{id}'}/batch-predict</a>
                    <a href="#" className="block text-sm text-purple-600 dark:text-purple-400 hover:underline">GET /api/predictions/{'{id}'}</a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'examples' && (
            <div className="space-y-6">
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Example code and notebooks to help you get started quickly with Crystal AI.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 dark:bg-slate-700/30 rounded-lg overflow-hidden">
                  <div className="p-5">
                    <h3 className="text-lg font-medium text-slate-900 dark:text-white">Image Recognition</h3>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                      Build and train a custom image recognition model using Crystal AI.
                    </p>
                    <div className="mt-4 flex items-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                        Python
                      </span>
                      <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                        Computer Vision
                      </span>
                    </div>
                  </div>
                  <div className="px-5 py-3 bg-slate-100 dark:bg-slate-700/50 border-t border-slate-200 dark:border-slate-600">
                    <a href="#" className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline">
                      View Example →
                    </a>
                  </div>
                </div>
                
                <div className="bg-slate-50 dark:bg-slate-700/30 rounded-lg overflow-hidden">
                  <div className="p-5">
                    <h3 className="text-lg font-medium text-slate-900 dark:text-white">NLP with Quantum Optimization</h3>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                      Natural language processing with quantum-inspired optimization techniques.
                    </p>
                    <div className="mt-4 flex items-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                        Python
                      </span>
                      <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                        NLP
                      </span>
                    </div>
                  </div>
                  <div className="px-5 py-3 bg-slate-100 dark:bg-slate-700/50 border-t border-slate-200 dark:border-slate-600">
                    <a href="#" className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline">
                      View Example →
                    </a>
                  </div>
                </div>
                
                <div className="bg-slate-50 dark:bg-slate-700/30 rounded-lg overflow-hidden">
                  <div className="p-5">
                    <h3 className="text-lg font-medium text-slate-900 dark:text-white">Time Series Forecasting</h3>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                      Multi-dimensional time series forecasting for financial data.
                    </p>
                    <div className="mt-4 flex items-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                        Python
                      </span>
                      <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
                        Forecasting
                      </span>
                    </div>
                  </div>
                  <div className="px-5 py-3 bg-slate-100 dark:bg-slate-700/50 border-t border-slate-200 dark:border-slate-600">
                    <a href="#" className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline">
                      View Example →
                    </a>
                  </div>
                </div>
                
                <div className="bg-slate-50 dark:bg-slate-700/30 rounded-lg overflow-hidden">
                  <div className="p-5">
                    <h3 className="text-lg font-medium text-slate-900 dark:text-white">JavaScript Integration</h3>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                      Integrating Crystal AI into web applications using the JS SDK.
                    </p>
                    <div className="mt-4 flex items-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                        JavaScript
                      </span>
                      <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300">
                        Web
                      </span>
                    </div>
                  </div>
                  <div className="px-5 py-3 bg-slate-100 dark:bg-slate-700/50 border-t border-slate-200 dark:border-slate-600">
                    <a href="#" className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline">
                      View Example →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'releases' && (
            <div className="space-y-8">
              <div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-300 font-medium">v3.2</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-slate-900 dark:text-white">Version 3.2.0</h3>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Released on April 15, 2025</p>
                    
                    <div className="mt-3 text-sm text-slate-600 dark:text-slate-300 space-y-2">
                      <p>This release includes major improvements to the quantum processing capabilities and new visualization tools.</p>
                      
                      <h4 className="font-medium text-slate-900 dark:text-white mt-4">New Features</h4>
                      <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 space-y-1">
                        <li>Advanced quantum optimization algorithms for improved model performance</li>
                        <li>Interactive 3D visualization of neural network architectures</li>
                        <li>Expanded API for custom model integration</li>
                      </ul>
                      
                      <h4 className="font-medium text-slate-900 dark:text-white mt-4">Bug Fixes</h4>
                      <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 space-y-1">
                        <li>Fixed memory leak in long-running training sessions</li>
                        <li>Resolved UI rendering issues in dashboard metrics</li>
                        <li>Improved error handling for batch predictions</li>
                      </ul>
                    </div>
                    
                    <a href="#" className="mt-4 inline-flex items-center text-sm text-purple-600 dark:text-purple-400 hover:underline">
                      View full release notes <ArrowRight size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                    <span className="text-slate-600 dark:text-slate-300 font-medium">v3.1</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-slate-900 dark:text-white">Version 3.1.0</h3>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Released on March 2, 2025</p>
                    
                    <div className="mt-3 text-sm text-slate-600 dark:text-slate-300 space-y-2">
                      <p>This release introduces multi-dimensional data support and several performance improvements.</p>
                      
                      <h4 className="font-medium text-slate-900 dark:text-white mt-4">New Features</h4>
                      <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 space-y-1">
                        <li>Support for 24-dimensional data representation</li>
                        <li>Enhanced model export capabilities</li>
                        <li>New Python SDK with comprehensive documentation</li>
                      </ul>
                      
                      <h4 className="font-medium text-slate-900 dark:text-white mt-4">Improvements</h4>
                      <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 space-y-1">
                        <li>50% faster training for large datasets</li>
                        <li>Reduced memory footprint for deployed models</li>
                        <li>Improved dashboard performance for real-time metrics</li>
                      </ul>
                    </div>
                    
                    <a href="#" className="mt-4 inline-flex items-center text-sm text-purple-600 dark:text-purple-400 hover:underline">
                      View full release notes <ArrowRight size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Documentation;