import css from "./css";

const styles = {
  myButton: `
    color: #fff;
    background: red;
    padding: 7px 10px;
    font-size: 1rem;
    border-radius: 5px;
    box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
  `
};

const classes = css(styles);

const button = document.createElement("button");

button.innerText = "Red Button";
button.classList.add(classes["myButton"]);

export default button;
