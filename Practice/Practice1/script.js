function generateRandomNumber() {
    return Math.floor(Math.random() * 100);
}

function displayRandomNumber() {
    const randomNumberElement = document.getElementById('randomNumber');
    const randomNum = generateRandomNumber();
    randomNumberElement.textContent = randomNum;
}

displayRandomNumber();