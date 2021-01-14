const colors = {
  darkGray: '#161616',
  black: '#000',
  blue: '#21A8F4',
  white: '#FFFFFF',
  opacityBlue: 'rgba(33, 168, 244, .2)',
  orangeSoft: '#ff504f',
  gray: '#808080',
  googleColor: '#4285f4',
  ghostWhite: '#f8f8ff',
  lightGreen: '#00ff59',
  lightBlue: '#EEF4FC',
};

//eslint-disable-next-line
export default {
  blue: colors.blue,
  white: colors.white,
  darkGray: colors.darkGray,
  black: colors.black,
  orangeSoft: colors.orangeSoft,
  gray: colors.gray,
  lightGreen: colors.lightGreen,
  lightBlue: colors.lightBlue,
  ghostWhite: colors.ghostWhite,

  input: {
    inputColor: colors.blue,
    inputPlaceholder: colors.gray
  },
  customButton: {
    customButtonColor: colors.darkGray,
    customButtonBorderColor: colors.darkGray
  },
  googleButtonColor: colors.googleColor,
  footer: {
    footerBackground: colors.black,
    footerColor: colors.white,
    footerColorOnHover: colors.blue
  },
  menu: {
    background: colors.white,
    color: colors.darkGray,
    selected: {
      background: colors.lightBlue,
      color: colors.blue,
    },
    infoNew:{
      background:colors.lightBlue,
      color: colors.orangeSoft
    }
  },
  header: {
    background: colors.white
  },

  projectCard: {
    backgroundNew: colors.opacityBlue,
    background: colors.ghostWhite
  },
  suspenseComponent: {
    textColor: colors.blue
  }
};
