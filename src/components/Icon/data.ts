

const data = {
  view: {
    src: "/icons/view.svg",
    alt: "icon-view",
  },
  viewOff: {
    src: "/icons/view-off.svg",
    alt: "icon-view-off",
  },
  check: {
    src: "/icons/check.svg",
    alt: "icon-check",
  },
  checkRoundGreen: {
    src: "/icons/check-round-green.svg",
    alt: "icon-check-round-green",
  },
  checkRoundGray: {
    src: "/icons/check-round-gray.svg",
    alt: "icon-check-round-gray",
  },
  arrowLeft: {
    src: "/icons/arrow-left.svg",
    alt: "icon-arrow-left",
  },
  warning: {
    src: "/icons/warning-circle.svg",
    alt: "icon-warning",
  },
  facebook: {
    src: "/icons/facebook.svg",
    alt: "icon-facebook",
  },
  google: {
    src: "/icons/google.svg",
    alt: "icon-google",
  },
} as const;

export default data;
export type IconType = keyof typeof data;