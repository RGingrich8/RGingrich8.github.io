// Global Vars and Constants
const URL = "https://rgingrich8.github.io/";
const URL_ALT = "https://rgingrich8.github.io";
// let globalX = 0;
// let globalY = 0;

// Run
main();
// Will add a future check that asks users to rotate their mobile devices/resize the browser window (replace entire window with black bg and orange text)
// window.addEventListener('resize', checkWindowSize);

// Control Flow
function main() {
    console.log("JavaScript loaded successfully.");
    alert("This page is being restructured. It will be completed by October 31, 2024.")
    // if (window.innerWidth < 1500) {
    //     alert("Please rotate your mobile device for the optimal experience.");  // Temporary fix, alert users 
    // }
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

// For mobile devices, or if the pc screen is too small
function checkWindowSize() {
    console.log(window.innerWidth);
}





// Custom cursor code below, currently not used

// Mouse Movement and Behaviour
// function mouseLogic(event) {
//     // console.log("Real Mouse Position, X: " + event.pageX + " Y: " + event.pageY);
//     let mouse = document.getElementById("mouse_basic");
//     mouse.style.left = event.pageX + "px";
//     mouse.style.top = event.pageY + "px";
//     // globalX = event.pageX;
//     // globalY = event.pageY;
// }

// Mouse scroll logic, unfinished
// function mouseScroll() {
//     // console.log(document.documentElement.scrollTop);
//     let mouse = document.getElementById("mouse_basic");
//     let calc = document.documentElement.scrollTop + globalY;
//     console.log("Calc: " + calc + " GlobalY: " + globalY);
//     mouse.style.left = globalX + "px";
//     mouse.style.top = calc + "px";
// }

// Detect if the real mouse has hovered over the custom cursor
// function detectHover() {
//     console.log("Collision detected.");
// }
