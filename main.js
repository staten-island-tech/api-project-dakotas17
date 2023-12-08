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
    let res = await fetch("https://api-adresse.data.gouv.fr/search/?q=paris");
    let data = await res.json();
    console.log(data);
   // data.results.forEach((movie) => console.log(movie));
}
getData();