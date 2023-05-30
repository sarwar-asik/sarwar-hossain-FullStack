import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import SignUp from "../pages/Signup";
import Login from "../pages/Login";
import Project from "../pages/Project";
import DetailsProjects from "../pages/DetailsProjects";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/register",
        element: <SignUp/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/projects",
        element: <Project/>,
      },
      {
        path: "/projectsDetails/:name",
        element: <DetailsProjects/>,
      },
    ],
  },
]);

export default routes;
