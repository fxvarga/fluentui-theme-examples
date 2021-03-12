import { IIconProps, INavLinkGroup } from "@fluentui/react";

const iconStyles: IIconProps = {
  styles: {
    root: {
      fontSize: 18,
      marginRight: 20,
      fontWeight: 500,
      color: "#999",
    },
  },
};
export const SideNavGroups = [
  {
    links: [
      {
        key: "profile",
        name: "Profile",
        url: "/",
        iconProps: {
          iconName: "Contact",
          ...iconStyles,
        },
      },
      {
        key: "message",
        name: "Message",
        url: "/messages",

        iconProps: {
          iconName: "Comment",
          ...iconStyles,
        },
      },
      {
        key: "activity",
        name: "Activity",
        url: "/activity",

        iconProps: {
          iconName: "chart",
          ...iconStyles,
        },
      },
      {
        key: "lists",
        name: "Lists",
        url: "/Lists",

        iconProps: {
          iconName: "customlist",
          ...iconStyles,
        },
      },
      {
        key: "reports",
        name: "Reports",
        url: "/reports",

        iconProps: {
          iconName: "ReportDocument",
          ...iconStyles,
        },
      },
      {
        key: "statistics",
        name: "Statistics",
        url: "/Statistics",

        iconProps: {
          iconName: "bookmarkreport",
          ...iconStyles,
        },
      },
      {
        key: "signout",
        name: "Sign Out",
        url: "/signout",

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
