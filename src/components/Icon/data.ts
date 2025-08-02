

const data = {
  view: {
    src: "/icons/view.svg",
    alt: "icon-view",
  },
  viewOff: {
    src: "/icons/view-off.svg",
    alt: "icon-view-off",
  },
} as const;

export default data;
export type IconType = keyof typeof data;