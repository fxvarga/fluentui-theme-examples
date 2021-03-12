import React from "react";
import LeftSideNavFullHeight from "../../layout/LeftSideNavFullHeight";
import { ThemeProvider } from "@fluentui/react";
import SideNavMaterialXDribble from "../../components/SideNavMaterialXDribble/SideNavMaterialXDribble";
import materialXComponents from "../../styles/themes/MaterialXComponents";
// import myDarkTheme from "../../styles/themes/DarkTheme";
//This could be a component

function SideNavMaterialXDribblePage() {
  return (
    <ThemeProvider theme={{ components: materialXComponents }}>
      <LeftSideNavFullHeight sidenav={<SideNavMaterialXDribble />} />
    </ThemeProvider>
  );
}

export default SideNavMaterialXDribblePage;
