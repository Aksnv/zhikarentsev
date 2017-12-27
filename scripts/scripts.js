/* Slider on main page */

function slider() {
  for (var i = 0; i < $(".slider-pagination__item").length; i++) {
    if ($($(".slider-pagination__item")[i]).hasClass("slider-pagination__item--active")) {
      if (i == 4) {
        $($(".slider-pagination__item")[i]).removeClass("slider-pagination__item--active");
        $($(".slider-pagination__item")[0]).addClass("slider-pagination__item--active");
        $($(".slider-content__item")[i]).removeClass("slider-content__item--active");
        $($(".slider-content__item")[0]).addClass("slider-content__item--active");
        break;
      } else {
        $($(".slider-pagination__item")[i]).removeClass("slider-pagination__item--active");
        $($(".slider-pagination__item")[i + 1]).addClass("slider-pagination__item--active");
        $($(".slider-content__item")[i]).removeClass("slider-content__item--active");
        $($(".slider-content__item")[i + 1]).addClass("slider-content__item--active");
        break;
      }
    }
  }
};

setInterval(slider, 3000);

$(".slider-pagination__item").click(function(e) {
  e.preventDefault();
  for (var i = 0; i < $(".slider-pagination__item").length; i++) {
    $($(".slider-pagination__item")[i]).removeClass("slider-pagination__item--active");
    $($(".slider-content__item")[i]).removeClass("slider-content__item--active");
  }
  $(this).addClass("slider-pagination__item--active");
  var num = $(this).attr("class").charAt(49);
  $($(".slider-content__item")[num - 1]).addClass("slider-content__item--active");
});


/* Seminars & Consultations tabs */

$(".tabs-title__item--seminars").click(function() {
  $(this).addClass("tabs-title__item--active");
  $(".tabs-title__item--consultations").removeClass("tabs-title__item--active");
  $(".consultations-wrapper").hide();
  $(".seminars--wrapper").show();
});

$(".tabs-title__item--consultations").click(function() {
  $(this).addClass("tabs-title__item--active");
  $(".tabs-title__item--seminars").removeClass("tabs-title__item--active");
  $(".consultations-wrapper").show();
  $(".seminars--wrapper").hide();
});

$(".tabs-seminars__item--tile").click(function() {
  $(this).addClass("tabs-seminars__item--active");
  $(".tabs-seminars__item--list").removeClass("tabs-seminars__item--active");
  $(".seminars-list").hide();
  $(".seminars-tile").show();
});

$(".tabs-seminars__item--list").click(function() {
  $(this).addClass("tabs-seminars__item--active");
  $(".tabs-seminars__item--tile").removeClass("tabs-seminars__item--active");
  $(".seminars-list").show();
  $(".seminars-tile").hide();
});


/* Seminars list */

$(".seminars-list__item").mouseover(function() {
  $(this).addClass("seminars-list__item--active");
});

$(".seminars-list__item").mouseout(function() {
  $(this).removeClass("seminars-list__item--active");
});


/* Entry form */

$(".entry-button").click(function() {
  $(".popup").addClass("popup--active");
});


/* Back-to-top button */

$(".back-to-top").click(function() {
  $("html, body").animate({
    scrollTop: 0
  }, 1000);
  return false;
});

(function () {

  var backToTopButton = document.querySelector(".back-to-top");
  window.addEventListener("scroll", function(event) {
    if ($(window).scrollTop() == 0) {
      backToTopButton.classList.remove("back-to-top--visible");
    } else {
      backToTopButton.classList.add("back-to-top--visible");
    }
  });

}());



