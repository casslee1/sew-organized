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
import AddSample from './Routes/AddSample';
import About from './Routes/About';
import Home from './Routes/Home';
import Sample from './Routes/Sample';
import FabricEntry from './Routes/FabricEntry';
import PatternEntry from './Routes/PatternEntry';
import ProjectEntry from './Routes/ProjectEntry';
import SampleEntry from './Routes/SampleEntry';
// import EditPattern from './Routes/EditPattern';
// import EditProject from './Routes/EditProject';
// import EditFabric from './Routes/EditFabric';
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
    path: "sample",
    element: <Sample />,
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
  {
    path: "addsample",
    element: <AddSample />,
  },
  {
    path: "fabricentry",
    element: <FabricEntry />,
  },
  {
    path: "patternentry",
    element: <PatternEntry />,
  },
  {
    path: "projectentry",
    element: <ProjectEntry />,
  },
  {
    path: "sampleentry",
    element: <SampleEntry />,
  },
  // {
  //   path: "editproject",
  //   element: <EditProject />,
  // },
  // {
  //   path: "editpattern",
  //   element: <EditPattern />,
  // },
  // {
  //   path: "editfabric",
  //   element: <EditFabric />,
  // },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
