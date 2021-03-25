import {
  ComponentsStyles,
  INavStyleProps,
  INavStyles,
  ISearchBoxStyleProps,
  ISearchBoxStyles,
} from "@fluentui/react";
import { ISideNavYeasinDribble } from "../../components/SideNav/SideNavYeasin/SideNavYeasinDribble";
export interface IYeasinDribbleTheme {
  logoColor: string;
  sideNavWidth: number;
  sideNavMenuItemColor: string;
  sideNavLinkActiveColor: string;
  sideNavLinkInactiveColor: string;
  sideNavActiveMenuItemBackground: string;
  sideNavBackground: string;
  logoWrapperBackground: string;
  footerNavBackground: string;
  footerNavFontColor: string;
}
export const sidenavthemeprops: ISideNavYeasinDribble = {
  themeColors: {
    logoColor: "#fff",
    sideNavMenuItemColor: "#fff",
    sideNavLinkActiveColor: "#fff",
    sideNavLinkInactiveColor: "#9FABE9",
    sideNavActiveMenuItemBackground: "#435BD5",
    sideNavWidth: 280,
    sideNavBackground: "#2F49D0",
    logoWrapperBackground: "#3962F3",
    footerNavBackground: "#3962F3",
    footerNavFontColor: "#fff",
  } as IYeasinDribbleTheme,
};
// export const sidenavthemeprops: ISideNavYeasinDribble = {
//   themeColors: {
//     logoColor: "#fff",
//     sideNavMenuItemColor: "#fff",
//     sideNavLinkActiveColor: "#0BBC5C",
//     sideNavLinkInactiveColor: "#8D929A",
//     sideNavActiveMenuItemBackground: "#1F3027",
//     sideNavWidth: 280,
//     sideNavBackground: "#161619",
//     logoWrapperBackground: "#1F1F22",
//     footerNavBackground: "#1F1F22",
//     footerNavFontColor: "#fff",
//   } as IYeasinDribbleTheme,
// };
const {
  sideNavActiveMenuItemBackground,
  sideNavLinkActiveColor,
  sideNavLinkInactiveColor,
} = sidenavthemeprops.themeColors;
const yeasinArafatComponents: ComponentsStyles = {
  SearchBox: {
    styles: (searchBoxProps: ISearchBoxStyleProps): ISearchBoxStyles => {
      return {
        clearButton: {},
        field: {
          padding: "20px 30px",
          border: "none",
          fontSize: 16,
          "&::placeholder": {
            color: sideNavLinkActiveColor,
          },
        },
        icon: { fontSize: 20, color: sideNavLinkActiveColor, marginLeft: 20 },
        iconContainer: {},
        root: {
          height: "auto",
          borderRadius: 10,
          background: sideNavActiveMenuItemBackground,
          border: "none",
        },
      };
    },
  },
  Nav: {
    styles: (navItemProps: INavStyleProps) => {
      const { isSelected } = navItemProps;
      const borderRadius = 10;
      return {
        root: {},
        navItems: {},
        group: {},
        groupContent: {},
        navItem: {
          margin: " 10px 0 ",
        },
        compositeLink: {
          "&:hover .ms-Nav-link": {
            background: !isSelected
              ? "transparent !important"
              : sideNavActiveMenuItemBackground + " !important",
          },

          ".ms-Button-icon": {
            color: isSelected
              ? sideNavLinkActiveColor
              : sideNavLinkInactiveColor,
            marginRight: 20,
          },
        },
        link: {
          background: isSelected ? sideNavActiveMenuItemBackground : "",
          padding: "30px 20px",
          borderRadius: borderRadius,
          color: isSelected ? sideNavLinkActiveColor : sideNavLinkInactiveColor,
          "&:after": {
            border: "none",
          },
          "&:hover, &:active": {
            color: sideNavLinkActiveColor,
            ".ms-Button-icon": {
              color: sideNavLinkActiveColor,
              marginRight: 20,
            },
          },
        },
        chevronButton: {},
        chevronIcon: {},
        linkText: {
          fontSize: 18,
          fontWeight: 300,
        },
      } as INavStyles;
    },
  },
};
export default yeasinArafatComponents;
