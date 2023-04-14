import logo from '../logo.svg';
import '../App.css';
import { Outlet, Link, useParams } from "react-router-dom";

const Layout = () => {
  let params = useParams()
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
            {params.id && <li>
              <Link to="/params">Back to Params</Link>
            </li>}
          </ul>
        </nav>

        <Outlet />
        
      </main>
    </div>
  )
};

export default Layout;