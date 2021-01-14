import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  @font-face {
    font-family: 'Comic Sans MS';
    src: url('./fonts/comic-sans-ms/comic.eot');
    src: local('☺'), url('./fonts/comic-sans-ms/comic.woff') format('woff'), url('./fonts/comic-sans-ms/comic.ttf') format('truetype'), url('./fonts/comic-sans-ms/comic.svg') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  //@font-face {
  //  font-family: 'Comic Sans MS';
  //  src: url('./fonts/comic-sans-ms/comicbd.eot');
  //  src: local('☺'), url('./fonts/comic-sans-ms/comicbd.woff') format('woff'), url('./fonts/comic-sans-ms/comicbd.ttf') format('truetype'), url('./fonts/comic-sans-ms/comicbd.svg') format('svg');
  //  font-weight: 500;
  //  font-style: normal;
  //}


  * {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    font-family: 'Comic Sans MS','Open Sans', sans-serif;
  }

  body {
    font-size: 1.6rem;
    position: relative;
  }

  body, html {
    height: 100%;
    max-height: 100%;
  }

  * {
    box-sizing: border-box;
  }

  *::selection {
    color: ${ ({ theme }) => theme.blue };
    background-color: ${ ({ theme }) => theme.gray };
  }

  hr {
    border: none; /* Убираем границу */
    background-color: ${ ({ theme }) => theme.gray }; /* Цвет линии */
    color: ${ ({ theme }) => theme.gray }; /* Цвет линии для IE6-7 */
    height: 2px; /* Толщина линии */
  }
  
  #root {
    height: 100%;
  }
  
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  
  ::-webkit-scrollbar-track-piece {
    background-color: #ffffff;
  }
  
  ::-webkit-scrollbar-thumb {
    height: 50px;
    background-color: ${ ({ theme }) => theme.gray };
    border-radius: 2px;
  }
  
`
