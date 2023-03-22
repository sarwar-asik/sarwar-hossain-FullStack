import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <h2>This is Home</h2>,
      },
    ],
  },
]);

export default routes;
