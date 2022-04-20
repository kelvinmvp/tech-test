import { createGlobalStyle } from "styled-components/macro";
import "@fontsource/roboto";
import "react-datepicker/dist/react-datepicker.css";

export const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
 
  body{ margin:0; font-family:Roboto; font-display:block;position:relative }
`;
