function changeText() {
    let potentialText = ["text1", "text2", "text3", "text4", "text5"]
    let randomNumber = getRandomNumber(0, potentialText.length - 1)
    let textToChangeTo = potentialText[randomNumber];
    document.getElementById('header').innerHTML = textToChangeTo
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
