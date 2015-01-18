$(function() {

    var taglines = ["We make games, sometimes", "Good tea is its own reward", "I push you, you fall down.", "A chance to be truly free...", "Sometimes the best companions are ceramic.", "I pick more than my nose, my friend."];
    $(".main-tagline").text(taglines[getRandomInt(0, taglines.length - 1)]);

    $("[data-bg]").each( function () {
        console.log("HERRO?");
        $(this).css("background-image", 'url("' + $(this).attr("data-bg") + '")');
    });

});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
