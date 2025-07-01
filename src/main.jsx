import "./styles/reset.css";
import "./styles/style.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root";
import Home from "./routes/home";
import Projects from "./routes/projects";
import ProjectDetail from "./routes/projectDetail";
import About from "./routes/about";

const router = createBrowserRouter([
  {
    id: "root",
    path: `/`,
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: `/projects`,
        element: <Projects />,
      },
      {
        path: `/projects/:id`,
        element: <ProjectDetail />,
        loader: ProjectDetail.loader,
      },
      {
        path: `/about`,
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
