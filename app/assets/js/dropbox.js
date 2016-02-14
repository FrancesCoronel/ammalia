if (window.location.href.indexOf('http://') === 0 && window.location.host.indexOf('127.0.0.1') !== 0) {
    window.location = window.location.href.replace('http://', 'https://');
}

var APP_KEY = 'x5q1v8jojmd8m30';

var client = new Dropbox.Client({
    key: APP_KEY
});

// Use a pop-up for auth.
client.authDriver(new Dropbox.AuthDriver.Popup({
    receiverUrl: window.location.href + 'oauth_receiver.html'
}));

// First check if we're already authenticated.
client.authenticate({
    interactive: false
});

if (client.isAuthenticated()) {
    // If we're authenticated, update the UI to reflect the logged in status.
    loggedIn();
} else {
    // Otherwise show the login button.
    $('#login').show();
}

$('#login').click(function() {
    client.authenticate(function(err) {
        if (err) {
            alert('Error: ' + err);
            return;
        } else {
            loggedIn();
        }
    });
});

function loggedIn() {
    $('#login').hide();
    var datastoreManager = new Dropbox.Datastore.DatastoreManager(client);
    datastoreManager.openDefaultDatastore(function(err, datastore) {
        if (err) {
            alert('Error: ' + err);
            return;
        }
        // Make sure we use the "max" resolution rule to resolve conflicts about which level we're on.
        var table = datastore.getTable('state');
        table.setResolutionRule('level', 'max');

        function getRecord() {
            // Use getOrInsert to provide a default of level 0.
            return table.getOrInsert(
                'current_level', {
                    level: 0
                });
        }

        function updateLevel() {
            setLevel(getRecord().get('level'));
        }
        updateLevel();

        // Any time there's a change, update the current level.
        datastore.recordsChanged.addListener(updateLevel);

        $('#box').click(function(e) {
            e.preventDefault();

            // Increment the level.
            var record = getRecord();
            record.set('level', record.get('level') + 1);
        });

        $('#reset').click(function(e) {
            e.preventDefault();
            // Go back to level 0.
            getRecord().set('level', 0);
        });

        $('#logout').show().click(function(e) {
            e.preventDefault();
            client.signOut();
            $('#login').show();
        });
    });
}
