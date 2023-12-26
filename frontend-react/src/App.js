
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React, {useState, useEffect} from 'react';
import MapaPisos from './components/MapaPisos.js';


function App() {
  return (
    <Router>

      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <MapaPisos/>
            </>
          }>
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
