import "./style.css";

window.onload = () => {
  document.querySelector("#excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console! ");
};

let generateExcuse = () => {
  return "My dog eat my homework";
};
