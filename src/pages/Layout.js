import logo from '../logo.svg';
import '../App.css';
import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <code className="App-title">React Sample Code</code>
      </header>
      <main>
        <nav>
          <ul>
            <li>
              <NavLink to="/counter" className={(link)=>link.isActive?"active":""}>Counter</NavLink>
            </li>
            <li>
              <NavLink to="/event">Event</NavLink>
            </li>
            <li>
              <NavLink to="/notification-counter">Notification Counter</NavLink>
            </li>
            <li>
              <NavLink to="/form">Form</NavLink>
            </li>
            <li>
              <NavLink to="/quiz">Quiz</NavLink>
            </li>
            <li>
              <NavLink to="/select">Select</NavLink>
            </li>
            <li>
              <NavLink to="/method-as-props">Method As Props</NavLink>
            </li>
            <li>
              <NavLink to="/table">Table</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>
            <li>
              <NavLink to="/cart-function">Cart Function</NavLink>
            </li>
            <li>
              <NavLink to="/todolist">TodoList</NavLink>
            </li>
            <li>
              <NavLink to="/todolist-function">TodoList Function</NavLink>
            </li>
            <li>
              <NavLink to="/note">Note</NavLink>
            </li>
            <li>
              <NavLink to="/callback">CallBack</NavLink>
            </li>
            <li>
              <NavLink to="/lifecycle">Lifecycle</NavLink>
            </li>
            <li>
              <NavLink to="/params">Params</NavLink>
            </li>
            <li>
              <NavLink to="/outlet">Outlet</NavLink>
            </li>
            <li>
              <NavLink to="/permission-root">Permission Root</NavLink>
            </li>
            <li>
              <NavLink to="/custom-hook">Custom Hook</NavLink>
            </li>
          </ul>
        </nav>
        <Outlet />
      </main>
    </div>
  )
};

export default Layout;