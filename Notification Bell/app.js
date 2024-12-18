

const button = document.getElementById("_button");
const notify = document.getElementById("_notification");
const bellSound = document.getElementById("bellSound");

button.addEventListener("click", ()=>{

    const counter = Number(notify.getAttribute("data-count")) || 0;

    notify.setAttribute("data-count", counter + 1);
    notify.classList.add("count")
    notify.classList.add("notify")
    /* bellSound.currentTime = 0;
    bellSound.onplay(); */
    if (bellSound) {
        // Reset the audio to the beginning
        bellSound.currentTime = 0;
        
        // Play the bell sound
        bellSound.play().catch((error) => {
          console.error("Error playing sound:", error);
        });
      } else {
        console.error("Audio element with id 'bellSound' not found.");
      }
    

})

notify.addEventListener("animationend", ()=>(
    notify.classList.remove("notify")
));