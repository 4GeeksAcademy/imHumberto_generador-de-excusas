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

  function randomRandom (array){
    let resultado = Math.floor(Math.random() * array.length)
    return resultado
  }
  
  //let whoRandom = Math.floor (Math.random() * who.length)
  //let actionRandom = Math.floor(Math.random() * action.length)
  //let whatRandom = Math.floor(Math.random() * what.length)
  //let whenRandom = Math.floor(Math.random() * when.length)

  let mensajeFinal = who[randomRandom(who)] + " " + action[randomRandom(action)] + " " + what[randomRandom(what)] + " " + when[randomRandom(when)]

  console.log(mensajeFinal)

  const mensaje = document.getElementById("excuse")

  mensaje.innerHTML = mensajeFinal


}





