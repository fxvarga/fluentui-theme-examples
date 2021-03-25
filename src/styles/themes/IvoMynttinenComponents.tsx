import { ComponentsStyles, INavStyleProps, INavStyles } from "@fluentui/react";
import lightOrDark from "../../helpers/IsLightOrDark";

const IvoMynttinenComponents: ComponentsStyles = {
  Nav: {
    styles: (navItemProps: INavStyleProps) => {
      const { isSelected, theme } = navItemProps;
      const themePrimary = theme.palette.themePrimary;
      const activeBackground = themePrimary;
      const isLightActiveBackground = lightOrDark(activeBackground) === "light";
      const linkHoverColor = theme.palette.white;
      const textColor = theme.palette.white;
      const linkActiveColor = isLightActiveBackground ? textColor : "#fff";
      return {
        root: {},
        navItems: {},
        group: {},
        groupContent: {},
        navItem: {},
        compositeLink: {
          "&:hover .ms-Nav-link": {
            background: !isSelected
              ? theme.palette.themeDark + " !important"
              : activeBackground + " !important",
          },
          ".ms-Button": {
            height: "100%",
            lineHeight: "0",
            padding: "15px 10px",
          },
          ".ms-Button-icon": {
            color: isSelected ? linkActiveColor : linkHoverColor,
          },
          ".ms-Nav-link > span": {
            display: "flex",
            flexDirection: "column",
            height: "auto",
            lineHeight: "auto",
          },
          ".ms-Nav-link": {},
        },
        link: {
          background: isSelected ? activeBackground : "",
          color: isSelected ? linkActiveColor : "inherit",
          "&:hover, &:active": {
            background: isSelected ? activeBackground : "",
            color: isSelected ? linkActiveColor : linkHoverColor,
            ".ms-Button-icon": {
              color: isSelected ? linkActiveColor : linkHoverColor,
            },
          },
          "&:after": {
            borderColor: theme.palette.themeLight,
          },
        },
        chevronButton: {},
        chevronIcon: {},
        linkText: {
          fontSize: 14,
          lineHeight: 16,
          height: "auto",
          color: textColor,
          fontWeight: 400,
        },
      } as INavStyles;
    },
  },
};
export default IvoMynttinenComponents;
