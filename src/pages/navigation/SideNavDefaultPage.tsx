import React from "react";
import LeftSideNavFullHeight from "../../layout/LeftSideNavFullHeight";
import SideNavWithPersona from "../../components/SideNav/SideNavWithPersona/SideNav";
import myDarkTheme from "../../styles/themes/DarkTheme";
import { ThemeProvider } from "@fluentui/react";

function SideNavDefaultPage() {
  return (
    <ThemeProvider theme={myDarkTheme} applyTo="body">
      <LeftSideNavFullHeight sidenav={<SideNavWithPersona />} />
    </ThemeProvider>
  );
}

export default SideNavDefaultPage;
