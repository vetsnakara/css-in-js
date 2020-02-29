import css from "./css";

import { textColor } from "./variables";
import { buttonSize, boxShadow } from "./mixins";

const styles = {
  myButton: {
    color: textColor,
    background: "green",
    ...buttonSize(),
    ...boxShadow("0px 4px 5px #666", "2px 6px 10px #999")
  }
};

const classes = css(styles);

const button = document.createElement("button");

button.innerText = "Green Button";
button.classList.add(classes["myButton"]);

export default button;
