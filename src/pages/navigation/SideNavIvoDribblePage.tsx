import React from "react";
import LeftSideNavFullHeight from "../../layout/LeftSideNavFullHeight";
import { ThemeProvider } from "@fluentui/react";
import SideNavIvoDribble from "../../components/SideNav/SideNavIvoDribble/SideNavIvoDribble";
import IvoMynttinenComponents from "../../styles/themes/IvoMynttinenComponents";
import myLightTheme from "../../styles/themes/LightTheme";

function SideNavIvoDribblePage() {
  return (
    <ThemeProvider
      theme={{ ...myLightTheme, components: IvoMynttinenComponents }}
    >
      <LeftSideNavFullHeight sidenav={<SideNavIvoDribble />} />
    </ThemeProvider>
  );
}

export default SideNavIvoDribblePage;
