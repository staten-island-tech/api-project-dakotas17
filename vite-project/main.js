import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

const DOMselectors = {
  form: document.querySelector("#form"),
  name: document.querySelector(".name"),
  h1s: document.querySelectorAll("h1"),
};

DOMselectors.form.addEventListener("submit", function(event){
  event.preventDefault();
  console.log(DOMselectors.name.value);
  DOMselectors.h1s.forEach((el)=> el.textContent = DOMselectors.name.value)



function holder(){
  DOMselectors.containers.insertAdjacentHTML(
  `<div class="section">
    <h1> ${DOMselectors.name.value}</h1>
    </div>`)}
holder()
clearfields();
});


function clearfields() {
  DOMselectors.name.value ="";
}

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))



let deck = []
async function getData() {
  let res = await fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=3");
    let data = await res.json();

  data.cards.forEach((card)=> deck.push(card))
}
getData();
console.log(deck)

//shuffle out three cards, show user cards, flip and shuffle them, have user pick the "any number shown" with cards face down

function greet(name){
  const greetPromise = new Promise(function(resolve, reject){
      resolve(`Hello ${name}`);
  });
  return greetPromise;
}
const Aaron = greet("aaron");
console.log(Aaron);
Aaron.then((result)=>{
  console.log(result);
}); 
