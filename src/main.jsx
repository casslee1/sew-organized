import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './Routes/App';
import Fabric from './Routes/Fabric';
import Patterns from './Routes/Patterns';
import Projects from './Routes/Projects';
import About from './Routes/About';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
