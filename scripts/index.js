// Global Vars and Constants
const URL = "https://rgingrich8.github.io/";
const URL_ALT = "https://rgingrich8.github.io";
// let globalX = 0;
// let globalY = 0;

// Run
main();

// Control Flow
function main() {
    console.log("JS loaded successfully.");
}

// Copy contact information to the clipboard, depending on which icon was pressed
function copyToClip(icon) {
    if (icon == "phone") {
        navigator.clipboard.writeText("+1(403)805-0329");
        document.getElementById("copied_message_1").style.animation = "appear 1s linear forwards";
    } else if (icon == "email") {
        navigator.clipboard.writeText("richardgingrich8@gmail.com");
        document.getElementById("copied_message_2").style.animation = "appear 1s";
    }
}





// Custom cursor code below, currently not used

// Mouse Movement and Behaviour
function mouseLogic(event) {
    // console.log("Real Mouse Position, X: " + event.pageX + " Y: " + event.pageY);
    let mouse = document.getElementById("mouse_basic");
    mouse.style.left = event.pageX + "px";
    mouse.style.top = event.pageY + "px";
    // globalX = event.pageX;
    // globalY = event.pageY;
}

// Mouse scroll logic, unfinished
function mouseScroll() {
    // console.log(document.documentElement.scrollTop);
    let mouse = document.getElementById("mouse_basic");
    let calc = document.documentElement.scrollTop + globalY;
    console.log("Calc: " + calc + " GlobalY: " + globalY);
    mouse.style.left = globalX + "px";
    mouse.style.top = calc + "px";
}

// Detect if the real mouse has hovered over the custom cursor
function detectHover() {
    console.log("Collision detected.");
}