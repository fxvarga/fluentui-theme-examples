import {
  ComponentsStyles,
  getShade,
  IColor,
  INavStyleProps,
  INavStyles,
  Shade,
} from "@fluentui/react";
import lightOrDark from "../../helpers/IsLightOrDark";

const materialXComponents: ComponentsStyles = {
  Nav: {
    styles: (navItemProps: INavStyleProps) => {
      const { isSelected, theme } = navItemProps;
      const borderRadius = "0 10px 10px 0";
      const themePrimary = theme.palette.themePrimary;
      const activeBackground = themePrimary;
      const isLightActiveBackground = lightOrDark(activeBackground) === "light";
      const linkHoverColor = theme.palette.themePrimary;
      const textColor = theme.palette.black;
      const linkActiveColor = isLightActiveBackground ? textColor : "#fff";
      return {
        root: {},
        navItems: {},
        group: {},
        groupContent: {},
        navItem: {
          "& > ul": {
            marginLeft: 35,
            marginBottom: 5,
            " .ms-Nav-link": {
              border: 0,
              borderLeft: "2px solid #dedede",
              paddingLeft: 25,
            },
            ".ms-Nav-linkText": {
              fontSize: 14,
              color: getShade({ hex: textColor } as IColor, Shade.Shade8),
            },
          },
        },
        compositeLink: {
          "&:hover .ms-Nav-link": {
            background: !isSelected
              ? "transparent !important"
              : activeBackground + " !important",
          },
          ".ms-Button-icon": {
            color: isSelected ? linkActiveColor : linkHoverColor,
          },
        },
        link: {
          background: isSelected ? activeBackground : "",
          paddingLeft: 20,
          borderRadius: borderRadius,
          color: isSelected ? linkActiveColor : "inherit",
          "&:after": {
            border: "none",
          },
          "&:hover": {
            color: isSelected ? linkActiveColor : linkHoverColor,
            ".ms-Button-icon": {
              color: isSelected ? linkActiveColor : linkHoverColor,
            },
          },
        },
        chevronButton: {
          display: "flex",
          color: isSelected ? linkActiveColor : linkHoverColor,
          width: 40,
          position: "absolute",
          justifyContent: "center",
          left: "auto",
          right: 0,
          borderRadius: borderRadius,
          background: "transparent",
          "&:after": {
            border: "none",
          },
        },
        chevronIcon: {
          display: "flex",
          position: "relative",
          left: "auto",
        },
        linkText: {
          fontSize: 16,
          fontWeight: 600,
        },
      } as INavStyles;
    },
  },
};
export default materialXComponents;
