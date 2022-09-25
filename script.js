function setHeights() {
    var windowHeight = $(window).height();
    $('.slide').height(windowHeight);
}

setHeights();

$(window).resize(function() {
    setHeights();
});

function addSticky() {
    $('.slide').each(function() {
        var scrollerAnchor = $(this).offset().top;
        if (window.scrollY >= scrollerAnchor) {
            $(this).addClass('fix-it');
        } else {
            $(this).removeClass('fix-it');
        }
    });
}

$(window).scroll(function() {
    addSticky();
});