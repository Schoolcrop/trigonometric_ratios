const navLinkEls = document.querySelectorAll('.nav-link');
const windowPathname = window.location.pathname;

navLinkEls.forEach(navLinkEl => {
    if (navLinkEl.href.includes(windowPathname)) {
        navLinkEl.classList.add('active');
    }
});



document.querySelectorAll('video').forEach(function(el, i) { el.playbackRate = 5.25; });



var files = ['./interactive/snippet-1.html, ./interactive/snippet-2.html, ./interactive/snippet-3.html, ./interactive/snippet-4.html', ]; // List of HTML files to display

var index = 0; // Current index of the file being displayed

function next() {
    index++;
    if (index >= files.length) {
        index = 0;
    }
    document.getElementById('myframe').src = files[index];
}

function prev() {
    index--;
    if (index < 0) {
        index = files.length - 1;
    }
    document.getElementById('myframe').src = files[index];
}