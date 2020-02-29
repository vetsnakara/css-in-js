import { buttonSize, boxShadow } from "./mixins";

// button
const button = `
  .cssinjs-button {
    color: #fff;
    background-color: green;
    ${buttonSize({ paddingX: "50px" })}
    ${boxShadow("0px 4px 5px #666", "2px 6px 10px #999")}
  }
`;

const style = document.createElement("style");
style.textContent = button;
document.head.appendChild(style);
