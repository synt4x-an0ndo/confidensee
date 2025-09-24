import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import all converted pages
import LanguagePage from './pages/LanguagePage';
import AISetupPage from './pages/AISetupPage';
import AITrainingPage from './pages/AITrainingPage';
import AIVideoPage from './pages/AIVideoPage';
import DashboardPage from './pages/DashboardPage';
import IndexPage from './pages/IndexPage';
import PerformancePage from './pages/PerformancePage';
import PricingPage from './pages/PricingPage';
import ProfilePage from './pages/ProfilePage';
import QuestionPacksPage from './pages/QuestionPacksPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/language" element={<LanguagePage />} />
        <Route path="/ai-setup" element={<AISetupPage />} />
        <Route path="/ai-training" element={<AITrainingPage />} />
        <Route path="/aivideo" element={<AIVideoPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/performance" element={<PerformancePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/question-packs" element={<QuestionPacksPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
