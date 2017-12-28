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
    if ($(window).scrollTop() == 0) {
      backToTopButton.classList.remove("back-to-top--visible");
    } else {
      backToTopButton.classList.add("back-to-top--visible");
    }
  });

}());


/* jQuery Form Styler activation */

(function($) {
$(function() {

  $('select').styler();
    
});
})(jQuery);


/* Foods - advanced search - slider range (jQuery UI) */

/*$( function() {
    $( ".advanced-search__price-range" ).slider({
      range: true,
      min: 100,
      max: 9999,
      values: [ 100, 5000 ],
      slide: function( event, ui ) {
        $( "#advanced-search__min-price" ).val( ui.values[ 0 ] );
        $( "#advanced-search__max-price" ).val( ui.values[ 1 ] );
      }
    });
    $( "#advanced-search__min-price" ).val( $( ".advanced-search__price-range" ).slider( "values", 0 ) );
    $( "#advanced-search__max-price" ).val( $( ".advanced-search__price-range" ).slider( "values", 1 ) );
  } );*/



