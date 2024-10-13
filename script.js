document.querySelector('.close-menu').addEventListener('click', function () {
    document.querySelector('.navbar-collapse').classList.remove('show');
});
document.addEventListener('DOMContentLoaded', function() {
    var video = document.querySelector('video');
    if (video) {
        video.play().catch(function(error) {
            console.log("Autoplay failed:", error);
        });
    }
});
