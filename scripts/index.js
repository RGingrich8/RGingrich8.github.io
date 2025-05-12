// Control Flow
function main() {
    console.log("index.js loaded successfully.");
    alert("This website is being restructured. It will be completed by May 17, 2025.");
    set_event_listeners();
}


/**
 * 
 * @param {*} id The dropdown's id
 * @param {*} content_id The content's id
 */
function dropdown_toggle(id, content_id) {
    
    let drop = document.getElementById(id);
    let sign = drop.firstChild;
    let content = document.getElementById(content_id);

    drop.classList.toggle("dropdown_open");                         // Dropdown toggled between open and closed

    if (content.style.height == "0px") {
        content.style.height = content.scrollHeight + 100 + "px";
        sign.src = "./images/minus.png";
    } else {
        content.style.height = "0px";
        sign.src = "./images/plus.png";
    }
}


/**
 * Set up DOM objects' listeners
 */
function set_event_listeners() {
    
    let dropdowns = document.getElementsByClassName("dropdown");
    
    for (let x = 0; x < dropdowns.length; x++) {
        dropdowns[x].addEventListener("click", function() {
            dropdown_toggle(dropdowns[x].id, dropdowns[x].id + "_content");
        });
    }

}

// Run
main();