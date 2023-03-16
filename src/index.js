import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import './index.css';
import reportWebVitals from './reportWebVitals';
import Counter from './pages/Counter';
import Event from './pages/Event';
import NotificationCounter from './pages/NotificationCounter';
import Layout from './pages/Layout';
import LayoutRoot from './pages/LayoutRoot';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        
      </Route>
      <Route path="/" element={<LayoutRoot />}>
        <Route path="counter" element={<Counter />} />
        <Route path="event" element={<Event />} />
        <Route path="notification-counter" element={<NotificationCounter />} />
      </Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
