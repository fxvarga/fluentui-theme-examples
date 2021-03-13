import { IIconProps, INavLinkGroup } from "@fluentui/react";

const iconStyles: IIconProps = {
  styles: {
    root: {
      fontSize: 18,
      lineHeight: 22,
      height: "auto",
      paddingBottom: 8,
    },
  },
};
export const SideNavGroups = [
  {
    links: [
      {
        key: "profile",
        name: "Profile",
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
        key: "reports",
        name: "Reports",

        url: "",
        onClick: () => {},
        iconProps: {
          iconName: "ReportDocument",
          ...iconStyles,
        },
      },
      {
        key: "statistics",
        name: "Statistics",

        url: "",
        onClick: () => {},
        iconProps: {
          iconName: "bookmarkreport",
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
export const SideNavFooterGroups: INavLinkGroup[] = [
  {
    links: [
      {
        key: "tellafriend",
        name: "Tell a Friend",
        url: "",
        onClick: () => {
          console.log("share");
        },
        iconProps: {
          iconName: "Share",
          ...iconStyles,
        },
      },
      {
        key: "feedback",
        name: "Help and Feedback",
        url: "",
        onClick: () => {
          console.log("feedback");
        },
        iconProps: {
          iconName: "Feedback",
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
