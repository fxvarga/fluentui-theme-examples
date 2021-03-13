import { Nav, Stack, useTheme } from "@fluentui/react";
import React from "react";
import { SideNavGroups } from "./SideNav.config";
const SideNavIvoDribble = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Stack
      verticalFill
      styles={{
        root: { background: theme.palette.themeDarkAlt, width: "94" },
      }}
    >
      <Nav expandButtonAriaLabel="Expand or collapse" groups={SideNavGroups} />
    </Stack>
  );
};
export default SideNavIvoDribble;
