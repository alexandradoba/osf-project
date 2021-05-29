$(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

 document.getElementById("year").innerHTML = new Date().getFullYear();

var i = 0;
 function buttonClick(abc) {
    if (abc.className.includes("heart-inactive")) {
        document.getElementById('inc').value = ++i;
        abc.classList.add("heart-active");
        abc.classList.remove("heart-inactive");
      } else {
        document.getElementById('inc').value = --i;
        abc.classList.add("heart-inactive");
        abc.classList.remove("heart-active");
      }
     
 }

 function hideFilters() {
    if(document.getElementById("hideToggle").innerHTML == "Hide filter"){
      $("#filter").hide();
      document.getElementById("hideToggle").innerHTML = "Show filter";
    } else {
      $("#filter").show();
      document.getElementById("hideToggle").innerHTML = "Hide filter";
    }
  
 }

 $(document).ready(function() {
  if (localStorage.getItem("cartItems") === null) {
    window.localStorage.setItem('cartItems', 0);
  }
  document.getElementById('cart-number').value = window.localStorage.getItem('cartItems');
});


 function cartClick(abc) {
    var x = 0;
    x = 1 + Number(window.localStorage.getItem('cartItems'));
    window.localStorage.setItem('cartItems', x);
    document.getElementById('cart-number').value = window.localStorage.getItem('cartItems');
 }

 function cartClickProduct(abc) {
  var x = 0;
  x = Number(document.getElementById('quantity').value) + Number(window.localStorage.getItem('cartItems'));
  window.localStorage.setItem('cartItems', x);
  document.getElementById('cart-number').value = window.localStorage.getItem('cartItems'); 
}


function loadMore() {
     $.ajax({
         url : 'http://localhost/index.json',
         type : 'GET',
         dataType : 'text',

        success : function(data, textStatus, jqXHR) {        
             var json= JSON.parse(jqXHR.responseText);
             document.getElementById("load-more-btn").disabled = true;
				$(json).each(function(index,item) {
                if(this.sold == 0){
                  $('#new-products').append(
                    '<div class="col-sm-3 product"><div class="row container-img"><div class="col-sm-12 px-0"><img src="' + this.img_url 
                    + '"alt="product1" class="img-product"><div class="middle"><div class="button-background"><button onclick="buttonClick(this) " class="button-product inactive fas fa-heart"></button></div><div class="button-background"><button onclick="cartClick(this) " class="button-cart fas fa-plus"></button></div></div></div></div><div class="row text-product"><p>' + this.product_title
                    + '</p></div><div class="row price-product"><p>' + this.product_price 
                    + '</p></div></div>')
                   
                } else {
                  $('#new-products').append(
                    '<div class="col-sm-3 sold-product"> <div class="row row-sold-product"> <div class="col-sm-12 px-0 sold"> <img src="' + this.img_url 
                    + '" alt="product8" class="img-sold"> </div> <div class="img-overlay"> <div class="text-sold"><p>' + this.product_title
                    + '</p> </div>  <div class="row"> <div class="emoticon"> <img src="assets/img/emoticon.png" alt="emoticon"> </div> <div class="emoticon-text"> <p>' + this.product_price 
                    + '</p> </div> </div> </div> </div> </div>')

                }
              }); 
                                                      
                },
                    
                    error : function(data) {
                            var posts = JSON.parse(data);
            }
         
    });


}



function loadMoreLandingPage() {
  $.ajax({
      url : 'http://localhost/landingpage.json',
      type : 'GET',
      dataType : 'text',

     success : function(data, textStatus, jqXHR) {        
          var json= JSON.parse(jqXHR.responseText);
          document.getElementById("load-more-btn").disabled = true;
     $(json).each(function(index,item) {
             if(this.img_url == ""){
               this.img_url = "assets/img/noimg.jpg"
             }

               $('#new-products').append(
                 '<div class="col-sm-3 product"><div class="row container-img"><div class="col-sm-12 px-0"><img src="' + this.img_url 
                 + '"alt="product1" class="img-product"><div class="middle"><div class="button-background"><button onclick="buttonClick(this) " class="button-product inactive fas fa-heart"></button></div><div class="button-background"><button onclick="cartClick(this) " class="button-cart fas fa-plus"></button></div></div></div></div><div class="row text-product"><p>' + this.product_title
                 + '</p></div><div class="row price-product"><p>' + this.product_price 
                 + '</p></div></div>')
           }); 
                                                   
             },
                 
                 error : function(data) {
                         var posts = JSON.parse(data);
         }
      
 });


}


$('.thumbnail').on('click', function() {
  var clicked = $(this);
  var newSelection = clicked.data('big');
  var $img = $('.primary').css("background-image","url(" + newSelection + ")");
  clicked.parent().find('.thumbnail').removeClass('selected');
  clicked.addClass('selected');
  $('.primary').empty().append($img.hide().fadeIn('slow'));
});

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}



$(document).ready(function() { 

  setTimeout(function(){
      var cookie = false;
      var cookieContent = $('.cookie-disclaimer');
      checkCookie()

      if (cookie === true) {
        cookieContent.hide();
      } else {
        cookieContent.show();
      }

      function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        console.log(cname + "=" + cvalue + "; " + expires);
        document.cookie = cname + "=" + cvalue + "; " + expires;
      }

      function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i].trim();
          if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
        }
        return "";
      }

      function checkCookie() {
        var check = getCookie("OSFcookie");
        if (check !== "") {
          return cookie = true;
        } else {
            return cookie = false;
        }
        
      }
      $('.accept-cookie').click(function () {
        setCookie("OSFcookie", "accepted", 365);
        cookieContent.hide(500);
      });
  }, 10000);
});




// Sticky navbar
// =========================
$(document).ready(function () {
  // Custom function which toggles between sticky class (is-sticky)
  var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
      var stickyHeight = sticky.outerHeight();
      var stickyTop = stickyWrapper.offset().top;
      if (scrollElement.scrollTop() >= stickyTop) {
          stickyWrapper.height(stickyHeight);
          sticky.addClass("is-sticky");
      }
      else {
          sticky.removeClass("is-sticky");
          stickyWrapper.height('auto');
      }
  };

  // Find all data-toggle="sticky-onscroll" elements
  $('[data-toggle="sticky-onscroll"]').each(function () {
      var sticky = $(this);
      var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
      sticky.before(stickyWrapper);
      sticky.addClass('sticky');

      // Scroll & resize events
      $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
          stickyToggle(sticky, stickyWrapper, $(this));
      });

      // On page load
      stickyToggle(sticky, stickyWrapper, $(window));
  });
});


$(document).ready(function(){
  var maxLength = 100;
  $(".show-read-more").each(function(){
      var myStr = $(this).text();
      if($.trim(myStr).length > maxLength){
          var newStr = myStr.substring(0, maxLength);
          var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
          $(this).empty().html(newStr);
          $(this).append('<br> <a href="javascript:void(0);" class="read-more">Read more</a>');
          $(this).append('<span class="more-text">' + removedStr + '</span>');
      }
  });
  $(".read-more").click(function(){
      $(this).siblings(".more-text").contents().unwrap();
      $(this).remove();
  });
});



var mybutton = document.getElementById("myBtn");
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}