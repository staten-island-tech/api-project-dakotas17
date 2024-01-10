import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

const DOMselectors = {
  form: document.querySelector("#form"),
  name: document.querySelector(".name"),
  h1s: document.querySelectorAll("h1"),
  button1: document.querySelector("#theButton"),
  button2: document.querySelector("#theButton2"),
};

//shuffle out three cards, show user cards, flip and shuffle them, have user pick the "any number shown" with cards face down

function addcard(card) {
  document.querySelector(".container").insertAdjacentHTML("afterbegin",
    `<div class="card">
      
      <img src=${card.image} alt="" class="myimage">
      </div>`)
}


function fwip(button){
button.addEventListener("click", function(event){
  event.preventDefault
  document.querySelector(".container").innerHTML = ""
  document.querySelector(".container").insertAdjacentHTML("afterbegin",`
  <div class="card">
  <img src="https://images.squarespace-cdn.com/content/v1/56ba85d9cf80a17a6f304b72/17021f49-d2e2-449f-a7c4-5d0ce8e08b7b/Card-Back.jpg" alt="erm" class="myimage">
 </div> <div class="card">
  <img src="https://images.squarespace-cdn.com/content/v1/56ba85d9cf80a17a6f304b72/17021f49-d2e2-449f-a7c4-5d0ce8e08b7b/Card-Back.jpg" alt="erm" class="myimage">
  </div> <div class="card">
  <img src="https://images.squarespace-cdn.com/content/v1/56ba85d9cf80a17a6f304b72/17021f49-d2e2-449f-a7c4-5d0ce8e08b7b/Card-Back.jpg" alt="erm" class="myimage"> </div>`
)})
}
console.log(fwip)

function fwipback(deck,button){
  button.addEventListener("click", function(event){
    event.preventDefault
    document.querySelector(".container").innerHTML = ""
    deck.forEach((card)=> addcard(card));
    })
  }

function shuffle(array){
  for (var i = array.length - 1; i > 0; i--){
    var j = Math.floor
  }
}


















/* function fwipback(button){
  button.addEventListener("click", function(event){
    event.preventDefault
    document.querySelector(".container").insertAdjacentHTML("afterbegin",`
    <div class="card">
    <img src="">
   </div> <div class="card">
    <img src="">
    </div> <div class="card">
    <img src=""> </div>`
  )})
  }
  console.log(fwipback) */


/* const image = document.getElementById('myimage');
const button = document.getElementById('mybutton');

// Add a click event listener to the button
button.addEventListener('click', function() {
    // Swap the image src attribute
    if (image.src.includes('myimage')) {
        image.src = 'https://images.squarespace-cdn.com/content/v1/56ba85d9cf80a17a6f304b72/17021f49-d2e2-449f-a7c4-5d0ce8e08b7b/Card-Back.jpg'; // Replace with the second image path
    } else {
        image.src = 'myimage'; // Replace with the first image path
    }
}); */





   /*  function pictureChange(){
      document.getElementById('myimage').src="https://images.squarespace-cdn.com/content/v1/56ba85d9cf80a17a6f304b72/17021f49-d2e2-449f-a7c4-5d0ce8e08b7b/Card-Back.jpg"
    }
 */


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
 deck.forEach((card)=> addcard(card));
 fwip(DOMselectors.button1);
 //shuffle deck
 //ask user to pick1
 //flip back
 fwipback(deck,DOMselectors.button2);
 //pictureChange()
}

init()

//on click change value of image to "https://images.squarespace-cdn.com/content/v1/56ba85d9cf80a17a6f304b72/17021f49-d2e2-449f-a7c4-5d0ce8e08b7b/Card-Back.jpg"
//prompt user to pick value of card
//on users pick return original card image and add win or lose message


/* function flip() {
//card.img.value = "https://images.squarespace-cdn.com/content/v1/56ba85d9cf80a17a6f304b72/17021f49-d2e2-449f-a7c4-5d0ce8e08b7b/Card-Back.jpg"
document.querySelectorAll(card.image).forEach((button) => {
  console.log(button)
button.addEventListener("click", function(event){
  console.log(event.target)
}
);
});
}
 */

/* var img = document.getElementById("myimage");
img.addEventListener("click", function(){
  if(button)
}) */

/* var img = document.getElementById("myImage");
button.addEventListener("click", function(){
  if(card.img != "https://images.squarespace-cdn.com/content/v1/56ba85d9cf80a17a6f304b72/17021f49-d2e2-449f-a7c4-5d0ce8e08b7b/Card-Back.jpg"){
    card.img = "https://images.squarespace-cdn.com/content/v1/56ba85d9cf80a17a6f304b72/17021f49-d2e2-449f-a7c4-5d0ce8e08b7b/Card-Back.jpg";}
  else{
    card.img = ${};}}); */

  /*   function flip(){
      document.querySelectorAll(".remove").forEach((button) => {
          console.log(button)
          button.addEventListener("click", function(event){
            console.log(event.target)

          //event.target.parentElement.remove()
          });
      });
  }

   */