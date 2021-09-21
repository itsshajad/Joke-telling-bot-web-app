// API // https://v2.jokeapi.dev/joke/Any

let jokeTextPlaceholder = document.getElementById('jokeText');
const jokeBtn = document.getElementsByTagName('button');
const voice = document.getElementById('voice');

jokeBtn[0].addEventListener('click', function () {
  fetch('https://v2.jokeapi.dev/joke/Programming,Pun?type=single')
    .then((res) => res.json())
    .then((data) => responsFunction(data));
});

// const speechRecognition =
//   window.speechRecognition || window.webkitSpeechRecognition;

// const recognition = new speechRecognition();

// recognition.start();

// console.log(recognition);

// recognition.onstart = function () {
//   console.log('recognition start');
// };

// recognition.onresult = function (event) {
//   const transcript = event.results[0][0].transcript;
//   const voice = synth.getVoices(transcript);

//   console.log(voice);
// };

const responsFunction = (data) => {
  jokeTextPlaceholder.innerHTML = data.joke;
  // console.log(data);
  speakJoke(data.joke);
};
let voices = speechSynthesis.getVoices();

voices.map((v, i) => {
  const option = document.createElement('option');
  option.value = i;
  option.textContent = v.name;
  voice.appendChild(option);
});

console.log(voices);

const speakJoke = (message) => {
  const speech = new SpeechSynthesisUtterance();
  speech.text = message;
  speech.volume = 1;
  speech.pitch = 1;
  speech.rate = 1;
  window.speechSynthesis.speak(speech);
};
