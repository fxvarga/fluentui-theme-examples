import { Stack } from "@fluentui/react";
import React from "react";

const LeftSideNavFullHeight = (props: {
  sidenav: JSX.Element;
  content?: JSX.Element;
}): JSX.Element => {
  const { sidenav, content } = props;
  return (
    <Stack verticalFill horizontal>
      <Stack verticalFill>{sidenav}</Stack>
      <Stack verticalFill grow>
        <main> {content} </main>
      </Stack>
    </Stack>
  );
};
export default LeftSideNavFullHeight;
