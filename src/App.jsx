import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

import { RouterProvider } from "react-router-dom";
import routes from "./router/Router";

const queryClient = new QueryClient();
function App() {
  // const queryClient = new QueryClient();
  const [count, setCount] = useState(0);
  return (
    <div className="">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes}></RouterProvider>
      </QueryClientProvider>
      
    </div>
  );
}

export default App;
