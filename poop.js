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
    let res = await fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=52");
    let data = await res.json();
    console.log(data.cards);
   data.cards.forEach((data) => console.log(data));
}
getData();

let dennis = {
    name:"Dennis", //string
    age:15 //integer
}
console.log(dennis.name)





/* let x = Array.from(dennis.name);
console.log(x);
for(let i = 0; i< dennis.name.length; i++){
    console.log(dennis.nam[i]);
}
let i = 0;
while( i < dennis.name.legnth){
    console.log(dennis.name[i]);
    i++;
}


function needle(name, search){
    if(name.includes(search)) { //trade .includes with === for exact search
        return true;        
    } else {
        return false;
    }
}
console.log(needle(dennis.name, "D"));

function sortString(name){
    let x = [...name].sort(); ///... takes everything in an array or string and converts it to this data type
console.log(x);
}
sortString(dennis.name);

let x = [1, 2, 3];
let y = [4, 5, 6];
let z = [...x, ...y];
console.log(z);

function removeL(name) {
    let x = Array.from(name);
    x.splice(-1);
    console.log(x);
}
function removeL(name) {
    let x = name;
    x.splice(-1);
    console.log(x);
}
removeL(dennis.name) */