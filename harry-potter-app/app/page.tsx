// Import necessary modules and components
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './index'; // Import the Homepage component
import CharacterPage from './character/[name]'; // Import the Character Details Page component

// Define the main Page component
const Page: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path="/character/:name" element={<CharacterPage/>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default Page;

