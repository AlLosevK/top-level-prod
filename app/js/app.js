$(document).ready(function() {

  setTimeout(function(){
     $("#popup-promo").addClass('active');
     document.body.style.overflow = 'hidden';
  },50000)

  $("#phone-form").keyup(function() {
    let phInp = $(this);
    let code = phInp.intlTelInput("getSelectedCountryData").dialCode;
    let phoneNumber = phInp.val();
    let fullPhone = '+' + code + ' ' + phoneNumber;
    let phInpHide = phInp.closest('form').find("#hiden-form");
    phInpHide.val(fullPhone);
    console.log(phInpHide);
  });

  $("#phone-quiz").keyup(function() {
    let phInp = $(this);
    let code = phInp.intlTelInput("getSelectedCountryData").dialCode;
    let phoneNumber = phInp.val();
    let fullPhone = '+' + code + ' ' + phoneNumber;
    phInp.closest('form').find("#hiden-quiz").val(fullPhone);
  });

  $("#phone-popup").keyup(function() {
    let phInp = $(this);
    let code = phInp.intlTelInput("getSelectedCountryData").dialCode;
    let phoneNumber = phInp.val();
    let fullPhone = '+' + code + ' ' + phoneNumber;
    phInp.closest('form').find("#hiden-popup").val(fullPhone);
  });

  /* INITIALIZE BOTH INPUTS WITH THE intlTelInput FEATURE*/

  $("#phone-form").intlTelInput({
    initialCountry: "auto",
    separateDialCode: true,
    autoPlaceholder: "aggressive",
    geoIpLookup: function (callback) {
        $.get('https://ipinfo.io', function () {}, "jsonp")
        .fail(function() {
          let countryCode = "US";
          callback(countryCode);
        })
        .always(function (resp) {
          var countryCode = (resp && resp.country) ? resp.country : "";
          callback(countryCode);
        });
    },
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.14/js/utils.js"
  });

  $("#phone-quiz").intlTelInput({
    initialCountry: "auto",
    separateDialCode: true,
    autoPlaceholder: "aggressive",
    geoIpLookup: function (callback) {
        $.get('https://ipinfo.io', function () {
        }, "jsonp").always(function (resp) {
            var countryCode = (resp && resp.country) ? resp.country : "";
            callback(countryCode);
        });
    },
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.14/js/utils.js"
  });

  $("#phone-popup").intlTelInput({
    initialCountry: "auto",
    separateDialCode: true,
    autoPlaceholder: "aggressive",
    geoIpLookup: function (callback) {
        $.get('https://ipinfo.io', function () {
        }, "jsonp").always(function (resp) {
            var countryCode = (resp && resp.country) ? resp.country : "";
            callback(countryCode);
        });
    },
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.14/js/utils.js"
  });


  $("#hiden-form").intlTelInput({
    initialCountry: "auto",
    dropdownContainer: 'body',
    geoIpLookup: function (callback) {
        $.get('https://ipinfo.io', function () {}, "jsonp")
        .fail(function() {
          var countryCode = "US";
          callback(countryCode);
        })
        .always(function (resp) {
          var countryCode = (resp && resp.country) ? resp.country : "";
          callback(countryCode);
        });
    },
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.14/js/utils.js"
  });

  $("#hiden-quiz").intlTelInput({
    initialCountry: "auto",
    dropdownContainer: 'body',
    geoIpLookup: function (callback) {
        $.get('https://ipinfo.io', function () {
        }, "jsonp").always(function (resp) {
            var countryCode = (resp && resp.country) ? resp.country : "";
            callback(countryCode);
        });
    },
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.14/js/utils.js"
  });

  $("#hiden-popup").intlTelInput({
    initialCountry: "auto",
    dropdownContainer: 'body',
    geoIpLookup: function (callback) {
        $.get('https://ipinfo.io', function () {
        }, "jsonp").always(function (resp) {
            var countryCode = (resp && resp.country) ? resp.country : "";
            callback(countryCode);
        });
    },
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.14/js/utils.js"
  });

  $('input.hide').parent().hide();



  /* ADD A MASK IN PHONE1 INPUT (when document ready and when changing flag) FOR A BETTER USER EXPERIENCE */

  let mask1 = $("#phone-form").attr('placeholder').replace(/[0-9]/g, 0);

  $(document).ready(function () {
    $('#phone-form').mask(mask1);
  });

  $("#phone-form").on("countrychange", function (e, countryData) {
    $("#phone-form").val('');
    let mask1 = $("#phone-form").attr('placeholder').replace(/[0-9]/g, 0);
    $('#phone-form').mask(mask1);
  });

  let mask2 = $("#phone-popup").attr('placeholder').replace(/[0-9]/g, 0);

  $(document).ready(function () {
    $('#phone-popup').mask(mask2);
  });

  $("#phone-popup").on("countrychange", function (e, countryData) {
    $("#phone-popup").val('');
    let mask2 = $("#phone-popup").attr('placeholder').replace(/[0-9]/g, 0);
    $('#phone-popup').mask(mask2);
  });

  let mask3 = $("#phone-quiz").attr('placeholder').replace(/[0-9]/g, 0);

  $(document).ready(function () {
    $('#phone-quiz').mask(mask3);
  });

  $("#phone-quiz").on("countrychange", function (e, countryData) {
    $("#phone-quiz").val('');
    let mask3 = $("#phone-quiz").attr('placeholder').replace(/[0-9]/g, 0);
    $('#phone-quiz').mask(mask3);
  });

  $('.quiz__next').prop('disabled', true);

  $('.banner__slider').slick({
		dots: false,
		arrows: false,
    fade: true,
		autoplay: true,
		autoplaySpeed: 2000,
    speed: 770,
    cssEase: 'linear'
	});

  $('.popup__promo-slider').slick({
		dots: false,
		arrows: false,
    fade: true,
		autoplay: true,
		autoplaySpeed: 2000,
    speed: 770,
    cssEase: 'linear'
	});


  //////////////////////////*********//////////////////////////

  //scroll to href
  $("a[href^='#']").on("click", function () {
    let href = $(this).attr("href");

    $("html, body").animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 670,   // по умолчанию «400»
        easing: "linear" // по умолчанию «swing»
    });

    return false;
  });


  //////////////////////////*********//////////////////////////


  //benefits acordeon
  $(function() {
  	$(".benefits__item-bg").on("mouseenter", function(e) {

  		e.preventDefault();
  		let $this = $(this).parent();
      $this.find('.benefits__content').fadeIn(400);
  	});

  	$(".benefits__item-bg").on("mouseleave", function(e) {
  		e.preventDefault();
  		let $this = $(this).parent();
      $('.benefits__content').fadeOut(200);

  	});
  });



  //faq acordeon
  $(function() {
    $(".faq__item-bg").on("mouseenter", function(e) {

      e.preventDefault();
      let $this = $(this).parent();
      $this.find('.faq__a').fadeIn(400);
    });

    $(".faq__item-bg").on("mouseleave", function(e) {
      e.preventDefault();
      let $this = $(this).parent();
      $('.faq__a').fadeOut(200);

    });
  });



  $(".quiz").on("change", function () {
    var isChecked = $(".quiz__form-item-active:last input:checked").length;
    var inpRadio = $(".quiz__form-item-active:last input[type='radio']").length;


    if (isChecked == 0 && inpRadio !== 0) {
      $('.quiz__next').prop('disabled', true)
    } else {
      $('.quiz__next').prop('disabled', false)
    };
  });

  $(".quiz").on("click", function () {
    var isChecked = $(".quiz__form-item-active:last input:checked").length;
    var inpRadio = $(".quiz__form-item-active:last input[type='radio']").length;
    var inpTel = $(".quiz__form-item-active:last input[type='tel']");
    var inpText = $(".quiz__form-item-active:last input[type='text']");
    var inpEmail = $(".quiz__form-item-active:last input[type='email']");


    if (isChecked == 0 && inpRadio !== 0 || inpTel.val() == '' && inpTel.length !== 0 || inpText.val() == '' && inpText.length !== 0 || inpEmail.val() == '' && inpEmail.length !== 0 || currActive === circles.length) {
      $('.quiz__next').prop('disabled', true)
    } else {
      $('.quiz__next').prop('disabled', false)
    };

  });

  $(".quiz input").on("keyup", function () {
    var inpTel = $(".quiz__form-item-active:last input[type='tel']");
    var inpText = $(".quiz__form-item-active:last input[type='text']");
    var inpEmail = $(".quiz__form-item-active:last input[type='email']");


    if (inpTel.val() == '' && inpTel.length !== 0 || inpText.val() == '' && inpText.length !== 0 || inpEmail.val() == '' && inpEmail.length !== 0 || currActive === circles.length) {
      $('.quiz__next').prop('disabled', true)
    } else {
      $('.quiz__next').prop('disabled', false)
    };

  });

  $(".quiz").on("submit", function () {
    gtag("event", "quiz_send", {});
  });


  //////////////////////////*********//////////////////////////



  $('input').on('input', function () {

    var form = $(this).closest('form');
    var name = form.find('input[type="text"]').val();
    var email = form.find('input[type="email"]').val();


    var phone = form.find('input[type="tel"]').val().length >= 5;


    var regEx = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    var validEmail = regEx.test(email);


    if(name && validEmail && phone)
        form.find('button').removeAttr('disabled');
     else
        form.find('button').attr('disabled', 'disabled');
  });


  //////////////////////////*********//////////////////////////


  // project popup
  $(function() {
  	$(".project__btn").on("click", function(e) {
  		e.preventDefault();
  		var $this = $(this).parent().parent();
  		if (!$this.hasClass("active")) {
  			$(this).removeClass("active");
  		}
  		$this.toggleClass("active");
      document.body.style.overflow = 'hidden';
  	});
  });


  // project popup close
  $(function() {
  	$(".popup__nav-close").on("click", function(e) {
  		e.preventDefault();
  		var $this = $(this).parent().parent().parent().parent();
  		if (!$this.hasClass("active")) {
  			$(this).removeClass("active");
  		}
  		$this.toggleClass("active");
      document.body.style.overflow = 'visible';
  	});
  });

  $(function() {
  	$(".project-popup__bg").on("click", function(e) {
  		e.preventDefault();
  		var $this = $(this).parent().parent();
  		if (!$this.hasClass("active")) {
  			$(this).removeClass("active");
  		}
  		$this.toggleClass("active");
      document.body.style.overflow = 'visible';
  	});
  });

  $(function() {
  	$(".popup__promo-btn").on("click", function(e) {
  		e.preventDefault();
  		var $this = $(this).parent().parent().parent();
  		if (!$this.hasClass("active")) {
  			$(this).removeClass("active");
  		}
  		$this.toggleClass("active");
      document.body.style.overflow = 'visible';
  	});
  });


  // header popup
  $(function() {
  	$(".header-mob__menu").on("click", function(e) {
  		e.preventDefault();
  		var $this = $(this).parent().parent();
  		if (!$this.hasClass("active")) {
  			$(this).removeClass("active");
  		}
  		$this.toggleClass("active");
      document.body.style.overflow = 'hidden';
  	});
  });

  // header popup close
  $(function() {
  	$(".header-mob__abs-nav-close").on("click", function(e) {
  		e.preventDefault();
  		var $this = $(".header-mob");
  		if (!$this.hasClass("active")) {
  			$(this).removeClass("active");
  		}
  		$this.toggleClass("active");
      document.body.style.overflow = 'visible';
  	});
  });

  $(function() {
  	$(".header-mob__abs-item a").on("click", function(e) {
  		e.preventDefault();
  		var $this = $(".header-mob");
  		if (!$this.hasClass("active")) {
  			$(this).removeClass("active");
  		}
  		$this.toggleClass("active");
      document.body.style.overflow = 'visible';
  	});
  });


  // promo popup close
  $(function() {
  	$(".popup__nav-close").on("click", function(e) {
  		e.preventDefault();
  		var $this = $(".popup-promo");
  		$this.fadeOut();
      document.body.style.overflow = 'visible';
  	});
  });

  $(function() {
  	$(".project-popup__bg").on("click", function(e) {
  		e.preventDefault();
  		var $this = $(".popup-promo");
  		$this.fadeOut();
      document.body.style.overflow = 'visible';
  	});
  });

//////////////////////////*********//////////////////////////


  $(window).scroll(function() {
     if( $(document).scrollTop() > $(".banner").outerHeight()) {
        $(".header").addClass('active');
     } else {
       $(".header").removeClass('active');
     }
  });


//////////////////////////*********//////////////////////////

  const progress = document.querySelector("#progress");
  const prev = document.querySelector("#prev");
  const next = document.querySelector("#next");
  const circles = document.querySelectorAll(".circle");
  const qItems = document.querySelectorAll(".quiz__form-item");
  const qItemActive = document.querySelectorAll(".quiz__form-item-active");
  const quizBtn = $(".quiz__nav button#next");
  const quizSbmt = $(".quiz__nav button#submit-quiz");
  const isChecked = $(".quiz__form-item-active:last input:checked").length;
  const inpRadio = $(".quiz__form-item-active:last input[type='radio']").length;

  const update = () => {
      circles.forEach((circle, i) => {
          i < currActive
              ? circle.classList.add("active")
              : circle.classList.remove("active");
      });

      if (currActive === 1) {
          prev.disabled = true;
      } else if (currActive === 6) {
        quizBtn.hide();
        quizSbmt.show();
      } else if (currActive < 6) {
        quizBtn.show();
        quizSbmt.hide();
      } else if (currActive === circles.length) {
        next.disabled = true;
      } else {
          prev.disabled = false;
          next.disabled = false;
      }
  };

  const updateSlide = () => {
      qItems.forEach((qItem, i) => {
          i < currActive
              ? qItem.classList.add("quiz__form-item-active")
              : qItem.classList.remove("quiz__form-item-active");
      });

      $(".quiz__form-item").css({display: 'none'});
      $(".quiz__form-item-active:last").css({display: 'block'});
  };

  let currActive = 1;

  next.addEventListener("click", () => {
      currActive++;

      if (currActive > circles.length) {
          currActive = circles.length;
      }
      update();
      updateSlide();
  });

  prev.addEventListener("click", () => {
      currActive--;

      if (currActive < 1) {
          currActive = 1;
      }
      update();
      updateSlide();
  });


//////////////////////////*********//////////////////////////


  var countDownDate = new Date().getTime() + 244800000;

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    // var distance = countDownDate - now;
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    // document.querySelectorAll("#timer").innerHTML = hours + ":" + minutes + ":" + seconds;

    for (var i = 0; i < document.querySelectorAll("#timer").length; i++) {
      document.querySelectorAll("#timer")[i].innerHTML = days + "д " + hours + "ч " + minutes + "м ";
    }

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "EXPIRED";
    }
  }, 1000);
});





//////////////////////////*********//////////////////////////







$(window).scroll(function() {
  var theta = ($(window).scrollTop() - 2500) / 3;
  $('.projects__bg').css({ transform: 'translateX(' + theta + 'px)' });
});
