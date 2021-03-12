import { Persona, PersonaSize, Separator, Nav } from "@fluentui/react";
import React from "react";
import {
  SideNavGroups,
  examplePersona,
  SideNavFooterGroups,
} from "./SideNav.config";

const SideNavWithPersona = (): JSX.Element => {
  return (
    <div className="d-flex flex-column h-100">
      <div className="mt-5 mb-4">
        <Persona
          {...examplePersona}
          size={PersonaSize.size72}
          imageAlt="Fernando Vargas"
        />
      </div>
      <Separator />
      <div className="my-4 mx-2 flex-grow-1">
        <Nav
          expandButtonAriaLabel="Expand or collapse"
          groups={SideNavGroups}
        />
      </div>
      <Separator />
      <div className="my-4 mx-2">
        <Nav
          expandButtonAriaLabel="Expand or collapse"
          groups={SideNavFooterGroups}
        />
      </div>
    </div>
  );
};
export default SideNavWithPersona;
