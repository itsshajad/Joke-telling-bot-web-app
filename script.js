// API // https://v2.jokeapi.dev/joke/Any

let jokeTextPlaceholder = document.getElementById("jokeText");
const jokeBtn = document.getElementsByTagName("button");

jokeBtn.addEventListner("click", function () {
  fetch("https://v2.jokeapi.dev/joke/Any")
    .then((res) => res.json())
    .then((data) => responsFunction(data));
});

const responsFunction = (data) => {
  jokeTextPlaceholder.innerHTML = data.delivery;
  console.log(data);
};
