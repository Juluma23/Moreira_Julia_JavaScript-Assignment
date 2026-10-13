console.log("Hello from JavaScript"); alert ("Welcome");
    
const message = document.getElementById("message");
const button = document.getElementById("changeButton");

button.addEventListener("click", function () {
    console.log("Button clicked!");

    if (message.innerText.trim() === "") {
        message.innerText = "Button was clicked!";
    } else {
        message.innerText = "";
    }
});

console.log("Message element:", message);
console.log("Button element:", button);

