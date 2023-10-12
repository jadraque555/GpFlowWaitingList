import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from './store';  // Import your Redux store

import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages';
import InvestmentOpportunities from './pages/investment-opportunities';
import ProcessCompleted from './pages/process-completed';
import WaitingLists from './pages/waiting-lists';

const App = () => {
  return (
    <Provider store={store}>
       <div className="App">
          <AppRoutes />
          <ToastContainer />
       </div>
    </Provider>
  );
};

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/investment-opportunities" element={<InvestmentOpportunities />} /> 
          <Route path="/process-completed" element={<ProcessCompleted />} /> 
          <Route path="/waiting-lists" element={<WaitingLists />} /> 
          {/* <Route path="/investment-goal" element={<InvestmentGoalScreen />} />
          <Route path="/experience-level" element={<ExperienceLevelScreen />} />
          <Route path="/investment-list" element={<InvestmentList />} /> */}
        </Routes>
    </Router>
  )
}

export default App;
