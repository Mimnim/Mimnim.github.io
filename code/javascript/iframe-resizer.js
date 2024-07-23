window.addEventListener('message', function (event) {
    //console.log('Message event received:', event);
    if (event.data.height && event.data.id) {
        console.log('Received height:', event.data.height, 'for iframe:', event.data.id);
        var iframe = document.getElementById(event.data.id);
        var total_height = pareseInt(event.data.height);
        console.log('full height:', total_height);
        if (iframe) {
            iframe.style.height = total_height + 'px';
        }else {
            console.log('Height or ID missing in message:', event.data); // Log if height or ID is missing
        }
    }
});