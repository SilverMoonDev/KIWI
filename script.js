let count = 0;
const countElement = document.getElementById("count");
const realNumElement = document.getElementById("realNum");
const kiwiNumbers = prompt("Enter the Kiwi Numbers", "Kiwi Numbers");

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
    case 13:
      changeCount(1);
      break;
    case 32:
      changeCount(1);
      break;
    default:
      break;
  }
}

document.addEventListener('gesturestart', function(e) {
  e.preventDefault();
});
