import React from "react";
import LeftSideNavFullHeight from "../../layout/LeftSideNavFullHeight";
import { ThemeProvider } from "@fluentui/react";
import yeasinArafatComponents, {
  sidenavthemeprops,
} from "../../styles/themes/YeasinArafatComponents";
import SideNavYeasinDribble from "../../components/SideNav/SideNavYeasin/SideNavYeasinDribble";

function SideNavYeasinDribblePage() {
  return (
    <ThemeProvider theme={{ components: yeasinArafatComponents }}>
      <LeftSideNavFullHeight
        sidenav={<SideNavYeasinDribble {...sidenavthemeprops} />}
      />
    </ThemeProvider>
  );
}

export default SideNavYeasinDribblePage;
