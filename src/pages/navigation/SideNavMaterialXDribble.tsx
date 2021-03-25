import React from "react";
import LeftSideNavFullHeight from "../../layout/LeftSideNavFullHeight";
import { ThemeProvider } from "@fluentui/react";
import SideNavMaterialXDribble from "../../components/SideNav/SideNavMaterialXDribble/SideNavMaterialXDribble";
import materialXComponents from "../../styles/themes/MaterialXComponents";

function SideNavMaterialXDribblePage() {
  return (
    <ThemeProvider theme={{ components: materialXComponents }}>
      <LeftSideNavFullHeight sidenav={<SideNavMaterialXDribble />} />
    </ThemeProvider>
  );
}

export default SideNavMaterialXDribblePage;
