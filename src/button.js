import { textColor, backgroundColor } from "./variables";

const css = {
  ".cssinjs-button": {
    color: textColor,
    background: backgroundColor
  }
};

const cssToString = css => {
  let result = "";

  for (const selector in css) {
    result += selector + "{";
    for (const prop in css[selector]) {
      result += prop + ": " + css[selector][prop] + ";";
    }
    result += "}";
  }

  return result;
};

const style = document.createElement("style");
style.textContent = cssToString(css);
document.head.appendChild(style);
