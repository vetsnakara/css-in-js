import sizes from "./sizes";

// button
const button = `
  .cssinjs-button {
    color: #fff;
    background-color: green
  }
`;

const style = document.createElement("style");
style.textContent = button + sizes;
document.head.appendChild(style);
