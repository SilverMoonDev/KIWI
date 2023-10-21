let count = 0;
const countElement = document.getElementById("count");
const realNumElement = document.getElementById("realNum");
let kiwiNumbers = [];

window.onload = function () {
  kiwiNumbers = prompt(
    "Please enter the Kiwi numbers you want to include. For example, if you want to include the numbers 1, 2, and 7, you can input 127 with or without separating them.",
    ""
  );
  changeCount(0); // Update current value
};

function changeCount(amount) {
  count += amount;
  const digits = count.toString().split('');
  const containsNumber = digits.some(digit => kiwiNumbers.includes(digit));
  realNumElement.innerText = count;
  if (containsNumber) {
    countElement.innerText = "KIWI";
  } else {
    countElement.innerText = count;
  }
}

document.addEventListener("keydown", function (event) {
  if (event.code.startsWith("Key")) {
    changeCount(1);
    return;
  }
  let KeyID = event.keyCode;
  switch (KeyID) {
    case 8:
    case 46:
    case 40:
      changeCount(-1);
      break;
    case 13:
    case 32:
    case 38:
      changeCount(1);
      break;
    default:
      break;
  }
});

document.addEventListener("gesturestart", function (e) {
  e.preventDefault();
});
