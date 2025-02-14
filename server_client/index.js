/**
 * As review - the page will load the html file
 * Whenever, it runs into a <script> tag it will run this code next.
 */

function returnRandomNumber () {
    const val = Math.floor(Math.random() * 100)
    console.log(val)
    return val
}

// Common function used to do things at a certain interval
setInterval(() => {
    const serverElement = document.getElementById("server");
    val = returnRandomNumber();
    serverElement.textContent = val;

    const bc = new BroadcastChannel("test_channel");
    bc.postMessage(val);
}, 2000);

// Adds an event listener to the object that you're working with.
const server = document.getElementById("server");

function changeColour() {
    console.log("hover detected");
}

server.addEventListener("mouseover", changeColour());