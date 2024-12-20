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
import EditPattern from './Routes/EditPattern';
import EditProject from './Routes/EditProject';
import EditFabric from './Routes/EditFabric';
import SignIn from './Routes/SignIn';
import SignUp from './Routes/SignUp';
import '../src/Styles/index.css';
import { UserProvider } from "./Context/UserContext.jsx";

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
    path: "signIn",
    element: <SignIn />,
  },
  {
    path: "signUp",
    element: <SignUp />,
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
    path: "fabricentry/:id",
    element: <FabricEntry />,
  },
  {
    path: "patternentry/:id",
    element: <PatternEntry />,
  },
  {
    path: "projectentry/:id",
    element: <ProjectEntry />,
  },
  {
    path: "sampleentry",
    element: <SampleEntry />,
  },
 {
    path: "project/edit/:id",
    element: <EditProject />,
  },
  {
    path: "pattern/edit/:id",
    element: <EditPattern />,
  },
  {
    path: "fabric/edit/:id",
    element: <EditFabric />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>
);
