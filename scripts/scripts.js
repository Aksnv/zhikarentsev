/* Menu */

$(window).resize(function() {
  if ($(".container").css("width") == "1170px") {
    $(".main-menu ul").show();
  } else {
    $(".main-menu ul").hide();
  }
});

$(".main-menu__open-button").click(function() {
  $(this).hide();
  $(".main-menu").addClass("main-menu--mobile");
  $(".content").addClass("content--mobile");
  $(".main-menu ul").show();
  $(".main-menu__close-button").show();
  $("body").css("overflowY", "hidden");
});

$(".main-menu__close-button").click(function() {
  $(this).hide();
  $(".main-menu").removeClass("main-menu--mobile");
  $(".content").removeClass("content--mobile");
  $(".main-menu ul").hide();
  $(".main-menu__open-button").show();
  $("body").css("overflowY", "scroll");
});


/* Slider */

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


/* Seminars & consultations */

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

$(".seminars-list__item").mouseover(function() {
  $(this).addClass("seminars-list__item--active");
});

$(".seminars-list__item").mouseout(function() {
  $(this).removeClass("seminars-list__item--active");
});


/* Schedule */

$(window).resize(function() {
  if ($(".container").css("width") != "1170px") {
    $(".seminars-list__item .entry-button").text("Записаться");
  } else {
    $(".seminars-list__item .entry-button").text("Записаться на семинар");
  }
});

$(document).ready(function() {
  if ($(".container").css("width") != "1170px") {
    $(".seminars-list__item .entry-button").text("Записаться");
  } else {
    $(".seminars-list__item .entry-button").text("Записаться на семинар");
  }
});


/* Entry form */

$(".entry-button").click(function() {
  $(".popup--entry-form").addClass("popup--active");
  $(".jq-selectbox__select-text").text("Семинар *");
});

$(".popup__close-button").click(function() {
  $(".popup--entry-form").removeClass("popup--active");
});

$(".tabs-form__item--seminar").click(function() {
  $(this).addClass("tabs-form__item--active");
  $(".tabs-form").removeClass("tabs-form--consultation");
  $(".tabs-form__item--consultation").removeClass("tabs-form__item--active");
  $(".entry-form--consultation").hide();
  $(".entry-form--seminar").show();
});

$(".tabs-form__item--consultation").click(function() {
  $(this).addClass("tabs-form__item--active");
  $(".tabs-form").addClass("tabs-form--consultation");
  $(".tabs-form__item--seminar").removeClass("tabs-form__item--active");
  $(".entry-form--consultation").show();
  $(".entry-form--seminar").hide();
});

$(".entry-form input[type='text']").blur(function() {
  if (this.value != "") {
    $(this).next().addClass("entry-form__label");
  } else {
    $(this).next().removeClass("entry-form__label");
    $(this).addClass("invalid-value");
    if ($(this).hasClass("entry-form__comments")) {
      $(this).removeClass("invalid-value");
    }
  }
});

$(".entry-form input[type='tel']").blur(function() {
  if (this.value != "") {
    $(this).next().addClass("entry-form__label");
  } else {
    $(this).next().removeClass("entry-form__label");
    $(this).addClass("invalid-value");
  }
});

$(".entry-form input[type='email']").blur(function() {
  if (this.value != "") {
    $(this).next().addClass("entry-form__label");
  } else {
    $(this).next().removeClass("entry-form__label");
    $(this).addClass("invalid-value");
  }
});

$(".entry-form input[type='text']").focus(function() {
  $(this).removeClass("invalid-value");
});

$(".entry-form input[type='tel']").focus(function() {
  $(this).removeClass("invalid-value");
});

$(".entry-form input[type='email']").focus(function() {
  $(this).removeClass("invalid-value");
});

$(".entry-form__select").blur(function() {
  if ($(".jq-selectbox__select-text").text() == "Семинар *") {
    $(".entry-form .jq-selectbox").addClass("invalid-value");
  } else {
    $(".entry-form .jq-selectbox").removeClass("invalid-value");
  }
});

$(".entry-form__select").change(function() {
  if ($(".jq-selectbox__select-text").text() != "Семинар *") {
    $(".entry-form .jq-selectbox").removeClass("invalid-value");
  }
});


/* Feedback form */

$(".footer-link__feedback").click(function(e) {
  e.preventDefault();
  $(".popup--feedback-form").addClass("popup--active");
});

$(".popup__close-button").click(function() {
  $(".popup--feedback-form").removeClass("popup--active");
});

$(".feedback-form input[type='text']").blur(function() {
  if (this.value != "") {
    $(this).next().addClass("feedback-form__label");
  } else {
    $(this).next().removeClass("feedback-form__label");
    $(this).addClass("invalid-value");
    if ($(this).hasClass("feedback-form__message-theme")) {
      $(this).removeClass("invalid-value");
    }
  }
});

$(".feedback-form input[type='tel']").blur(function() {
  if (this.value != "") {
    $(this).next().addClass("feedback-form__label");
  } else {
    $(this).next().removeClass("feedback-form__label");
    $(this).addClass("invalid-value");
  }
});

$(".feedback-form input[type='email']").blur(function() {
  if (this.value != "") {
    $(this).next().addClass("feedback-form__label");
  } else {
    $(this).next().removeClass("feedback-form__label");
    $(this).addClass("invalid-value");
  }
});

$(".feedback-form input[type='text']").focus(function() {
  $(this).removeClass("invalid-value");
});

$(".feedback-form input[type='tel']").focus(function() {
  $(this).removeClass("invalid-value");
});

$(".feedback-form input[type='email']").focus(function() {
  $(this).removeClass("invalid-value");
});


/* Seminar reviews */

$(".add-review-button").click(function() {
  $(this).hide();
  $(".review-form").addClass("review-form--visible");
});

$(".review-form__reset").click(function() {
  $(".review-form").removeClass("review-form--visible");
  $(".add-review-button").show();
});

$(".review-form input[type='text']").blur(function() {
  if (this.value != "") {
    $(this).next().addClass("review-form__label");
  } else {
    $(this).next().removeClass("review-form__label");
    $(this).addClass("invalid-value");
    if ($(this).hasClass("review-form__name")) {
      $(this).removeClass("invalid-value");
    }
  }
});

$(".review-form textarea").blur(function() {
  if (this.value != "") {
    $(this).next().addClass("review-form__label");
  } else {
    $(this).next().removeClass("review-form__label");
    $(this).addClass("invalid-value");
    if ($(this).hasClass("review-form__name")) {
      $(this).removeClass("invalid-value");
    }
  }
});

$(".review-form input[type='text']").focus(function() {
  $(this).removeClass("invalid-value");
});

$(".review-form textarea").focus(function() {
  $(this).removeClass("invalid-value");
});

$(".review-visible").click(function() {
  $(this).hide();
  $(".seminar-review").addClass("seminar-review--visible");
  $(".review-invisible").show();
});

$(".review-invisible").click(function() {
  $(this).hide();
  $(".seminar-review").removeClass("seminar-review--visible");
  $(".review-visible").show();
});


/* Library */

$(".tabs-library__item").click(function() {
  for (var i = 0; i < $(".tabs-library__item").length; i++) {
    $($(".tabs-library__item")[i]).removeClass("tabs-library__item--active");
    $(this).addClass("tabs-library__item--active");
  }
  if ($(this).hasClass("tabs-library__item--1")) {
    $(".tabs-books").show();
    $(".library-section--books").show();
    $(".tabs-articles").hide();
    $(".library-section--articles").hide();
    $(".tabs-story").hide();
    $(".library-section--story").hide();
    $(".tabs-video").hide();
    $(".library-section--video").hide();
    $(".library-section--dictionary").hide();
  } else if ($(this).hasClass("tabs-library__item--2")) {
    $(".tabs-books").hide();
    $(".library-section--books").hide();
    $(".tabs-articles").show();
    $(".library-section--articles_1").show();

    $(".library-section--articles_1 ul").show();
    $(".library-section--articles_1 .pagination").show();
    $(".library-section--articles article.article_1-1").hide();

    $(".tabs-story").hide();
    $(".library-section--story").hide();
    $(".tabs-video").hide();
    $(".library-section--video").hide();
    $(".library-section--dictionary").hide();
  } else if ($(this).hasClass("tabs-library__item--3")) {
    $(".tabs-books").hide();
    $(".library-section--books").hide();
    $(".tabs-articles").hide();
    $(".library-section--articles").hide();
    $(".tabs-story").show();
    $(".library-section--story").show();
    $(".tabs-video").hide();
    $(".library-section--video").hide();
    $(".library-section--dictionary").hide();
  } else if ($(this).hasClass("tabs-library__item--4")) {
    $(".tabs-books").hide();
    $(".library-section--books").hide();
    $(".tabs-articles").hide();
    $(".library-section--articles").hide();
    $(".tabs-story").hide();
    $(".library-section--story").hide();
    $(".tabs-video").show();
    $(".library-section--video").show();
    $(".library-section--dictionary").hide();
  } else {
    $(".tabs-books").hide();
    $(".library-section--books").hide();
    $(".tabs-articles").hide();
    $(".library-section--articles").hide();
    $(".tabs-story").hide();
    $(".library-section--story").hide();
    $(".tabs-video").hide();
    $(".library-section--video").hide();
    $(".library-section--dictionary").show();
  }
});

$(".tabs-articles__item").click(function() {
  for (var i = 0; i < $(".tabs-articles__item").length; i++) {
    $($(".tabs-articles__item")[i]).removeClass("tabs-articles__item--active");
    $(this).addClass("tabs-articles__item--active");
    if ($(this).hasClass("tabs-articles__item--1")) {
      $(".library-section--articles_1").show();

      $(".library-section--articles_1 ul").show();
      $(".library-section--articles_1 .pagination").show();
      $(".library-section--articles article.article_1-1").hide();

      $(".library-section--articles_6").hide();
    } else if ($(this).hasClass("tabs-articles__item--6")) {
      $(".library-section--articles_1").hide();
      $(".library-section--articles_6").show();
    }
  }
});

$(".article-link_1-1").click(function(e) {
  e.preventDefault();
  $(".library-section--articles_1 ul").hide();
  $(".library-section--articles_1 .pagination").hide();
  $(".library-section--articles article.article_1-1").show();
});

$(".articles-list").click(function(e) {
  e.preventDefault();
  $(".library-section--articles_1 ul").show();
  $(".library-section--articles_1 .pagination").show();
  $(".library-section--articles article.article_1-1").hide();
});


/* Contacts */

$(".tabs-contacts__item").click(function() {
  for (var i = 0; i < $(".tabs-contacts__item").length; i++) {
    $($(".tabs-contacts__item")[i]).removeClass("tabs-contacts__item--active");
    $(this).addClass("tabs-contacts__item--active");
  }
  if ($(this).hasClass("tabs-contacts__item--1")) {
    $(".map").show();
    $(".contacts--spb").show();
    $(".contacts--msk").hide();
    $(".contacts--reg").hide();
  } else if ($(this).hasClass("tabs-contacts__item--2")) {
    $(".map").hide();
    $(".contacts--spb").hide();
    $(".contacts--msk").show();
    $(".contacts--reg").hide();
  } else {
    $(".map").hide();
    $(".contacts--spb").hide();
    $(".contacts--msk").hide();
    $(".contacts--reg").show();
  }
});


/* Online reader */

$(".library-button--read").click(function(e) {
  e.preventDefault();
  $(".popup--online-reader").addClass("popup--active");
});

$(".online-reader__close-button").click(function() {
  $(".popup--online-reader").removeClass("popup--active");
});

$(".online-reader__action--font").mouseover(function() {
  $(".online-reader__font").addClass("online-reader__font--visible");
});

$(document).click(function(e) {
  var onlineReaderFont = $(".online-reader__font--visible");
  if ((!onlineReaderFont.is(e.target)) && (onlineReaderFont.has(e.target).length === 0)) {
    $(onlineReaderFont).removeClass("online-reader__font--visible");
  }
});

$( function() {
  $( ".online-reader__range" ).slider({
    range: "min",
    value: 12,
    min: 1,
    max: 156,
    slide: function( event, ui ) {
      $( "#online-reader__min-range" ).val( ui.value );
    }
  });
  $( "#online-reader__min-range" ).val( $( ".online-reader__range" ).slider( "value" ) );
} );

$(".online-reader__font-item--small").click(function() {
  $(".online-reader__content").addClass("online-reader__content--small");
  $(".online-reader__content").removeClass("online-reader__content--normal");
  $(".online-reader__content").removeClass("online-reader__content--large");
});

$(".online-reader__font-item--normal").click(function() {
  $(".online-reader__content").removeClass("online-reader__content--small");
  $(".online-reader__content").addClass("online-reader__content--normal");
  $(".online-reader__content").removeClass("online-reader__content--large");
});

$(".online-reader__font-item--large").click(function() {
  $(".online-reader__content").removeClass("online-reader__content--small");
  $(".online-reader__content").removeClass("online-reader__content--normal");
  $(".online-reader__content").addClass("online-reader__content--large");
});


/* Oldslavonic language navigation */

$("a[href='#oldslavonic-language__why-to-study']").click(function() {
  $("html, body").animate({
    scrollTop: $("#oldslavonic-language__why-to-study").offset().top
  }, 1000);
  return false;
});

$("a[href='#oldslavonic-language__our-results']").click(function() {
  $("html, body").animate({
    scrollTop: $("#oldslavonic-language__our-results").offset().top
  }, 1000);
  return false;
});

$("a[href='#oldslavonic-language__cyrillic']").click(function() {
  $("html, body").animate({
    scrollTop: $("#oldslavonic-language__cyrillic").offset().top
  }, 1000);
  return false;
});

$("a[href='#oldslavonic-language__double-number']").click(function() {
  $("html, body").animate({
    scrollTop: $("#oldslavonic-language__double-number").offset().top
  }, 1000);
  return false;
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
    /*if ($(window).scrollTop() == 0) {
      backToTopButton.classList.remove("back-to-top--visible");
    } else {
      backToTopButton.classList.add("back-to-top--visible");
    }*/
    if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
      backToTopButton.classList.add("back-to-top--visible");
    } else {
      backToTopButton.classList.remove("back-to-top--visible");
    }
  });

}());


/* jQuery Form Styler activation */

(function($) {
$(function() {

  $('select').styler();
    
});
})(jQuery);


/* autoResize textarea plugin activation */

jQuery(function()
{
  jQuery('textarea').autoResize({
    extraSpace : 0
});
});