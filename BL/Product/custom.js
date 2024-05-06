
// BEGIN: Product 

function PutGroup1(){document.write('<div id="group1" name="group1" class="group1"><script type="text/javascript" language="JavaScript">LoadDoc("{{PutHName}}/product-group1.htm", "group1", "");<\/script></div>');}

function PutGroup2(){document.write('<div id="group2" name="group2" class="group2"><script type="text/javascript" language="JavaScript">LoadDoc("{{PutHName}}/product-group2.htm", "group2", "");<\/script></div>');}

function OpenShopping(pageUrl, window_type, fwidth, fheight){
$.magnificPopup.open({
items: [
{
src: pageUrl, // can be a HTML string, jQuery object, or CSS selector
type: window_type
}
],   
gallery: { enabled: true },
modal: true,
iframe: {markup: '<div class="product1-popup">'+'<div class="mfp-iframe-scaler" >'+'<div class="mfp-close"></div>'+'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+'</div></div>'}
});
}

$(document).ready(function(){

// Set full width to product page
if(window.location.href.indexOf("/product-") != -1 && $('.product1-container').length){
$('.mainbody').addClass('mainbodyx');
document.title = $('.product1-label').text();
}

// Sales Tax value
createCookie('salestax',$('.product1-salestax').text());

// Remove blank Categories
$('.product1-category').each(function(){
if($(this).children('span').css('display') == 'none')  {
$(this).css('display','none');
}
});
// If Sale price not set
$('.product1-price').each(function(){
var rv = $(this).children('.product1-regular-price').attr('name');
if($(this).children('.product1-sale-price').attr('name') == '0'){
$(this).children('.product1-sale-price').attr('name', rv);
}
});
$('.product1-sale-price').each(function(){
$(this).children('.product1-sale').text($(this).attr('name'));
});
$('.pc-cart').each(function(){
if($(this).attr('value') == '0') {
$(this).attr('value', $(this).attr('data-name'));
}
});
// Calculate Percentages
$('.product1-price').each(function(){
var d = 100 - (($(this).children('.product1-sale-price').attr('name') * 100) / $(this).children('.product1-regular-price').attr('name'));
$(this).children('.product1-discount').children('span').text(parseInt(d)); 
});
// Remove Regular Price if its same as Sales
$('.product1-regular-price').each(function(){
$(this).attr('data', $(this).siblings('.product1-sale-price').attr('name'));
if($(this).attr('name') == $(this).attr('data')) {
$(this).css('display','none');
}
});
// Remove Percentages if its 0%
$('.product1-discount').each(function(){
if($(this).children('span').text() == '0') {
$(this).css('display','none');
}
});
// Add coma in Amount
$('.product1-sale, .product1-reg s').each(function(){
$(this).text(parseFloat($(this).text()).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
});
$('.pc-cart').each(function(){
$(this).attr('value',(parseFloat($(this).attr('value')).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")));
});
$('.pc-cart').each(function(){
$(this).attr('data-name',(parseFloat($(this).attr('data-name')).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")));
});
// Click on Add to Cart button
$('.product1-cart').each(function(){
$(this).children('.pc-cart').click(function(){
$(this).addClass('cart-added');
$(this).addClass('cart-addedx');
});
});

// Cart process
//$(".product-cart-items").slideUp();
$(".product1-cart-count").on("click", function () {
if($("#total-price span").text() == "0.00" || $("#total-price span").text() == "0") {
$(".product1-empty").slideToggle();
} else {
$(".product-cart-items").slideToggle();
}
});
setInterval(function(){
if($('.product-cart-items').css('display') != 'none' || $('.product1-empty').css('display') != 'none') {
$(".product1-cart-count").addClass('cartx-open');
}
if($('.product-cart-items').css('display') == 'none' || $('.product1-empty').css('display') == 'none') {
$(".product1-cart-count").removeClass('cartx-open');
}
},10);

$(".product-checkout-link a").on("click", function () {
$(".product-cart-items").slideToggle();
});
$('.product1-continue').on("click", function () {
$(".product1-empty").slideToggle();
$('.pc-cart').removeClass('cart-added cart-addedx');
});
$('.mainbody').click(function(){
$(".product-cartx").click(function(){
$('.product-cartx').data('clicked', true);
});

// Close cart when click on site area
if($('.product-cartx').data('clicked')) {
$('.product-cartx').data('clicked', false);
} 
else {
$('.product1-cart-count.cartx-open').removeClass('cartx-open');
if($('.product-cart-items').css('display') != 'none')
{$(".product-cart-items").slideUp();}
if($('.product1-empty').css('display') != 'none')
{$(".product1-empty").slideUp();}
}
});

// Cart Numbers
var c = $('.productx-currency').text();
$(".pc-count").text("(" + ($("#list-item").children().length) + ")");

// Add items to cart
$(".pc-cart").on("click", function () {
/*$(".product-cart-items").slideDown();
setTimeout(function(){$(".product-cart-items").slideUp();}, 2000); */
$(this).each(function () {
var name = $(this).children('p').text();
var remove = "<button title='Remove from Cart' class='product1-remove'><img src='/images/trash2.png'></button>";
var weight = "<div class='productx-weight' style='display:none'>" + $(this).siblings('.product1-weight').text()  + "</div>";
var cena = "<span class='eachPrice productx-price'>" + $(this).attr("value") + "</span>";
var pic = "<span class='hidden-pimg'>" + $(this).attr('data') + "</span><div class='productx-img'><img src='" + $(this).attr('data') + "'></div>";
$("#list-item").append("<li>" + pic + "<div class='productx-name'>" + name + "</div>" + c + cena + remove + weight + "</li>");

//number of items in cart
$(".pc-count").text("(" + ($("#list-item").children().length) + ")");
$(".pc-count").text();

// cookies
createCookie('cart', $("#list-item").children().length);
setTimeout(function(){
var n = readCookie('cart');
for(var x = 1; x <= n; x++) {
createCookie('item' + x,$('#list-item li:nth-child(' + x + ') .productx-name').text());
createCookie('value' + x,$('#list-item li:nth-child(' + x + ') .productx-price').text());
createCookie('pic' + x,$('#list-item li:nth-child(' + x + ') .hidden-pimg').text());
createCookie('weight' + x,$('#list-item li:nth-child(' + x + ') .productx-weight').text());
createCookie('currency',$('.productx-currency').text());
}
createCookie('total', $('#total-price span').text());
}, 500);
  
//calculate total price
var totalPrice = 0;
$(".eachPrice").each(function (){ 
var cenaEach = parseFloat($(this).text().replace(/[^\d\.\-]/g, ""));
totalPrice+=cenaEach;
});
$("#total-price span").text(parseFloat(totalPrice).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
});

// Name Process
var nameb = $('.product-cart-items .productx-name').map(function(){ 
return $(this).text(); 
}).get().join(', ');
$('.pc-cart b').text(nameb);
$('.pc-cart').each(function(){
if($(this).children('b').text().indexOf($(this).children('p').text()) >= 0) {
$(this).addClass('cart-added');
}
});
createCookie('nameb',nameb);

// Notification
setTimeout(function(){$('.cart-addedx').siblings(".productx-notification").addClass('pxn-up');}, 100);
setTimeout(function(){$('.cart-addedx').siblings(".productx-notification").addClass('pxn-down');}, 1500);
setTimeout(function(){
$('.cart-addedx').siblings(".productx-notification").removeClass('pxn-up');
$('.cart-addedx').siblings(".productx-notification").removeClass('pxn-down');
$('.cart-added').removeClass('cart-addedx');
}, 1600);

//remove items from basket
$(".product1-remove").click(function () {
$(this).parent().remove();
var totalPrice = 0;
$(".eachPrice").each(function (){ 
var cenaEach = parseFloat($(this).text().replace(/[^\d\.\-]/g, ""));
totalPrice+=cenaEach;
});
$("#total-price span").text(parseFloat(totalPrice).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
$(".pc-count").text("(" + ($("#list-item").children().length) + ")");
if($("#total-price span").text() != "0.00" || $("#total-price span").text() != "0") {
$(".product1-empty").css('display','none');
$(".product-cart-items").css('display','block');
} else if($("#total-price span").text() == "0.00" || $("#total-price span").text() == "0") {
$(".product1-empty").css('display','block');
$(".product-cart-items").css('display','none');
}
// cookies
createCookie('cart', $("#list-item").children().length);
var r = parseInt(readCookie('cart')) + 1;
eraseCookie('item' + r);
eraseCookie('value' + r);
eraseCookie('pic' + r);
eraseCookie('weight' + r);
createCookie('total', $('#total-price span').text());
// zero cart
if($("#total-price span").text() == "0.00" || $("#total-price span").text() == "0") {
$('.pc-cart').removeClass('cart-added cart-addedx');
$('.product-cart-items').css('display','none'); 
$('.product1-empty').css('display','block');
}
var nameb = $('.product-cart-items .productx-name').map(function(){ 
return $(this).text(); 
}).get().join(', ');
$('.pc-cart b').text(nameb);
createCookie('nameb',nameb);
$('.pc-cart').each(function(){
if($(this).children('b').text().indexOf($(this).children('p').text()) >= 0) {
$(this).addClass('cart-added');
}
else {$(this).removeClass('cart-added cart-addedx');}
});
});
if($("#total-price span").text() != "0" || $("#total-price span").text() != "0.00") {
$(".product1-empty").css('display','none');
}
if($("#total-price span").text() == "0.00" || $("#total-price span").text() == "0") {
$(".product-cart-items").css('display','none');
}
});

// Load cookie cart
if(readCookie('cart') != null) {
var l = readCookie('cart');
$(".pc-count").text("(" + l + ")");
for(var y = 1; y <= l; y++) {
var i = readCookie('item' + y);
var v = readCookie('value' + y);
var p = readCookie('pic' + y);
var w = readCookie('weight' + y);
var cc = readCookie('currency');
$("#list-item").append("<li><span class='hidden-pimg'>" + p + "</span><div class='productx-img'><img src='" + p + "'></div><div class='productx-name'>" + i + "</div>" + cc + "<span class='eachPrice productx-price'>" + v + "</span><button title='Remove from Cart' class='product1-remove'><img src='/images/trash2.png'></button><div class='productx-weight' style='display:none'>" + w + "</div></li>");
}
var totalPrice = 0;
$(".eachPrice").each(function (){ 
var cenaEach = parseFloat($(this).text().replace(/[^\d\.\-]/g, ""));
totalPrice+=cenaEach;
});
$("#total-price span").text(parseFloat(totalPrice).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
var nameb = $('.product-cart-items .productx-name').map(function(){ 
return $(this).text(); 
}).get().join(', ');
$('.pc-cart b').text(nameb);
$('.pc-cart').each(function(){
if($(this).children('b').text().indexOf($(this).children('p').text()) >= 0) {
$(this).addClass('cart-added');
}
});
}
// Remove 2
$(".product1-remove").click(function () {
$(this).parent().remove();
var totalPrice = 0;
$(".eachPrice").each(function (){ 
var cenaEach = parseFloat($(this).text().replace(/[^\d\.\-]/g, ""));
totalPrice+=cenaEach;
});
$("#total-price span").text(parseFloat(totalPrice).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
$(".pc-count").text("(" + ($("#list-item").children().length) + ")");
if($("#total-price span").text() != "0") {
$(".product1-empty").css('display','none');
$(".product-cart-items").css('display','block');
} else if($("#total-price span").text() == "0") {
$(".product1-empty").css('display','block');
$(".product-cart-items").css('display','none');
}
// cookies
createCookie('cart', $("#list-item").children().length);
var r = parseInt(readCookie('cart')) + 1;
eraseCookie('item' + r);
eraseCookie('value' + r);
eraseCookie('pic' + r);
eraseCookie('weight' + r);
createCookie('total', $('#total-price span').text());
// zero cart
if($("#total-price span").text() == "0.00" || $("#total-price span").text() == "0") {
$('.pc-cart').removeClass('cart-added cart-addedx');
$('.product-cart-items').css('display','none'); 
$('.product1-empty').css('display','block');
}
var nameb = $('.product-cart-items .productx-name').map(function(){ 
return $(this).text(); 
}).get().join(', ');
$('.pc-cart b').text(nameb);
createCookie('nameb',nameb);
$('.pc-cart').each(function(){
if($(this).children('b').text().indexOf($(this).children('p').text()) >= 0) {
$(this).addClass('cart-added');
}
else {$(this).removeClass('cart-added cart-addedx');}
});
});

// Add to Cart Scrolls to Top
/*if($('.product1-container').length){
var offset = $('.product1-container').offset().top;
var duration = 300;
$('.pc-cart').click(function (event) {
event.preventDefault();
jQuery('html, body').animate({scrollTop: offset}, duration);
return false;
});
} */

// Payment
if(readCookie('orderx-payment') == "PayPal" && window.location.href.indexOf("PAYMENT3_PayPalStandard") != -1){
$('#CustomForm').css('visibility','hidden');
$('#CustomForm').prepend('<input type="HIDDEN" id="item_name" name="item_name" value="' + readCookie("orderx-textarea") + '"><input type="HIDDEN" id="amount" name="amount" value="' + readCookie("orderx-amount") + '">');
var y = setInterval(function () {
if($('#token').val() != '') {
$('.button').click();
clearTimeout(y);
}
}, 500);
}
if(readCookie('orderx-payment') == "Credit Card" && window.location.href.indexOf("PAYMENT1_CreditCard_Online") != -1){
$('#x_description').attr('value', readCookie("orderx-textarea"));
$('#CustomForm').addClass('productx-credit-cart-form');
$('#blbodymain').addClass('blbodymainx');
$('.formdivider.formdivider_custom').wrap("<div class='productx-formdivider2' />");
$('.button').text('Pay Now');
}
// Reload browser while clicking on close icon
$('.product-checkout-link, .pc-go-to-cart').click(function(){
$('.product1-popup .mfp-close').click(function(){
location.reload(); 
});
});
});

// END: Product
