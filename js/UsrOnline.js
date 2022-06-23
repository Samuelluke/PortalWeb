window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

function updateOnlineStatus(event) {
    const condition = navigator.onLine

        ?
        'online' :
        'offline'

    console.log('estás ${condition}');
}