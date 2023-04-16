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
import Form from './pages/Form';
import Quiz from './pages/Quiz';
import Select from './pages/Select';
import MethodAsProps from './pages/MethodAsProps';
import Table from './pages/Table';
import Cart from './pages/Cart';
import CartFunction from './pages/CartFunction';
import TodoList from './pages/TodoList';
import TodoListFunction from './pages/TodoListFunction';
import Note from './pages/Note';
import CallBack from './pages/CallBack';
import Lifecycle from './pages/Lifecycle';
import Params from './pages/Params';
import ParamsItem from './pages/ParamsItem';
import NotFound from './pages/NotFound';
import Outlet from './pages/Outlet';
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
        <Route path="form" element={<Form />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="select" element={<Select />} />
        <Route path="method-as-props" element={<MethodAsProps />} />
        <Route path="table" element={<Table />} />
        <Route path="cart" element={<Cart />} />
        <Route path="cart-function" element={<CartFunction />} />
        <Route path="todolist" element={<TodoList />} />
        <Route path="todolist-function" element={<TodoListFunction />} />
        <Route path="note" element={<Note />} />
        <Route path="callback" element={<CallBack />} />
        <Route path="lifecycle" element={<Lifecycle />} />
        <Route path="params" element={<Params />} />
        <Route path="params/:id" element={<ParamsItem />} />
        <Route path="*" element={<NotFound />} />
        <Route path="outlet/*" element={<Outlet />}>
          <Route path="outlet-root1" element={<div>content "root 1"</div>} />
          <Route path="outlet-root2" element={<div>content "root 2"</div>} />
        </Route>
      </Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
