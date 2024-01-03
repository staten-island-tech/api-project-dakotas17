import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

const DOMselectors = {
  form: document.querySelector("#form"),
  name: document.querySelector(".name"),
  h1s: document.querySelectorAll("h1"),
};
/* 
DOMselectors.form.addEventListener("submit", function(event){
  event.preventDefault();
  console.log(DOMselectors.name.value);
  DOMselectors.h1s.forEach((el)=> el.textContent = DOMselectors.name.value)
 */


function clearfields() {
  DOMselectors.name.value ="";
}


//shuffle out three cards, show user cards, flip and shuffle them, have user pick the "any number shown" with cards face down

function addcard(card) {
  document.querySelector(".container").insertAdjacentHTML("afterbegin",
    `<div class="card">
      
      <img src=${card.image} alt="">
      </div>`)
}



/* function greet(name){
  const greetPromise = new Promise(function(resolve, reject){
      resolve(`Hello ${name}`);
  });
  return greetPromise;
}
const Aaron = greet("aaron");
console.log(Aaron);
Aaron.then((result)=>{
  console.log(result);
});  */

async function init(){
  let deck = []
  async function getData() {
    let res = await fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=3");
      let data = await res.json();
      console.log(data)
  
    data.cards.forEach((card)=> deck.push(card))
  }
  await getData();
 deck.forEach((card)=> addcard(card))
}

init()