import { initializeIcons } from "@fluentui/react";
import React from "react";
import "./App.css";
import SideNavDefaultPage from "./pages/navigation/SideNavDefaultPage";
import SideNavIvoDribblePage from "./pages/navigation/SideNavIvoDribblePage";
import SideNavMaterialXDribblePage from "./pages/navigation/SideNavMaterialXDribble";
initializeIcons();

function App() {
  return (
    <>
      <SideNavDefaultPage />
      <SideNavMaterialXDribblePage />
      <SideNavIvoDribblePage />
    </>
  );
}

export default App;
