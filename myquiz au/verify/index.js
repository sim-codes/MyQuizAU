function addListener(input) {
    input.addEventListener("keyup", () => {
      const code = parseInt(input.value);
      if (code >= 0 && code <= 9) {
        const n = input.nextElementSibling;
        if (n) n.focus();
      } else {
        input.value = "";
      }
  
      const key = event.key; // const {key} = event; ES6+
      if (key === "Backspace" || key === "Delete") {
        const prev = input.previousElementSibling;
        if (prev) prev.focus();
      }
    });
  }
  const inputs = ["input1", "input2", "input3", "input4" , "input5", "input6"];

inputs.map((id) => {
  const input = document.getElementById(id);
  addListener(input);
});

let timeLeft = 60;

// Function to update the countdown timer
function updateCountdown() {
    const countdownElement = document.getElementById('timer');
    
    // Calculate minutes and seconds
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    // Display the time in the format MM:SS
    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    countdownElement.textContent = formattedTime;

    // Decrease the time by 1 second
    timeLeft--;
    // Check if the countdown has reached 0:00
    if (timeLeft < 0) {
        countdownElement.textContent = '0:00';
        // Optionally, you can add code here to handle what happens when the timer reaches 0:00, like disabling the OTP verification button.
        document.getElementById("link").style.display = "block";
        document.getElementById("nonlink").style.display = "none";
    } else {
        // Update the countdown every second
        setTimeout(updateCountdown, 1000);
    }
}

// Start the countdown timer when the page loads
updateCountdown();

document.getElementById("link").addEventListener("click", function(){
  updateCountdown();
})