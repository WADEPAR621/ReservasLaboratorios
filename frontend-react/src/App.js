import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React, {useState, useEffect} from 'react';
//import axios from 'axios';
import Login from './components/Login';

function App() {
  return (
    <Router>

      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <Login/>
            </>
          }>
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
