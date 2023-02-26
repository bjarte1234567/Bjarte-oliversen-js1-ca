let joke = "";
const resultContainer = document.querySelector(".container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("_id");

function funnyJokes() {
  fetch("https://dad-jokes.p.rapidapi.com/joke/type/general", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
      "x-rapidapi-key": "de3538e133msh8b9b614980be082p137785jsn32a89e096664",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      joke = response.body;
      setTimeout(function () {
        resultContainer.innerHTML = "";
        for (let i = 0; i < joke.length; i++) {
          if (i === 16) {
            break;
          }
          resultContainer.innerHTML += `
            <a href="/details.html?id=${joke[i]._id}" class="informationContainer">
                                            <p class="">Made by: ${joke[i].author.name}</p>
                                            <p> ${joke[i].setup}</p>
                                            <p class="blue"> ${joke[i].punchline}</p>
                                            </a> `;
        }
        console.log(joke);
      }, 2000);
    })
    .catch((error) => {
      console.error(error);
      resultContainer.innerHTML = displayError("Something went wrong");
    });
}
funnyJokes();
console.log(joke);
