$("h1").addClass("big-purple-title");
// console.log($("h1").hasClass("big-title"));
$("h2").text("World");
$("button").html("<i>Click Me!</i>");
$("img").attr("src", () => {
    return "https://picsum.photos/200/300";
});
$("img").on("click", () => {
    $("img").attr("src", "https://picsum.photos/200/300?" + new Date().getTime());
});
$("a").attr("href", "https://www.google.com");
$("a").attr("target", "_blank");
$("a").html("<b><i>Google Search</i></b>");
$("h1").on("click", () => {
    if ($("h1").hasClass("big-purple-title") === true) {
        $("h1").removeClass("big-purple-title").addClass("big-yellow-title");
    } else {
        $("h1").removeClass("big-yellow-title").addClass("big-purple-title");
    }
});
$("button").on("click", function () {
    const buttonId = $(this).attr("id");
    console.log(buttonId + " was pressed");
});
$(document).on("keypress", function (event) {
    $("h2").text(event.key);
})
$("h2").on("mouseover", function() {
    if ($("h2").hasClass("change-style") === true) {
        $("h2").removeClass("change-style");
    } else {
        $("h2").addClass("change-style");
    }
})

// https://stackoverflow.com/questions/14846506/append-prepend-after-and-before
