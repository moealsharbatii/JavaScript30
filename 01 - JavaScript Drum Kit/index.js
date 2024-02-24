function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`); // Selecting any tag with the "key" class
  if (!audio) {
    return; // Stop the function from running altogether
  }
  audio.currentTime = 0; // Rewind to start
  audio.play();
  key.classList.add("playing"); // ADDING a CSS class called playing
}

function removeTransition(event) {
  if (event.propertyName !== "transform") {
    return; // Skip it if it's not a transform (can use any of the properties that gets "transformed")
  }
  // "this" is equal to the key because of the use of the addEventListern being called from "key" below
  console.log(this);
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");

// Doing forEach because it is a Node List and not an array
// keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

// Different way for 'forEach'
for (const key of keys) {
  key.addEventListener("transitionend", removeTransition);
}

window.addEventListener("keyup", playSound);
