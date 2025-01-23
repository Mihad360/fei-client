import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Authprovider from "./authprovider/Authprovider";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-gray-100 min-h-screen font">
      <ToastContainer />
      <QueryClientProvider client={queryClient}>
        <Authprovider>
          <RouterProvider router={router}></RouterProvider>
        </Authprovider>
      </QueryClientProvider>
    </div>
  </StrictMode>
);
