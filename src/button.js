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
    ${buttonSize(paddingYLg, paddingXLg, fontSizeLg, borderRadiusLg)}
  }
`;

const style = document.createElement("style");
style.textContent = button;
document.head.appendChild(style);
