// API // https://v2.jokeapi.dev/joke/Any

let jokeTextPlaceholder = document.getElementById('jokeText');
const jokeBtn = document.getElementsByTagName('button');
const voice = document.getElementById('voice');
const speech = new SpeechSynthesisUtterance('No warning should arise');

window.onload = function () {
  jokeBtn[0].addEventListener('click', JokeApiFunction);
};

const JokeApiFunction = () => {
  fetch('https://v2.jokeapi.dev/joke/Programming,Pun?type=single')
    .then((res) => res.json())
    .then((data) => responsFunction(data));
};

const speechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition;

const recognition = new speechRecognition();

speechRecognition.lang = 'hi-IN';

recognition.continuous = true;

recognition.start();

recognition.onresult = function (event) {
  const transcript = event.results[event.results.length - 1][0].transcript;
  console.log(transcript);
  if (transcript.includes('tell me joke') || transcript.includes('joke')) {
    console.log(true);
    jokeBtn[0].click();
  }
  // const voice = synth.getVoices(transcript);

  // console.log(voice);
};

document.onkeypress = logkey;
function logkey(e) {
  console.log(e);
  if (e.code == 'KeyJ' || e.code == 'Keyj') {
    jokeBtn[0].click();
  }
}

const responsFunction = (data) => {
  jokeTextPlaceholder.innerHTML = data.joke;
  speakJoke(data.joke);
};

function updateVoice() {
  const voices = speechSynthesis.getVoices();
  voices.map((v, i) => {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = v.name;
    voice.appendChild(option);
  });

  voice.addEventListener('change', (e) => {
    speechSynthesis.cancel();
    const selectedVoice = e.target.value;
    speech.voice = voices[selectedVoice];
  });
}

const speakJoke = (message) => {
  speech.text = message;
  speech.volume = 1;
  speech.pitch = 1;
  speech.rate = 1;
  speechSynthesis.speak(speech);
};

speechSynthesis.addEventListener('voiceschanged', updateVoice);

// setTimeout(() => {
//   alert('press j in you keyboard to listen joke');
// }, 3000);
