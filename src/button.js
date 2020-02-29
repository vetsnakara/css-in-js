import { buttonSize } from "./mixins";

import {
  paddingXLg,
  paddingYLg,
  fontSizeLg,
  borderRadiusLg
} from "./variables";

// button
const button = `
  .cssinjs-button {
    color: #fff;
    background-color: green;
    ${buttonSize({
      paddingY: paddingYLg,
      paddingX: paddingXLg,
      fontSize: fontSizeLg,
      borderRadius: borderRadiusLg
    })}
  }
`;

const style = document.createElement("style");
style.textContent = button;
document.head.appendChild(style);
