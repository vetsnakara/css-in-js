import { buttonSize } from "./mixins";

// button
const button = `
  .cssinjs-button {
    color: #fff;
    background-color: green;
    ${buttonSize({ paddingX: "50px" })}
  }
`;

const style = document.createElement("style");
style.textContent = button;
document.head.appendChild(style);
