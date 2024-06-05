import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import ProjectPage from "./ProjectPage";
import SocialsPage from "./BackgroundPage";
import PersonalWeb from "./projectPages/personalWebsite";
import TldrPlus from "./projectPages/TLDRplus";
import Mastermind from "./projectPages/mastermind";
import Flowremi from "./projectPages/flowremi";

const router = createBrowserRouter([
  {
    path: "/hugochen/",
    element: <App />,
    children: [
      {
        path: "/hugochen/",
        element: <ProjectPage />,
      },
      {
        path: "/hugochen/projects",
        element: <ProjectPage />,
      },
      {
        path: "/hugochen/background",
        element: <SocialsPage />,
      },
      {
        path: "/hugochen/projects/personalWeb",
        element: <PersonalWeb />,
      },
      {
        path: "/hugochen/projects/Mastermind",
        element: <Mastermind />,
      },
      {
        path: "/hugochen/projects/Flowremi",
        element: <Flowremi />,
      },
      {
        path: "/hugochen/projects/TldrPlus",
        element: <TldrPlus />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
