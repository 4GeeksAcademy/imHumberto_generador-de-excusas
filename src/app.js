import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Humberto from the console!")
  
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird', 'My girlfriend', 'My mom', 'Superman', 'My cat']
  let action = ['ate', 'peed', 'crushed', 'broke', 'spilled', 'lost', 'burned']
  let what = ['my homework', 'my phone', 'the car', 'my house', 'the bedroom']
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying']

  function getRandomElement (array){
    let resultado = Math.floor(Math.random() * array.length)
    return resultado
  }

  let mensajeFinal = who[getRandomElement(who)] + " " + action[getRandomElement(action)] + " " + what[getRandomElement(what)] + " " + when[getRandomElement(when)]

  console.log(mensajeFinal)

  const mensaje = document.getElementById("excuse")

  mensaje.innerHTML = mensajeFinal


}





