import { INavLinkGroup } from "@fluentui/react";

export const SideNavGroups = [
  {
    links: [
      {
        key: "profile",
        name: "Profile",
        url: "/",
        iconProps: {
          iconName: "Contact",
        },
      },
      {
        key: "message",
        name: "Message",
        url: "/messages",

        iconProps: {
          iconName: "Comment",
        },
      },
      {
        key: "activity",
        name: "Activity",
        url: "/activity",

        iconProps: {
          iconName: "chart",
        },
      },
      {
        key: "lists",
        name: "Lists",
        url: "/Lists",

        iconProps: {
          iconName: "customlist",
        },
      },
      {
        key: "reports",
        name: "Reports",
        url: "/reports",

        iconProps: {
          iconName: "ReportDocument",
        },
      },
      {
        key: "statistics",
        name: "Statistics",
        url: "/Statistics",

        iconProps: {
          iconName: "bookmarkreport",
        },
      },
      {
        key: "signout",
        name: "Sign Out",
        url: "/signout",

        iconProps: {
          iconName: "signout",
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
