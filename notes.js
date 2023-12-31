/* //go get data
//show data

function greet(name){
    const greetPromise = new Promise(function(resolve, reject){
        resolve(`Hello ${name}`);
    });
    return greetPromise;
}
const Aaron = greet("Aaron");
console.log(Aaron);
//handle the promise
Aaron.then((result)=>{
    console.log(result);
}); 
REST API
*/
const URL =`https://api.quotable.io/random`;
console.log(URL)

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
getData(URL)



async function getData() {
    let res = await fetch("https:");
    let data = await res.json();
    console.log(data);
    data.results.forEach((movie) => console.log(movie));
}
getData();