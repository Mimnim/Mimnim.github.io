window.addEventListener('message', function (event) {
    if (event.data.height && event.data.id) {
        console.log('Received height:', event.data.height, 'for iframe:', event.data.id);
        var iframe = document.getElementById(event.data.id);
        var total_height = pareseInt(event.data.height) + 10;
        console.log('full height:', total_height);
        if (iframe) {
            iframe.style.height = total_height + 'px';
        }
    }
});