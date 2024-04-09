function notifyMe() {
    if (!window.Notification) {
        console.log('Browser does not support notifications.');
    } else {
        // check if permission is already granted
        if (Notification.permission === 'granted') {
            // show notification here
            var notify = new Notification('There is virus in your micrisoft copuuter!', {
                body: 'plies call the micrisoft tech support to talk with the geeksquad!',
                icon: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Farchive.org%2Fdetails%2F1d9464dbff7a1630882d0e2090cb714c&psig=AOvVaw17Km7JlGZfOfd9ZNvaNTgp&ust=1712748508519000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDItMWDtYUDFQAAAAAdAAAAABAE',
            });
        } else {
            // request permission from user
            Notification.requestPermission().then(function (p) {
                if (p === 'granted') {
                    // show notification here
                    var notify = new Notification('There is virus in your micrisoft copuuter!', {
                        body: 'plies call the micrisoft tech support to talk with the geeksquad!',
                        icon: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Farchive.org%2Fdetails%2F1d9464dbff7a1630882d0e2090cb714c&psig=AOvVaw17Km7JlGZfOfd9ZNvaNTgp&ust=1712748508519000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDItMWDtYUDFQAAAAAdAAAAABAE',
                    });
                } else {
                    console.log('User blocked notifications.');
                }
            }).catch(function (err) {
                console.error(err);
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    notifyMe();
});