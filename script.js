let count = 0;
const countElement = document.getElementById("count");
const realNumElement = document.getElementById("realNum");
let kiwiNumbers = [];

// Wait till the page loads to for ask the numbers
window.onload = function () {
  kiwiNumbers = prompt(
    "Please enter the Kiwi numbers you want to include. For example, if you want to include the numbers 1, 2, and 7, you can input 127 with or without separating them.",
    ""
  );
  changeCount(0); // Update current value
};

function changeCount(amount) {
  count += amount;
  const digits = count.toString().split("");
  const containsNumber = digits.some((digit) =>
    kiwiNumbers.includes(Number(digit))
  );
  realNumElement.innerText = count;
  if (containsNumber) {
    countElement.innerText = "KIWI";
  } else {
    countElement.innerText = count;
  }
}

document.addEventListener("keydown", KeyDown);

function KeyDown(event) {
  if (event.code.startsWith("Key")) {
    changeCount(1);
    return;
  }
  let KeyID = event.keyCode;
  switch (KeyID) {
    case 8:
      changeCount(-1);
      break;
    case 46:
      changeCount(-1);
      break;
    case 40:
      changeCount(-1);
      break;
    case 13:
      changeCount(1);
      break;
    case 32:
      changeCount(1);
      break;
    case 38:
      changeCount(1);
      break;
    default:
      break;
  }
}

document.addEventListener("gesturestart", function (e) {
  e.preventDefault();
});
