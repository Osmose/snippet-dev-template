(function() {
    var snippet = document.getElementById('flicks-video-snippet');
    var message = document.getElementById('flicks-video-message');
    var video = document.getElementById('flicks-video');
    var play_link = document.getElementById('flicks-video-play');

    // Display and play the video after the message has faded.
    message.addEventListener('transitionend', function(e) {
        message.style.display = 'none';
        video.className = 'show';

        video.play();
    }, false);

    // Bind click event only after snippet has loaded.
    snippet.addEventListener('show_snippet', function() {
        // Trigger animation when play link is clicked.
        play_link.addEventListener('click', function(e) {
            message.className = 'hidden';
            e.stopPropagation();
        }, false);
    }, false);
})();