import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { DockerProjectDetail } from "./pages/DockerProjectDetail";
import { CallInsightsDetail } from "./pages/CallInsightsDetail";
import { UTSRedesignDetail } from "./pages/UTSRedesignDetail";
import { RootLayout } from "./layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "projects/docker-validator", Component: DockerProjectDetail },
      { path: "projects/call-insights", Component: CallInsightsDetail },
      { path: "projects/uts-redesign", Component: UTSRedesignDetail },
      { path: "*", Component: Home },
    ],
  },
]);
