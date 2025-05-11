// Control Flow
function main() {
    console.log("index.js loaded successfully.");
    alert("This website is being restructured. It will be completed by May 17, 2025.");
}


/**
 * Sets an element's event listener
 * @param {*} obj_id            The id of the DOM element that requires the listener
 * @param {*} event_type        The triggering event type (eg. "input", "click", etc)
 * @param {*} listener_func     The listener function
 * @param {array} listener_args The optional array of arguments that should be passed into the listener function
 */
function set_event_listeners(obj_id, event_type, listener_func, listener_args) {

    if (listener_args) {
        document.getElementById(obj_id).addEventListener(event_type, function() {
            listener_func(listener_args);
        });
    } else {
        document.getElementById(obj_id).addEventListener(event_type, listener_func);
    }

}

// Run
main();