import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Import components
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import ModelExplorer from './pages/ModelExplorer';
import Visualizer from './pages/Visualizer';
import Documentation from './pages/Documentation';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="models" element={<ModelExplorer />} />
          <Route path="visualize" element={<Visualizer />} />
          <Route path="docs" element={<Documentation />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;