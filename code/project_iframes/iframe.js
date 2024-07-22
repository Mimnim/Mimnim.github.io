function sendHeight() {
    if (window.frameElement) { // Check if this is within an iframe
        var height = document.body.scrollHeight;
        window.parent.postMessage({ height: height, id: window.frameElement.id }, '*');
    } else {
        console.error("This script is not running inside an iframe.");
    }
}
window.onload = sendHeight;
window.onresize = sendHeight;