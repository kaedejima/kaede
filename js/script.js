// ******************** ONLOAD ********************
window.onload = function () {
};

$(function () {
    $("#footer").load("../view/footer.html");
    $('#header').load('../view/header.html');
    // path
    var path = location.pathname;
    if (path == '/index.html') {
        $('#body').load('../view/index.html');
    }
});

// ******************** NAVIGATION BAR ********************
$(function () {
    $("#hamburger").on('click', function () {
        // $(this).toggleClass("rotated-image");
        $(this).toggleClass("rotate");
    })
});