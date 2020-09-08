import React from "react";
import { Nav, Persona, PersonaSize, Separator } from "office-ui-fabric-react";
import {
  SideNavGroups,
  examplePersona,
  SideNavFooterGroups,
} from "./SideNav.config";

const SideNav = (): JSX.Element => {
  return (
    <div className="d-flex flex-column h-100">
      <Persona
        className="mt-5 mb-4"
        {...examplePersona}
        size={PersonaSize.size72}
        hidePersonaDetails={false}
        imageAlt="Annie Lindqvist, status is blocked"
      />
      <Separator />
      <div className="my-4 mx-2 flex-grow-1">
        <Nav
          styles={{ root: { width: 250 } }}
          selectedKey=""
          expandButtonAriaLabel="Expand or collapse"
          groups={SideNavGroups}
        />
      </div>
      <Separator />
      <div className="my-4 mx-2">
        <Nav
          styles={{ root: { width: 250 }, groupContent: { marginBottom: 0 } }}
          selectedKey=""
          expandButtonAriaLabel="Expand or collapse"
          groups={SideNavFooterGroups}
        />
      </div>
    </div>
  );
};
export default SideNav;
