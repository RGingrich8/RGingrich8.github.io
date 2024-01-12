// Global Vars and Constants
const URL = "https://rgingrich8.github.io/";
const URL_ALT = "https://rgingrich8.github.io";

// Run
main();

// Control Flow
function main() {
    console.log("JS loaded successfully.");
}

// Mouse Movement and Behaviour
function mouseLogic(event) {
    // console.log("Real Mouse Position, X: " + event.pageX + " Y: " + event.pageY);
    let mouse = document.getElementById("mouse_basic");
    mouse.style.left = event.pageX + "px";
    mouse.style.top = event.pageY + "px";
}