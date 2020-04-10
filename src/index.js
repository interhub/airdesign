import "./mess.js";
import $ from "JQuery";


$(".menu_btn").click(() => {
    $(".items_hide").slideToggle(300);

})

$(window).on("scroll", () => {
    if (pageYOffset == 0) {
        $("nav").css({
            "background": "#7bc2ff",
            "box-shadow": "0 0 0 0 gray"
        })
    } else {
        $("nav").css({
            "background": "white",
            "box-shadow": "0 1px 3px 4px rgba(0,0,0,0.2)"
        })
    }
})

$(".one").click(() => {
    $("html, body").animate({
        scrollTop: 0
    })
    console.log("click one");
})
$(".two").click(() => {
    $("html, body").animate({
        scrollTop: $(".art_title").position().top
    })
    console.log("click one");
})

$(".tree").click(() => {
    $("html, body").animate({
        scrollTop: $(".aside_title").position().top
    })
    console.log("click one");
})

$(".four").click(() => {
    $("html, body").animate({
        scrollTop: $(".title_foot").position().top
    })
    console.log("click one");
})
$(".items li, .items_hide li").click(() => {

    if ($(".menu_btn").css("display") != "none") {
        $(".menu_btn").click();
    }
})

$(".form_on").click(() => {
    if ($(".input_box").css("display") == "none") {
        $(".input_box").css("display", "flex");
        $(".txt").focus()
    } else {
        $(".input_box").css("display", "none")
    }
})
$(".send").click(() => {
    var txt = $(".txt").val();
    $(".txt").val("");
    $(".form_on").click();
    if (txt != "") {
        fetch(location.origin + "/message/" + encodeURIComponent(txt))

    }
})
