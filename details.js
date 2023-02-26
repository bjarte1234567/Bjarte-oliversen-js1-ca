let joke = "";
const resultContainer = document.querySelector(".wrap");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

function funnyJokes() {
  fetch("https://dad-jokes.p.rapidapi.com/joke/" + id, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
      "x-rapidapi-key": "de3538e133msh8b9b614980be082p137785jsn32a89e096664",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      joke = response.body;

      setTimeout(function () {
        resultContainer.innerHTML = "";
        document.title = "funny jokes made by: " + joke.author.name;
        resultContainer.innerHTML += `
          <div class="informationContainer">
            <p class="">Author: ${joke.author.name}</p>
            <p> ${joke.setup}</p>
            <p class=""> ${joke.punchline}</p>
          </div>`;
      }, 500);
    })
    .catch((error) => {
      console.error(error);
      resultContainer.innerHTML = displayError("an error has occured");
    });
}

funnyJokes();
