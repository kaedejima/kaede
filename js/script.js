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
// ******************** WORK PAGES ********************
$(function () {
    $(".work-more").on('click', function () {
        // $(this).toggleClass("rotated-image");
        $(".work-more-content").toggleClass("inactive");
    })
});