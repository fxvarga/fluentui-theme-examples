import { Separator, Nav, Stack } from "@fluentui/react";
import React from "react";
import { SideNavGroups, SideNavFooterGroups } from "./SideNav.config";
const SideNavMaterialXDribble = (): JSX.Element => {
  return (
    <Stack verticalFill tokens={{ padding: "60px 0 0 0" }}>
      <Stack.Item grow>
        <Nav
          expandButtonAriaLabel="Expand or collapse"
          groups={SideNavGroups}
        />
      </Stack.Item>
      <Separator />
      <Stack verticalAlign="end">
        <Stack.Item>
          <Nav
            expandButtonAriaLabel="Expand or collapse"
            groups={SideNavFooterGroups}
          />
        </Stack.Item>
      </Stack>
    </Stack>
  );
};
export default SideNavMaterialXDribble;
