import "./style.css";

window.onload = () => {
  document.querySelector("#excuse").innerHTML = generateExcuse();
};

let generateExcuse = () => {
  let subject = ["My brother", "My mother", "My dog", "My car"];
  let action = ["fell", "got lost", "fell asleep", "it broke down"];
  let where = [
    "on the stairs",
    "on the rooftop",
    "in the Avenue",
    "in the north"
  ];

  let excuse = "";

  const subjectAleatorio = Math.floor(Math.random() * subject.length);
  const actionAleatorio = Math.floor(Math.random() * action.length);
  const whereAleatorio = Math.floor(Math.random() * where.length);

  excuse =
    subject[subjectAleatorio] +
    " " +
    action[actionAleatorio] +
    " " +
    where[whereAleatorio];
  console.log(excuse);

  return excuse;
};
