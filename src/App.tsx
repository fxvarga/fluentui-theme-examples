import { initializeIcons } from "@fluentui/react";
import React from "react";
import "./App.css";
import SideNavDefaultPage from "./pages/navigation/SideNavDefaultPage";
import SideNavIvoDribblePage from "./pages/navigation/SideNavIvoDribblePage";
import SideNavMaterialXDribblePage from "./pages/navigation/SideNavMaterialXDribble";
import SideNavYeasinDribblePage from "./pages/navigation/SideNavYeasinDribblePage";
initializeIcons();

function App() {
  return (
    <>
      <SideNavDefaultPage />
      <SideNavIvoDribblePage />
      <SideNavMaterialXDribblePage />
      <SideNavYeasinDribblePage />
    </>
  );
}

export default App;
