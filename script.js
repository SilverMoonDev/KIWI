let count = 0;
const countElement = document.getElementById("count");
const realNumElement = document.getElementById("realNum");
const kiwiNumbers = [1, 3, 5, 7, 9];

document.addEventListener("click", () => {
    count++;
    const digits = count.toString().split("");
    const containsNumber = digits.some(digit => kiwiNumbers.includes(Number(digit)));
	realNum.innerText = count;
    if (containsNumber) {
        countElement.innerText = "KIWI";
    }
	else{
		countElement.innerText = count;
	}
});
