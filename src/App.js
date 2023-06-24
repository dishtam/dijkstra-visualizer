import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';

function App() {
  return (
    <BrowserRouter basename="/dijkstra-visualizer">
      <Routes>
        <Route path="/" element={<PathfindingVisualizer />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
