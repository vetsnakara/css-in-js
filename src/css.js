let counter = 0;

const css = styles => {
  const classes = {};
  let cssString = "";

  for (const name in styles) {
    classes[name] = `${name}-${counter++}`;
    cssString += `.${classes[name]} {`;

    if (typeof styles[name] === "string") {
      cssString += styles[name];
    } else {
      for (const prop in styles[name]) {
        cssString += prop + ": " + styles[name][prop] + ";";
      }
    }

    cssString += "}";
  }

  const style = document.createElement("style");
  style.textContent = cssString;
  document.head.appendChild(style);

  return classes;
};

export default css;
