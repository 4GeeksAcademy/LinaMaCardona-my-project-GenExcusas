import "./style.css";

window.onload = () => {
  let randomNumber = Math.floor(Math.random() * 10);
  document.querySelector("#excuse").innerHTML = randomNumber;
  console.log("Hello Rigo from the console! " + randomNumber);
};

let generateExcuse = () => {
  return "My dog eat my homework";
};
