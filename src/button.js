import { textColor, backgroundColor } from "./variables";
import { buttonSize, boxShadow } from "./mixins";

const css = {
  ".cssinjs-button": {
    color: textColor,
    background: backgroundColor,
    ...buttonSize(),
    ...boxShadow("0px 4px 5px #666", "2px 6px 10px #999")
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
