# Media Player with Playlist

This project is a simple media player with a customizable playlist. It allows users to play a pre-defined melody (Happy Birthday) or add their own songs to the playlist.

## Features

* Plays a pre-defined "Happy Birthday" melody.
* Allows adding custom songs to the playlist.
* Basic media controls: Play and Pause.
* Visually appealing UI using Bootstrap and custom CSS.

## Technologies Used

* HTML5, CSS3, JavaScript
* Bootstrap for styling and layout
* Web Audio API for sound generation

## How Melodies Are Created

The melodies are generated using the Web Audio API. Here's a simplified breakdown:

1. **Frequency Arrays:** Each melody (like "Happy Birthday") is represented by an array of frequencies. Each frequency corresponds to a specific musical note.
2. **Oscillator:** The Web Audio API creates an oscillator, which is like a virtual electronic instrument.
3. **Playing Notes:** The code iterates through the frequency array, setting the oscillator's frequency to each note.
4. **Timing:** Each note is played for a certain duration and with a delay between notes to create the melody's rhythm.

## How to Use

1. Clone this repository.
2. Open `index.html` in your web browser.
3. Click the play button to start the "Happy Birthday" melody.
4. Add your own songs by modifying the `playlist` list in `index.html`.
5. Click on a song in the playlist to play it.

## Demo
[Image of Media Player] (screenshots/media-player.png)

## Customization

* **Add More Songs:** Add `<li>` elements within the `<ul id="playlist">` tag in `index.html`.
* **Create Custom Melodies:** Modify the `happyBirthdayNotes` array in `scripts.js` with your own frequencies. You can use online resources to find the frequencies of musical notes.
* **Change Note Duration and Delay:** Adjust the timing in the `playHappyBirthday` or `playCustomMelody` functions to change how long each note plays and the spacing between notes.
* **Change Sound Type:** Experiment with the oscillator's `type` property (e.g., 'sine', 'square', 'sawtooth', 'triangle') to alter the sound's timbre.

## License

This project is licensed under the [MIT License](LICENSE).
