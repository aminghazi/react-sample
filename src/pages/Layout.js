import logo from '../logo.svg';
import '../App.css';
import { Outlet, Link } from "react-router-dom";

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
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/event">Event</Link>
            </li>
            <li>
              <Link to="/notification-counter">Notification Counter</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
            <li>
              <Link to="/quiz">Quiz</Link>
            </li>
            <li>
              <Link to="/select">Select</Link>
            </li>
            <li>
              <Link to="/method-as-props">Method As Props</Link>
            </li>
            <li>
              <Link to="/table">Table</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/cart-function">Cart Function</Link>
            </li>
            <li>
              <Link to="/todolist">TodoList</Link>
            </li>
            <li>
              <Link to="/todolist-function">TodoList Function</Link>
            </li>
            <li>
              <Link to="/note">Note</Link>
            </li>
            <li>
              <Link to="/callback">CallBack</Link>
            </li>
            <li>
              <Link to="/lifecycle">Lifecycle</Link>
            </li>
            <li>
              <Link to="/params">Params</Link>
            </li>
            <li>
              <Link to="/outlet">Outlet</Link>
            </li>
          </ul>
        </nav>

        <Outlet />
      </main>
    </div>
  )
};

export default Layout;