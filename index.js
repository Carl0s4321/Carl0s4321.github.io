document.addEventListener('DOMContentLoaded', function () {
    var divs = document.querySelectorAll('.item-image');
    divs.forEach(function (div) {
        var src = div.getAttribute('data-src');
        div.style.backgroundImage = "url('" + src + "')";
    });
});