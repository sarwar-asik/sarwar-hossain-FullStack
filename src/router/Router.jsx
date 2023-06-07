import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import SignUp from "../pages/Signup";
import Login from "../pages/Login";
import Project from "../pages/Project";
import DetailsProjects from "../pages/DetailsProjects";
import Experience from "../pages/Experience/Experience";
import EducationExp from "../pages/Experience/EducationExp";
import Skills from "../pages/Experience/Skills";
import ContactMe from "../pages/ContactMe";
import Features from "../pages/Features";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
      {
        path: "/projectsDetails/:name",
        element: <DetailsProjects />,
      },
      // {
      //   path: "/experience",
      //   element: <Experience>
      //     <EducationExp/>
      //     <Skills/>
      //   </Experience>,
      //   children: [
      //     {
      //       path: "/experience",
      //       element: <Experience>
      //         <EducationExp/>
      //         <Skills/>
      //       </Experience>,
      //     },
      //     {
      //       path: "/experience/education",
      //       element: <EducationExp/>
      //     },
      //     {
      //       path: "/experience/skills",
      //       element: <Skills/>
      //     },
      //   ],
      // },
      {
        path: "/education",
        element: <EducationExp/>
      },
      {
        path: "/contact",
        element: <ContactMe/>
      },
      {
        path: "/about",
        element: <Features/>
      },
      {
        path: "/skills",
        element: <Skills/>
      },
    ],
  },
]);

export default routes;
