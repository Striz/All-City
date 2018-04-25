//Slide show
$(function() {
   setInterval(function() {
     $(".slideshow ul li:first-child").animate({
       "margin-left": -400
     }, 1100, function() {
       $(this).css("margin-left", 0).appendTo(".slideshow ul");
     });
   }, 4000);
 });


// Sticky Header
$(document).ready(function() {
  $(".navmenu").wrap('<div class="placenavbar"></div>');
  $(".placenavbar").height($(".navmenu").outerHeight());
  $(".navmenu").wrapInner('<div class="navbar-inner"></div>');

  $(window).scroll(function() { 

    if ($(window).scrollTop() > 170) {
        $('.navmenu').addClass('fixed');
    } else {
        $('.navmenu').removeClass('fixed');
    }
});
});  

//Product count and display
var itemCount = 0;
var priceTotal = 0;



// Add Item to Cart
$('.add').click(function (){
  itemCount ++;
  $('#emptyCart').html('<small>Empty Cart</small>').css('display', 'block');
  $('#itemCount').html(itemCount).css('display', 'block');
  $(this).siblings().clone().appendTo('#cartItems').append('<button class="removeItem" style="border-radius:5px;padding:5px;font-weight:bold;line-height:1em;">Remove Item</button>');

  // Calculate Total Price
  var price = parseInt($(this).siblings().find('.price').html()); 
  priceTotal += price;
  $('#cartTotal').html("Total: €" + priceTotal);
}); 



// Hide and Show Cart Items
$('.openCloseCart').click(function(){
  $('#shoppingCart').toggle();
});


// Empty Cart
$('#emptyCart').click(function() {
  itemCount = 0;
  priceTotal = 0;
  $('#emptyCart').html('').css('display', 'none');
  $('#itemCount').html('').css('display', 'none');
  $('#cartItems').html('');
  $('#cartTotal').html("Total: €" + priceTotal);
}); 



// Remove Item from Cart
$('#shoppingCart').on('click', '.removeItem', function(){
  $(this).parent().remove();  
  itemCount --;
  $('#itemCount').html(itemCount);

  // Remove Cost of Deleted Item from Total Price
  var price = parseInt($(this).siblings().find('.price').html());
  priceTotal -= price;
  $('#cartTotal').html("Total: €" + priceTotal);

  if (itemCount === 0) {
    $('#itemCount').html('').css('display', 'none');
  }
});

$('.info').click(function(){
  $(this).siblings('.infoBlock').slideToggle();
  $(this).parent().siblings().children().find('.infoBlock').slideUp();
});


$(document).ready(function() {
    $('.closeButton').on('click', function(e) { 
        $(this).parent('.infoBlock').fadeOut(800); 
    });
});


//Products navigation 
$(document).ready(function() {
    $(".tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});

//Hamburger menu
$('.hamburger').on('click', function(){
  if ($('.menu').hasClass('open')){
       $('.menu').removeClass('open');
  }else{
        $('.menu').addClass('open');
  }
});
// Navbar active
$(function() {
   $("li").click(function() {
      // remove classes from all
      $("li").removeClass("active");
      // add class to the one we clicked
      $(this).addClass("active");
   });
});

