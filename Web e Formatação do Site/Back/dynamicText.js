document.addEventListener("DOMContentLoaded", function() {
    var sections = document.querySelectorAll("section");
    sections.forEach(function(section) {
        var bgColor = window.getComputedStyle(section).getPropertyValue("background-color");
        var textColor = getContrastColor(bgColor);
        section.style.color = textColor;
    });
});

function getContrastColor(color) {
    var r, g, b;
    if (color.match(/^rgb/)) {
        var rgbValues = color.match(/\d+/g);
        r = parseInt(rgbValues[0]);
        g = parseInt(rgbValues[1]);
        b = parseInt(rgbValues[2]);
    } else {
        var hex = parseInt(color.substring(1), 16);
        r = (hex >> 16) & 255;
        g = (hex >> 8) & 255;
        b = hex & 255;
    }

    var brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 125 ? "#000000" : "#ffffff";
}
