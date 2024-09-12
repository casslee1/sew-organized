import { Link } from "react-router-dom";
import './App.css'

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
          <Link to="fabric">fabric page</Link>
          </li>
          <li>
          <Link to="patterns">patterns page</Link>
          </li>
          <li>
          <Link to="projects">projects page</Link>
          </li>
          <li>
          <Link to="about">about page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;