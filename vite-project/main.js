import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

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


/* const URL ='https://api-adresse.data.gouv.fr/search/?q=8+bd+du+port';
async function getData(URL){
    try {
        const response = await fetch(URL);
        if(response.status != 200){
            throw new Error(response.statusText);
        }
        console.log(response);
        const data = await response.json();
        console.log(data);
        document.querySelector("h1").textContent = data.content;
        document.querySelector("h2").textContent = data.author;
    } catch (error) {
        document.querySelector("h1").textContent = `couldnt find ${pokemon}`;
    }
}
getData(URL) */

async function getData() {
  let res = await fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=14");
  let data = await res.json();
  console.log(data);
 data.results.forEach((data) => console.log(data));
}
getData();