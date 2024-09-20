import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './Routes/App';
import Fabric from './Routes/Fabric';
import Patterns from './Routes/Patterns';
import Projects from './Routes/Projects';
import AddFabric from './Routes/AddFabric';
import AddPatterns from './Routes/AddPatterns';
import AddProjects from './Routes/AddProjects';
import About from './Routes/About';
import Home from './Routes/Home';
import '../src/Styles/index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "fabric",
    element: <Fabric />,
  },
  {
    path: "patterns",
    element: <Patterns />,
  },
  {
    path: "projects",
    element: <Projects />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "addpatterns",
    element: <AddPatterns />,
  },
  {
    path: "addprojects",
    element: <AddProjects />,
  },
  {
    path: "addfabric",
    element: <AddFabric />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
