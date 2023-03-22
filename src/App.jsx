import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./router/Router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      {/* <h2 className="text-2xl text-red-600">App .js file</h2> */}
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
