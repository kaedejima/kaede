// ******************** ONLOAD ********************
window.onload = function () {
    // $('.header').load("header.html");
    // $('#header').append('<div>BeforeEnd</div>');
}
var image_elements = document.querySelectorAll('img');
if (image_elements.length) { // disable dragging
    for (i = 0; i < image_elements.length; i++) {
        image_elements[i].setAttribute("oncontextmenu", "return false;");
        image_elements[i].setAttribute("onselectstart", "return false;");
        image_elements[i].setAttribute("onmousedown", "return false;");
    }
}
// ******************** NAVIGATION BAR ********************
document.querySelector("#hamburger").onclick = function () {
    this.classList.toggle("rotate");
}
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
var section = document.querySelectorAll(".section")
for (j = 0; j < section.length; j++) {
    section[j].onclick = function () {
        console.log("clicked!");
        var jpn = document.querySelectorAll(".lang-jpn");
        var eng = document.querySelectorAll(".lang-eng");
        for (i = 0; i < jpn.length; i++) {
            jpn[i].classList.toggle("inactive");
            eng[i].classList.toggle("inactive");
        }
    }
}
// ******************** WORK PAGES ********************
if (document.querySelector("body").classList.contains("work")) {
    document.querySelector(".work-more").onclick = function () {
        document.querySelector(".work-more-content").classList.toggle("inactive");
    }
}
// ******************** RESPONSIVE ********************