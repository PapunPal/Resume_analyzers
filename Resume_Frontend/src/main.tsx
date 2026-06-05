import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";



import { AuthProvider } from "./context/AuthContext.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import Landing from "./pages/Landing.tsx";
import Dashbord from "./pages/Dashbord.tsx";
import ResumeDetails from "./pages/ResumeDetails.tsx";
import ResumeUpload from "./pages/ResumeUpload.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Landing />,

      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/dashboard",
        element: <Dashbord />
      },
      {
        path: "/resumes/:id",
        element: <ResumeDetails />
      },
      {
        path: "/resumes/upload",
        element: <ResumeUpload />
      }
    ]
  }

])

ReactDOM.createRoot(
  document.getElementById(
    "root"
  )!
).render(
  <React.StrictMode>

    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>
);