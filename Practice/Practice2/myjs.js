function takeUserName() {
    let userName = window.prompt("Enter your name");
    document.write("<h1>Hello there! " + userName + "</h1><br>How are you?");
    takeUserInput();
}

function takeUserInput() {
    var userInput = window.prompt("Enter values separated by commas:");
    var inputArray = userInput.split(',');
    console.log("User input array:", inputArray);
    let text = "";
    for (x of inputArray) {
        text += (x + " ");
    }
    window.alert(text);
}