import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import CreateBillScreen from './screens/CreateBillScreen';
import JoinBillScreen from './screens/JoinBillScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/create" element={<CreateBillScreen />} />
        <Route path="/join" element={<JoinBillScreen />} />
      </Routes>
    </Router>
  );
}

export default App;