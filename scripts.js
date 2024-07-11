var audio = document.getElementById("myAudio");
var audioContext = new (window.AudioContext || window.webkitAudioContext)();
var oscillator;

// Frequencies for the "Happy Birthday" song
var happyBirthdayNotes = [
  261.63, 261.63, 293.66, 261.63, 349.23, 329.63,
  261.63, 261.63, 293.66, 261.63, 392.00, 349.23,
  261.63, 261.63, 523.25, 440.00, 349.23, 329.63,
  293.66, 293.66, 261.63, 392.00, 349.23, 329.63,
  261.63, 261.63, 587.33, 523.25, 392.00, 349.23,
  329.63, 293.66, 523.25, 523.25, 440.00, 349.23,
  349.23, 329.63, 293.66, 392.00, 392.00, 349.23,
  349.23, 329.63, 293.66, 523.25, 523.25, 440.00
];

function generateTone(frequency) {
  oscillator = audioContext.createOscillator();
  oscillator.type = 'sine';
  oscillator.frequency.value = frequency;
  oscillator.connect(audioContext.destination);
}
function playHappyBirthday() {
  happyBirthdayNotes.forEach((frequency, index) => {
    setTimeout(() => {
      generateTone(frequency);
      oscillator.start();
      setTimeout(() => {
        oscillator.stop();
      }, 250); // Play each note for 250 milliseconds
    }, index * 500); // Delay each note by 500 milliseconds
  });
}


function pauseSound() {
  if (oscillator) {
    oscillator.stop();
  }
}

// Playlist functionality
var playlist = document.getElementById("playlist");
var songs = playlist.getElementsByTagName("li");

for (var i = 0; i < songs.length; i++) {
  songs[i].addEventListener("click", function() {
    var songName = this.textContent;
    console.log("Playing: " + songName);
    if (songName === "Happy Birthday") {
      // playHappyBirthday();
      playCustomMelody();
    } else {
      // Add your play song functionality for other songs here
    }
  });
}

// Frequencies for the custom melody
var customMelodyNotes = [
  261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25
];

function generateCustomMelody(frequency) {
  oscillator = audioContext.createOscillator();
  oscillator.type = 'sine';
  oscillator.frequency.value = frequency;
  oscillator.connect(audioContext.destination);
}

function playCustomMelody() {
  customMelodyNotes.forEach((frequency, index) => {
    setTimeout(() => {
      generateCustomMelody(frequency);
      oscillator.start();
      setTimeout(() => {
        oscillator.stop();
      }, 250); // Play each note for 250 milliseconds
    }, index * 500); // Delay each note by 500 milliseconds
  });
}