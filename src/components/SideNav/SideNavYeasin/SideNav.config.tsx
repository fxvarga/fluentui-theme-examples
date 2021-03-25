import { IIconProps } from "@fluentui/react";

const iconStyles: IIconProps = {
  styles: {
    root: { fontSize: 20 },
  },
};
export const SideNavGroups = [
  {
    links: [
      {
        key: "profile",
        name: "Profile",
        active: true,
        url: "",
        onClick: () => {},
        iconProps: {
          iconName: "Contact",
          ...iconStyles,
        },
      },
      {
        key: "message",
        name: "Message",
        url: "",
        onClick: () => {},

        iconProps: {
          iconName: "Comment",
          ...iconStyles,
        },
      },
      {
        key: "activity",
        name: "Activity",

        url: "",
        onClick: () => {},
        iconProps: {
          iconName: "chart",
          ...iconStyles,
        },
      },
      {
        key: "lists",
        name: "Lists",
        url: "",
        onClick: () => {},

        iconProps: {
          iconName: "customlist",
          ...iconStyles,
        },
      },

      {
        key: "signout",
        name: "Sign Out",

        url: "",
        onClick: () => {},
        iconProps: {
          iconName: "signout",
          ...iconStyles,
        },
      },
    ],
  },
];
export const examplePersona = {
  imageUrl: "https://randomuser.me/api/portraits/men/41.jpg",
  imageInitials: "FV",
  text: "Fernando Vargas",
  secondaryText: "Software Engineer",
  tertiaryText: "Microsoft Charlotte",
};
