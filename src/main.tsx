import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import ProjectPage from "./ProjectPage";
import PersonalWeb from "./projectPages/personalWebsite";
import TldrPlus from "./projectPages/TLDRplus";
import Mastermind from "./projectPages/mastermind";
import Flowremi from "./projectPages/flowremi";
import CompleterAI from "./projectPages/completerai";
import DiagnoseAI from "./projectPages/diagnoseai";
import Nakamura from "./projectPages/nakamura";
import Sign2Speech from "./projectPages/sign2speech";
import Socielle from "./projectPages/socielle";
import Soil from "./projectPages/soil";

const router = createBrowserRouter([
  {
    path: "/hugochen/",
    element: <App />,
    children: [
      {
        path: "/hugochen/",
        element: <HomePage />,
      },
      {
        path: "/hugochen/projects",
        element: <ProjectPage />,
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
        path: "/hugochen/CompleterAI",
        element: <CompleterAI />,
      },
      {
        path: "/hugochen/projects/Nakamura",
        element: <Nakamura />,
      },
      {
        path: "/hugochen/projects/Sign2Speech",
        element: <Sign2Speech />,
      },
      {
        path: "/hugochen/projects/DiagnoseAI",
        element: <DiagnoseAI />,
      },
      {
        path: "/hugochen/projects/TldrPlus",
        element: <TldrPlus />,
      },
      {
        path: "/hugochen/projects/Socielle",
        element: <Socielle />,
      },
      {
        path: "/hugochen/projects/Soil",
        element: <Soil />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
