/* Menu */

$(window).resize(function() {
  if ($(".container").css("width") == "1170px") {
    $(".main-menu > ul").show();
  } else {
    $(".main-menu > ul").hide();
  }
});

$(".main-menu__open-button").click(function() {
  $(this).hide();
  $(".main-menu").addClass("main-menu--mobile");
  $(".content").addClass("content--mobile");
  $(".main-menu > ul").show();
  $(".main-menu__close-button").show();
  $(".header--image-bg .entry-button").show();
  $("body").css("overflowY", "hidden");
});

$(".main-menu__close-button").click(function() {
  $(this).hide();
  $(".main-menu").removeClass("main-menu--mobile");
  $(".content").removeClass("content--mobile");
  $(".main-menu > ul").hide();
  $(".main-menu__open-button").show();
  $("body").css("overflowY", "scroll");
});

$(window).scroll(function() {
  $(".main-menu__close-button").hide();
  $(".main-menu__open-button").show();
  $(".header--image-bg .entry-button").hide();
});

$(".main-menu__item--about").click(function(e) {
  e.preventDefault();
});

$(".main-menu__item--seminars").click(function(e) {
  e.preventDefault();
});


/* Submenu */

$(".main-menu__item").mouseover(function() {
  if ($(".container").css("width") == "1170px") {
    if ($(this).hasClass("main-menu__item--about")) {
      $(this).addClass("main-menu__item--current");
      $(".main-menu__submenu--about").addClass("main-menu__submenu--active");
      $(".main-menu__item--seminars").removeClass("main-menu__item--current");
      $(".main-menu__submenu--seminars").removeClass("main-menu__submenu--active");
    } else if ($(this).hasClass("main-menu__item--seminars")) {
      $(this).addClass("main-menu__item--current");
      $(".main-menu__submenu--seminars").addClass("main-menu__submenu--active");
      $(".main-menu__item--about").removeClass("main-menu__item--current");
      $(".main-menu__submenu--about").removeClass("main-menu__submenu--active");
    } else {
      $(this).addClass("main-menu__item--current");
      $(".main-menu__item--about").removeClass("main-menu__item--current");
      $(".main-menu__submenu--about").removeClass("main-menu__submenu--active");
      $(".main-menu__item--seminars").removeClass("main-menu__item--current");
      $(".main-menu__submenu--seminars").removeClass("main-menu__submenu--active");
    }
  }
});

$(".main-menu__item").mouseout(function() {
  if ($(".container").css("width") == "1170px") {
    if ($(".main-menu__submenu--about").hasClass("main-menu__submenu--active")) {
      $(this).addClass("main-menu__item--current");
    } else if ($(".main-menu__submenu--seminars").hasClass("main-menu__submenu--active")) {
      $(this).addClass("main-menu__item--current");
    } else {
      $(this).removeClass("main-menu__item--current");
    }
  }
});

$(".main-menu__submenu--about").mouseover(function(e) {
  if ($(".container").css("width") == "1170px") {
    e.stopPropagation();
    $(".main-menu__item--about").addClass("main-menu__item--current");
    $(".main-menu__submenu--about").addClass("main-menu__submenu--active");
  }
});

$(".main-menu__submenu--about").mouseout(function() {
  if ($(".container").css("width") == "1170px") {
    $(".main-menu__item--about").removeClass("main-menu__item--current");
    $(".main-menu__submenu--about").removeClass("main-menu__submenu--active");
  }
});

$(".main-menu__submenu--seminars").mouseover(function(e) {
  if ($(".container").css("width") == "1170px") {
    e.stopPropagation();
    $(".main-menu__item--seminars").addClass("main-menu__item--current");
    $(".main-menu__submenu--seminars").addClass("main-menu__submenu--active");
  }
});

$(".main-menu__submenu--seminars").mouseout(function() {
  if ($(".container").css("width") == "1170px") {
    $(".main-menu__item--seminars").removeClass("main-menu__item--current");
    $(".main-menu__submenu--seminars").removeClass("main-menu__submenu--active");
  }
});

$(".main-menu__item--about").click(function() {
  if ($(".container").css("width") != "1170px") {
    $(".main-menu__submenu--about").toggleClass("main-menu__submenu--active");
  }
});

$(".main-menu__item--seminars").click(function() {
  if ($(".container").css("width") != "1170px") {
    $(".main-menu__submenu--seminars").toggleClass("main-menu__submenu--active");
  }
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

/*$(".tabs-title__item--seminars").click(function() {
  $(this).addClass("tabs-title__item--active");
  $(".tabs-title__item--consultations").removeClass("tabs-title__item--active");
  $(".consultations-wrapper").hide();
  $(".seminars-wrapper").show();
});

$(".tabs-title__item--consultations").click(function() {
  $(this).addClass("tabs-title__item--active");
  $(".tabs-title__item--seminars").removeClass("tabs-title__item--active");
  $(".consultations-wrapper").show();
  $(".seminars-wrapper").hide();
});*/

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

/*$(window).resize(function() {
  if (($(".container").css("width") != "1170px") && ($(".tabs-title__item--consultations").hasClass("tabs-title__item--active"))) {
    $(".tabs-title__item--seminars").addClass("tabs-title__item--active");
    $(".tabs-title__item--consultations").removeClass("tabs-title__item--active");
    $(".tabs-title__item--consultations").hide();
    $(".consultations-wrapper").hide();
    $(".seminars-wrapper").show();
  } else if ($(".container").css("width") == "1170px") {
    $(".tabs-title__item--consultations").show();
  }
});*/

$(window).resize(function() {
  if (($(".container").css("width") == "568px") || (($(".container").css("width") == "280px"))) {
    $(".tabs-seminars__item--list").text("Списком");
  } else {
    $(".tabs-seminars__item--list").text("Показывать списком");
  }
});

$(document).ready(function() {
  if (($(".container").css("width") == "568px") || (($(".container").css("width") == "280px"))) {
    $(".tabs-seminars__item--list").text("Списком");
  } else {
    $(".tabs-seminars__item--list").text("Показывать списком");
  }
});

$(window).resize(function() {
  if (($(".container").css("width") == "568px") || (($(".container").css("width") == "280px"))) {
    $(".tabs-seminars__item--tile").text("Плиткой");
  } else {
    $(".tabs-seminars__item--tile").text("Показывать плиткой");
  }
});

$(document).ready(function() {
  if (($(".container").css("width") == "568px") || (($(".container").css("width") == "280px"))) {
    $(".tabs-seminars__item--tile").text("Плиткой");
  } else {
    $(".tabs-seminars__item--tile").text("Показывать плиткой");
  }
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


/* Distance seminars */

$(window).resize(function() {
  if ($(".container").css("width") <= "568px") {
    $(".distance-button").text("Сайт дистанционного обучения");
  } else {
    $(".distance-button").text("Перейти на сайт дистанционного обучения");
  }
});

$(document).ready(function() {
  if ($(".container").css("width") <= "568px") {
    $(".distance-button").text("Сайт дистанционного обучения");
  } else {
    $(".distance-button").text("Перейти на сайт дистанционного обучения");
  }
});


/* Gallery */

$(".gallery-button").click(function() {
  $(".popup--gallery").addClass("popup--active");
  $("body").css("overflowY", "hidden");
});

$(".popup__close-button").click(function() {
  $(".popup--gallery").removeClass("popup--active");
  $("body").css("overflowY", "scroll");
});

$(".gallery__button--forward").click(function() {
  for (var j = 0; j < $(".popup--gallery .item").length; j++) {
    $($(".popup--gallery .item")[j]).removeClass("active");
  }
  for (var i = 0; i < $(".gallery__image-item").length; i++) {
    if ($($(".gallery__image-item")[i]).hasClass("gallery__image-item--active")) {
      var num = i;
      if (num === 2) {
        num = -1;
      }
    }
    $($(".gallery__image-item")[i]).removeClass("gallery__image-item--active");
  }
  $($(".gallery__image-item")[num + 1]).addClass("gallery__image-item--active");
  $($(".popup--gallery .item")[num + 1]).addClass("active");
  $(".gallery__image-number").text(num + 2);
});

$(".gallery__button--back").click(function() {
  for (var j = 0; j < $(".popup--gallery .item").length; j++) {
    $($(".popup--gallery .item")[j]).removeClass("active");
  }
  for (var i = 0; i < $(".gallery__image-item").length; i++) {
    if ($($(".gallery__image-item")[i]).hasClass("gallery__image-item--active")) {
      var num = i;
      if (num === 0) {
        num = 3;
      }
    }
    $($(".gallery__image-item")[i]).removeClass("gallery__image-item--active");
  }
  $($(".gallery__image-item")[num - 1]).addClass("gallery__image-item--active");
  $($(".popup--gallery .item")[num - 1]).addClass("active");
  $(".gallery__image-number").text(num);
});


/* Entry form */

$(".entry-button").click(function() {
  $(".popup--entry-form").addClass("popup--active");
  $(".jq-selectbox__select-text").text("Семинар *");
  $("body").css("overflowY", "hidden");
});

$(".popup__close-button").click(function() {
  $(".popup--entry-form").removeClass("popup--active");
  $("body").css("overflowY", "scroll");
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

$(".entry-form textarea").blur(function() {
  if (this.value != "") {
    $(this).next().addClass("entry-form__label");
  } else {
    $(this).next().removeClass("entry-form__label");
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
    $(".entry-form .jq-selectbox").removeClass("valid-value");
  } else {
    $(".entry-form .jq-selectbox").removeClass("invalid-value");
    $(".entry-form .jq-selectbox").addClass("valid-value");
  }
});

$(".entry-form__select").change(function() {
  if ($(".jq-selectbox__select-text").text() != "Семинар *") {
    $(".entry-form .jq-selectbox").removeClass("invalid-value");
    $(".entry-form .jq-selectbox").addClass("valid-value");
  }
});


/* Feedback form */

$(".footer-link__feedback").click(function(e) {
  e.preventDefault();
  $(".popup--feedback-form").addClass("popup--active");
  $("body").css("overflowY", "hidden");
});

$(".popup__close-button").click(function() {
  $(".popup--feedback-form").removeClass("popup--active");
  $("body").css("overflowY", "scroll");
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

$(".feedback-form textarea").blur(function() {
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

$(".feedback-form textarea").focus(function() {
  $(this).removeClass("invalid-value");
});


/* Seminar reviews */

/*$(".add-review-button").click(function() {
  $(this).hide();
  $(".review-form").addClass("review-form--visible");
  $(".seminar-reviews").addClass("seminar-reviews--visible");
  if ($(".container").css("width") != "1170px") {
    $("body").css("overflowY", "hidden");
  }
});

$(".review-form__reset").click(function() {
  $(".review-form").removeClass("review-form--visible");
  $(".add-review-button").show();
  $(".seminar-reviews").removeClass("seminar-reviews--visible");
  if ($(".container").css("width") != "1170px") {
    $("body").css("overflowY", "scroll");
  }
});

$(".seminar-reviews .popup__close-button").click(function() {
  $(".review-form").removeClass("review-form--visible");
  $(".add-review-button").show();
  $(".seminar-reviews").removeClass("seminar-reviews--visible");
  if ($(".container").css("width") != "1170px") {
    $("body").css("overflowY", "scroll");
  }
});*/

$(".review-form input[type='text']").blur(function() {
  if (this.value != "") {
    $(this).next().addClass("review-form__label");
  } else {
    $(this).next().removeClass("review-form__label");
    $(this).addClass("invalid-value");
    /*if ($(this).hasClass("review-form__name")) {
      $(this).removeClass("invalid-value");
    }*/
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

/*$(".review-visible").click(function() {
  $(this).hide();
  $(".seminar-review").addClass("seminar-review--visible");
  $(".review-invisible").show();
});

$(".review-invisible").click(function() {
  $(this).hide();
  $(".seminar-review").removeClass("seminar-review--visible");
  $(".review-visible").show();
});*/

function reviewFormShow() {
  $(".review-form").css("display", "block");
  $(".jq-selectbox__select-text").text("Семинар *");
};

setTimeout(reviewFormShow, 100);

$(".review-form__select").blur(function() {
  if ($(".jq-selectbox__select-text").text() == "Семинар *") {
    $(".review-form .jq-selectbox").addClass("invalid-value");
    $(".review-form .jq-selectbox").removeClass("valid-value");
  } else {
    $(".review-form .jq-selectbox").removeClass("invalid-value");
    $(".review-form .jq-selectbox").addClass("valid-value");
  }
});

$(".review-form__select").change(function() {
  if ($(".jq-selectbox__select-text").text() != "Семинар *") {
    $(".review-form .jq-selectbox").removeClass("invalid-value");
    $(".review-form .jq-selectbox").addClass("valid-value");
  }
});


/* Library */

$(".tabs-library__item").click(function() {
  for (var i = 0; i < $(".tabs-library__item").length; i++) {
    $($(".tabs-library__item")[i]).removeClass("tabs-library__item--active");
    $($(".tabs-library__subitem")[i]).removeClass("tabs-library__subitem--active");
    $(this).addClass("tabs-library__item--active");
    var num = $(this).attr("class").charAt(39);
    $($(".tabs-library__subitem")[num - 1]).addClass("tabs-library__subitem--active");
  }

  for (var j = 0; j < $(".library-section").length; j++) {
    $($(".library-section")[j]).removeClass("library-section--active");
  }
  $(".library-section--" + num + "_1").addClass("library-section--active");

  if (num == 1) {
    for (var i = 0; i < $(".tabs-books__item").length; i++) {
      $($(".tabs-books__item")[i]).removeClass("tabs-books__item--active");
    }
    $($(".tabs-books__item")[0]).addClass("tabs-books__item--active");
  } else if (num == 2) {
    for (var i = 0; i < $(".tabs-articles__item").length; i++) {
      $($(".tabs-articles__item")[i]).removeClass("tabs-articles__item--active");
    }
    $($(".tabs-articles__item")[0]).addClass("tabs-articles__item--active");
  } else if (num == 3) {
    for (var i = 0; i < $(".tabs-story__item").length; i++) {
      $($(".tabs-story__item")[i]).removeClass("tabs-story__item--active");
    }
    $($(".tabs-story__item")[0]).addClass("tabs-story__item--active");
  } else if (num == 4) {
    for (var i = 0; i < $(".tabs-video__item").length; i++) {
      $($(".tabs-video__item")[i]).removeClass("tabs-video__item--active");
    }
    $($(".tabs-video__item")[0]).addClass("tabs-video__item--active");
  }
});

$(".tabs-books__item").click(function(e) {
  e.preventDefault();
  for (var i = 0; i < $(".tabs-books__item").length; i++) {
    $($(".tabs-books__item")[i]).removeClass("tabs-books__item--active");
    $($(".library-section--books")[i]).removeClass("library-section--active");
    $(this).addClass("tabs-books__item--active");
    var firstNum = $(this).attr("class").charAt(35);
    var secondNum = $(this).attr("class").charAt(36);
    if (secondNum == "") {
      var num = firstNum;
      $($(".library-section--books")[num - 1]).addClass("library-section--active");
    } else {
      var num = +(firstNum + secondNum);
      $($(".library-section--books")[num - 1]).addClass("library-section--active");
    }
  }
});

$(".tabs-articles__item").click(function(e) {
  e.preventDefault();
  for (var i = 0; i < $(".tabs-articles__item").length; i++) {
    $($(".tabs-articles__item")[i]).removeClass("tabs-articles__item--active");
    $($(".library-section--articles")[i]).removeClass("library-section--active");
    $(this).addClass("tabs-articles__item--active");
    var num = $(this).attr("class").charAt(41);
    $($(".library-section--articles")[num - 1]).addClass("library-section--active");
  }
});

$(".tabs-story__item").click(function(e) {
  e.preventDefault();
  for (var i = 0; i < $(".tabs-story__item").length; i++) {
    $($(".tabs-story__item")[i]).removeClass("tabs-story__item--active");
    $($(".library-section--story")[i]).removeClass("library-section--active");
    $(this).addClass("tabs-story__item--active");
    var num = $(this).attr("class").charAt(35);
    $($(".library-section--story")[num - 1]).addClass("library-section--active");
  }
});

$(".tabs-video__item").click(function(e) {
  e.preventDefault();
  for (var i = 0; i < $(".tabs-video__item").length; i++) {
    $($(".tabs-video__item")[i]).removeClass("tabs-video__item--active");
    $($(".library-section--video")[i]).removeClass("library-section--active");
    $(this).addClass("tabs-video__item--active");
    var num = $(this).attr("class").charAt(35);
    $($(".library-section--video")[num - 1]).addClass("library-section--active");
  }
});

$(".tabs-books__item").click(function(e) {
  e.preventDefault();
  if ($(".tabs-library__subitem--active").hasClass("tabs-library__subitem--open")) {
    $(".tabs-library__subitem--active").removeClass("tabs-library__subitem--open");
  } else {
    $(".tabs-library__subitem--active").addClass("tabs-library__subitem--open");
  }
});

$(".tabs-articles__item").click(function(e) {
  e.preventDefault();
  if ($(".tabs-library__subitem--active").hasClass("tabs-library__subitem--open")) {
    $(".tabs-library__subitem--active").removeClass("tabs-library__subitem--open");
  } else {
    $(".tabs-library__subitem--active").addClass("tabs-library__subitem--open");
  }
});

$(".tabs-story__item").click(function(e) {
  e.preventDefault();
  if ($(".tabs-library__subitem--active").hasClass("tabs-library__subitem--open")) {
    $(".tabs-library__subitem--active").removeClass("tabs-library__subitem--open");
  } else {
    $(".tabs-library__subitem--active").addClass("tabs-library__subitem--open");
  }
});

$(".tabs-video__item").click(function(e) {
  e.preventDefault();
  if ($(".tabs-library__subitem--active").hasClass("tabs-library__subitem--open")) {
    $(".tabs-library__subitem--active").removeClass("tabs-library__subitem--open");
  } else {
    $(".tabs-library__subitem--active").addClass("tabs-library__subitem--open");
  }
});

$(".articles-section__link--1_1").click(function(e) {
  e.preventDefault();
  $(".library-section--2_1 ul").hide();
  $(".library-section--2_1 .pagination").hide();
  $(".library-section article.articles-section__article--1_1").show();
});

$(".articles-list").click(function(e) {
  e.preventDefault();
  $(".library-section--2_1 ul").show();
  $(".library-section--2_1 .pagination").show();
  $(".library-section article.articles-section__article--1_1").hide();
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
  $("body").css("overflowY", "hidden");
});

$(".online-reader__close-button").click(function() {
  $(".popup--online-reader").removeClass("popup--active");
  $("body").css("overflowY", "scroll");
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
    if (backToTopButton) {
      window.addEventListener("scroll", function(event) {
        /*if ($(window).scrollTop() == 0) {
          backToTopButton.classList.remove("back-to-top--visible");
        } else {
          backToTopButton.classList.add("back-to-top--visible");
        }*/
        if ($(window).scrollTop() + $(window).height() >= $(document).height() - 1) {
          backToTopButton.classList.add("back-to-top--visible");
        } else {
          backToTopButton.classList.remove("back-to-top--visible");
        }
      });
    }
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
