import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/components/layout/Header';
import HomePage from '../src/pages/HomePage';
import SkillTestPage from '../src/pages/SkillTestPage';
import DashboardPage from '../src/pages/DashboardPage';
import LearningPathPage from '../src/pages/LearningPathPage';
import SignUpPage from '../src/pages/SignUpPage';
import SignInPage from '../src/pages/SignInPage';
const App = () => {
  return (
    <Router>
      <Header />
      
     
        <Routes>
          <Route path="/" element={< HomePage />} />
          <Route path="/skill-test" element={<SkillTestPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/learning-path" element={<LearningPathPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
     
    </Router>
  );
};

export default App;
