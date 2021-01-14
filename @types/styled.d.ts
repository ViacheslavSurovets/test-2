import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    // [props:string]: any;
    blue: string;
    gray: string;
    darkGray: string;
    white: string;
    orangeSoft: string;
    black: string;
    googleButtonColor: string;
    ghostWhite: string;
    lightGreen: string;
    customButton:{
      customButtonBorderColor: string;
      customButtonColor:string;
    };
    header:{
      background:string;
    };
    projectCard: {
      background: string
    }
    footer: {
      footerColorOnHover:string;
    };
    menu: {
      color: string;
      background: string;
      selected: {
        color: string;
        background: string;
      };
      infoNew: {
        color: string;
        background: string;
      }
    };
    suspenseComponent: {
      textColor: string
    };
    input: {
      inputColor: string;
      inputPlaceholder: string;
    };
  }
}
