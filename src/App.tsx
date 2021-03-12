import { initializeIcons } from "@fluentui/react";
import React from "react";
import "./App.css";
import SideNavMaterialXDribblePage from "./pages/navigation/SideNavMaterialXDribble";
initializeIcons();

function App() {
  // return <SideNavDefault />;
  return <SideNavMaterialXDribblePage />;
}

export default App;
