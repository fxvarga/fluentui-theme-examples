import React from "react";
import LeftSideNavFullHeight from "../../layout/LeftSideNavFullHeight";
import {
  ComponentsStyles,
  INavStyleProps,
  INavStyles,
  ThemeProvider,
} from "@fluentui/react";
import SideNavMaterialXDribble from "../../components/SideNavMaterialXDribble/SideNavMaterialXDribble";
//This could be a component
const materialXComponents: ComponentsStyles = {
  Nav: {
    styles: (navItemProps: INavStyleProps) => {
      const { isSelected } = navItemProps;
      return ({
        compositeLink: {
          "&:hover .ms-Nav-link": {
            background: !isSelected
              ? "transparent !important"
              : "#e2edfc !important",
          },
          ".ms-Button-icon": {
            color: isSelected ? "#0f56b3" : "inherit",
          },
        },
        link: {
          background: isSelected ? "#e2edfc" : "",
          paddingLeft: 20,
          borderRadius: " 0 10px 10px 0",
          color: isSelected ? "#0f56b3" : "#444",
          "&:after": {
            border: "none",
          },
        },
        linkText: {
          fontSize: 16,
          fontWeight: 600,
        },
      } as unknown) as INavStyles;
    },
  },
};
function SideNavMaterialXDribblePage() {
  return (
    <ThemeProvider theme={{ components: materialXComponents }}>
      <LeftSideNavFullHeight sidenav={<SideNavMaterialXDribble />} />
    </ThemeProvider>
  );
}

export default SideNavMaterialXDribblePage;
