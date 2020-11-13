// ******************** ONLOAD ********************
window.onload = function () {
};
// ******************** NAVIGATION BAR ********************
$(function () {
    $("#hamburger").on('click', function () {
        // $(this).toggleClass("rotated-image");
        $(this).toggleClass("rotate");
    })
});
// ******************** CHANGE THEME ********************
// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
    } else {
        setTheme('theme-light');
    }
})();
// ******************** LANGUAGE SWITCH ********************
$(function () {
    $(".section").on('click', function () {
        // $(this).toggleClass("rotated-image");
        $(".lang-jpn").toggleClass("inactive");
        $(".lang-eng").toggleClass("inactive");
    })
});
// ******************** WORK PAGES ********************
$(function () {
    $(".work-more").on('click', function () {
        // $(this).toggleClass("rotated-image");
        $(".work-more-content").toggleClass("inactive");
    })
});