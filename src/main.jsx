import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Post from "./pages/Post";
import NewUser from "./pages/NewUser";
import CreateAccount from "./pages/CreateAccount";
import NewPost from "./pages/NewPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/posts/:id",
    element: <Post />,
  },
  {
    path: "/new-user",
    element: <NewUser />,
  },
  {
    path: "/new-user/form",
    element: <CreateAccount />,
  },
  {
    path: "/new-post",
    element: <NewPost />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
