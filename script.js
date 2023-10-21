// Initialize the counter variable
let counter = 0;

// Get the count element from the DOM
const countElement = document.getElementById("count");

// Get the real number element from the DOM
const realNumElement = document.getElementById("realNum");

// Initialize a set to store the kiwi numbers
let kiwiNumbers = new Set();

// When the window loads, prompt the user to enter the kiwi numbers
window.onload = function () {
  kiwiNumbers = new Set(prompt(
    `Please enter the Kiwi numbers you want to include. For example, 169, you can use any separator or no separator`,
    ""
  ).split(''));
  changeCount(0); // Update current value to display KIWI in case that 0 is a KIWI number
};

function changeCount(amount) {
  // Increment or decrement the counter based on the input amount
  counter += amount;

  // Check if any of the digits are in the kiwiNumbers set
  const containsNumber = [counter.toString()].some(digit => kiwiNumbers.has(digit));

  // Update the real number element with the current count
  realNumElement.innerText = counter;

  // If the counter contains any of the kiwi numbers, display "KIWI"
  // Otherwise, display the count
  if (containsNumber) {
    countElement.innerText = "KIWI";
  } else {
    countElement.innerText = counter;
  }
}

// Keyboard events handler
document.addEventListener("keydown", function (event) {
  // Get the key that was pressed
  let key = event.key;

  switch (key) {
    case "Backspace":
    case "Delete":
    case "ArrowDown":
      changeCount(-1);
      break;
    case "Enter":
    case " ":
    case "ArrowUp":
      changeCount(1);
      break;
    default:
      changeCount(1);
      break;
  }
});

// Prevent phone users from zooming in
document.addEventListener("gesturestart", function (e) {
  e.preventDefault();
});
