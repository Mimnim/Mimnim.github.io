function sendHeight() {
    if (window.frameElement) {
        var height = document.body.scrollHeight;
        console.log('Sending height:', height, 'from iframe with id:', window.frameElement.id);
        window.parent.postMessage({ height: height, id: window.frameElement.id }, '*');
    } else {
        console.error("This script is not running inside an iframe.");
    }
}

window.onload = function() {
    console.log("Iframe content loaded.");
    console.log("window.frameElement:", window.frameElement);
    sendHeight();
};
window.onresize = sendHeight;