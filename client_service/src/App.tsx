import React from 'react';
import Header from './shared/components/Header/Header';
import "./App.css";
import FragrancePage from './pages/FragrancePage/FragrancePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GeneralPage from './pages/GeneralPage/GeneralPage';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<GeneralPage />} />
          <Route path="/products/fragrance" element={<FragrancePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;