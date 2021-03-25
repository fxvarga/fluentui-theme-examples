import {
  Nav,
  Persona,
  PersonaSize,
  SearchBox,
  Stack,
  Text,
} from "@fluentui/react";
import { ReactComponent as ReactLogo } from "../../../logo.svg";
import React from "react";
import { SideNavGroups, examplePersona } from "./SideNav.config";
import { IYeasinDribbleTheme } from "../../../styles/themes/YeasinArafatComponents";
export interface ISideNavYeasinDribble {
  themeColors: IYeasinDribbleTheme;
}

const SideNavYeasinDribble = (props: ISideNavYeasinDribble): JSX.Element => {
  const {
    logoColor,
    sideNavWidth,
    sideNavBackground,
    logoWrapperBackground,
    footerNavBackground,
    footerNavFontColor,
  } = props.themeColors;
  const personaStyles = {
    primaryText: {
      marginLeft: 10,
      color: footerNavFontColor,
      fontSize: 16,
      "&:hover": { color: footerNavFontColor },
    },
    secondaryText: {
      marginLeft: 10,
      color: footerNavFontColor,
    },
  };
  const navConfig = {
    styles: {
      root: { width: sideNavWidth, background: sideNavBackground },
    },
  };
  const navHeaderConfig = {
    styles: { root: { background: logoWrapperBackground } },
    tokens: { padding: "20px 30px" },
  };
  const navBodyConfig = {
    styles: { root: { paddingTop: 30, margin: 25 } },
  };
  const navFooterConfig = {
    styles: { root: { background: footerNavBackground } },
    tokens: { padding: "30px 40px" },
  };
  return (
    <Stack verticalFill {...navConfig}>
      <Stack.Item {...navHeaderConfig}>
        <Stack verticalAlign="center" horizontal>
          <ReactLogo />
          <Text variant="xLarge" styles={{ root: { color: logoColor } }}>
            Fluent Lab
          </Text>
        </Stack>
      </Stack.Item>
      <Stack.Item grow {...navBodyConfig}>
        <SearchBox placeholder="Search" />
        <Nav
          expandButtonAriaLabel="Expand or collapse"
          groups={SideNavGroups}
        />
      </Stack.Item>
      <Stack verticalAlign="end">
        <Stack.Item {...navFooterConfig}>
          <Persona
            {...examplePersona}
            size={PersonaSize.size40}
            imageAlt="Fernando Vargas"
            styles={personaStyles}
          />
        </Stack.Item>
      </Stack>
    </Stack>
  );
};
export default SideNavYeasinDribble;
