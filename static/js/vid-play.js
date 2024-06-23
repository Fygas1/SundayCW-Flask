$(document).ready(function() {
    // Ensure modal video is initialized once
    if (!$('.js-video-button').hasClass('modal-video-initialized')) {
        $('.js-video-button').modalVideo({
            channel: 'youtube',
            youtube: {
                autoplay: 1
            }
        });
        $('.js-video-button').addClass('modal-video-initialized');
    }

    // Initialize bLazy
    var bLazy = new Blazy();
});