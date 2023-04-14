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
              <Link to="/">Back to Home</Link>
            </li>
            
          </ul>
        </nav>

        <Outlet />
      </main>
    </div>
  )
};

export default Layout;