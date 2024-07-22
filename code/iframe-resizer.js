window.addEventListener('message', function (event) {
    if (event.data.height && event.data.id) {
        console.log('Received height:', event.data.height, 'for iframe:', event.data.id);
        var iframe = document.getElementById(event.data.id);
        if (iframe) {
            iframe.style.height = event.data.height + 'px';
        }
    }
});