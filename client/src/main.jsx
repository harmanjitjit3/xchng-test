import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  Navigate,
  createBrowserRouter,
} from "react-router-dom";
import { Provider } from "react-redux";
// import { store } from "@/store/store.js";
import { Toaster } from "react-hot-toast";
import Layout from "@/Layout.jsx";
import Auth from "@/pages/Auth.jsx";
import Login from "@/pages/Login.jsx";
import Register from "@/pages/Register.jsx";
import Home from "@/pages/Home.jsx";
import SearchPage from "@/pages/Search.jsx";
import Profile from "@/pages/Profile.jsx";
import NotFound from "@/pages/NotFound.jsx";
const router = createBrowserRouter([
  { path: "/", element: <Auth /> },
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },

  {
    path: "/app",
    element: <Layout />,
    children: [
      { index: true, path: "home", element: <Home /> },
      { path: "search", element: <SearchPage /> },
      { path: "profile", element: <Profile /> },
    ],
  },

  { path: "*", element: <NotFound /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
    <Toaster position="top-right" reverseOrder={false} />
  </>
);
