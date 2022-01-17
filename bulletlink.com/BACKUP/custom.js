// BEGIN: remove menu sticky on SignUp form
window.addEventListener('DOMContentLoaded', (event) => {
if (window.screen.width > 1024) {
    if (window.location.href.indexOf("&pform=Buy_Newspaper_Template") != -1) {
        if (document.getElementsByClassName('Menu_Container')) {
            document.getElementsByClassName('Menu_Container')[0].style.position = "relative";
        }
    }
}
});
// END: remove menu sticky on SignUp form


// BEGIN: FAQ collapse articles
$(document).ready(function() {
    (function($) {
        $.fn.clickToggle = function(func1, func2) {
            var funcs = [func1, func2];
            this.data('toggleclicked', 0);
            this.click(function() {
                var data = $(this).data();
                var tc = data.toggleclicked;
                $.proxy(funcs[tc], this)();
                data.toggleclicked = (tc + 1) % 2;
            });
            return this;
        };
    }(jQuery));
    $('.faq_heading').each(function() {
        $(this).clickToggle(function() {
            $(this).next('.faq_body').slideDown(400);
            $(this).find('.faq_plus').css('display', 'none');
            $(this).find('.faq_minus').css('display', 'inline-block');
        }, function() {
            $(this).next('.faq_body').slideUp(200);
            $(this).find('.faq_plus').css('display', 'inline-block');
            $(this).find('.faq_minus').css('display', 'none');
        });
    });
});
// END: FAQ collapse articles

// BEGIN Slider Height for mobile

$(document).ready(function(){
if($(window).width() < 1025) {
$('.Slider_Holder').css('height',$('#Header').height());
}
$('.menuOpen').click(function(){
if($('.menuOpen.openc').length) {
$('.menuOpen').addClass('openm');
$('.menuOpen').removeClass('openc');
$('.links_m').slideDown(400);
}
else if($('.menuOpen.openm').length) {
$('.menuOpen').removeClass('openm');
$('.menuOpen').addClass('openc');
$('.links_m').slideUp(300);
}
});

});


// END: Slider Height for mobiles

/*
// BEGIN: View Templates

$(document).ready(function(){
$('.rightSide_Link > span').click(function(){
$("html, body").animate({ scrollTop: $('.Templates').offset().top }, 600);
});
});

// END: View Templates


// BEGIN: Fixed Form

$(document).scroll(function(){
if($(window).width()>768){
	var TEST = $('.ft2').offset().top-940;
	$('.ContactUsFormRelative').css({'top':TEST-237.15});
	if($(document).scrollTop()>225 && $(document).scrollTop()<TEST){
		$('.ContactUsForm1').addClass('ContactUsFormFixed');
	}
	else if($(document).scrollTop()<225 && $(document).scrollTop()<TEST){
		$('.ContactUsForm1').removeClass('ContactUsFormFixed');
	}
	if($(document).scrollTop()>TEST && $(document).scrollTop()>225) {
		$('.ContactUsForm1').addClass('ContactUsFormRelative');
		$('.ContactUsForm1').removeClass('ContactUsFormFixed');
	}
	else if($(document).scrollTop()<TEST && $(document).scrollTop()>225) {
		$('.ContactUsForm1').removeClass('ContactUsFormRelative');
		$('.ContactUsForm1').addClass('ContactUsFormFixed');
	}

}
});

// END: Fixed Form


// BEGIN: Menu scroll

$(document).scroll(function () {
	var footerPos = $('.ft2').offset().top - 500;
	if($(window).width()>768){
		if ($(document).scrollTop() > 60)
			$('.menu').addClass('menuScroll');
		else
			$('.menu').removeClass('menuScroll');
		if($(document).scrollTop() > footerPos)
			$('.menu').addClass('menuHidden');
		else if($(document).scrollTop() < footerPos){
			$('.menu').removeClass('menuHidden');
		}

  }
});

// END: Menu scroll



// BEGIN: Responsive Horizontal Menu style



$(function() {
    var firstCnt = 0,
        secondCnt = 0,
        thirdCnt = 0,
        fourthCnt = 0;
    $('.Menu_Sandwich1').toggle(function() {        
        $('.menu').css('display','block');
        $('.menu').animate({'left':'0%'}, '500');
        $('.Highlight8_part').css('opacity','0.4');
        $('.MainContent_part').css('opacity','0.4');
        $('.Menu_Sandwich1').addClass('move_sandwich2');     
        $('.ms1_bar').css('display', 'none');
        $('.ms1_close').fadeIn().css('display', 'inline-block');
		$('.bl_logo1_container').addClass('BlurFilter');
		$('.M_slider_container').addClass('BlurFilter');
		$('.Mbody_container').addClass('BlurFilter');
		$('.footer_container').addClass('BlurFilter');
		$('.menu').css('height', $(window).height()+30);
    }, function() {
        $('.menu').css('display','none');
        $('.menu').animate({'left':'-45%'}, '500');
        $('.Highlight8_part').css('opacity','1');   
        $('.MainContent_part').css('opacity','1');   
        $('.Menu_Sandwich1').removeClass('move_sandwich2');
        $('.ms1_close').css('display', 'none');
        $('.ms1_bar').fadeIn().css('display', 'inline-block');
		$('.bl_logo1_container').removeClass('BlurFilter');
		$('.M_slider_container').removeClass('BlurFilter');
		$('.Mbody_container').removeClass('BlurFilter');
		$('.footer_container').removeClass('BlurFilter');

    });
	
    $('.qmparent[href*="#"]').each(function() {
        $(this).toggle(function() {
            $(this).next('#qm0 >div').slideDown('1000');
            $(this).next('#qm0 >div').css('display', 'block');
            $(this).find('.plus').fadeOut(0).removeClass('addPlus');
            $(this).find('.minus').fadeIn().addClass('addMinus');
        }, function() {
            $(this).next('#qm0 >div').slideUp('1000');
            $(this).next('#qm0 >div').css('display', 'none');
            $(this).find('.minus').fadeOut(0).removeClass('addMinus');
            $(this).find('.plus').fadeIn().addClass('addPlus');

        });
    });

    $('.qmparent[href*="#"]').append('<span class=\'plus addPlus\'><i class=\'fa fa-angle-down\'></i></span>');
    $('.qmparent[href*="#"]').append('<span class=\'minus\'><i class=\'fa fa-angle-up\'></i></span>');
    $('.qmparent[href*="index"]').append('<span class=\'addPlus\'>+</span>');

    $('.qmparent[href*="index"]').each(function() {
        $(this).find('.addPlus').addClass('plusColor');
    });
    $("#qm0 > div * a").prepend("<span class='HarrowH'>➜</span>");
});

// END: Responsive Horizontal Menu style
*/

// BEGIN: Remove Contact Us form from "Features" page

$(document).ready(function(){
if (window.location.href.indexOf('online-newspaper-template-features') > - 1) {
$('.R_tum').remove();
$('.L_tum').css('width', '100%');
}
});

// END: Remove Contact Us form from "Features" page

// BEGIN: Remove Contact Us form from "TEMPLATES" page

$(document).ready(function(){
if (window.location.href.indexOf('index155.htm') > - 1) {
$('.R_tum').remove();
$('.L_tum').css('width', '100%');
}
});

// END: Remove Contact Us form from "TEMPLATES" page

// BEGIN: Remove Contact Us form from "Contact" page

$(document).ready(function(){
if (window.location.href.indexOf('https://bulletlink.com/index0.htm?twindow=Form&smenu=115&pform=ContactUs&minForm=Y&mad=No&sname=target_form2.asp&site=bulletlink.com') > - 1) {
$('.R_tum').remove();
$('.L_tum').css('width', '100%');
}
});

// END: Remove Contact Us form from "Contact" page


// BEGIN: Remove Contact Us form from "SIGNUP" page

$(document).ready(function(){
if (window.location.href.indexOf('https://bulletlink.com/index0.htm?twindow=Form&smenu=115&pform=Buy_Newspaper_Template&minForm=Y&mad=No&sname=target_form2.asp&site=bulletlink.com&pcc=Y&skey=&hn=bulletlink&he=.com&sc=1010') > - 1) {
$('.R_tum').remove();
$('.L_tum').css('width', '100%');
}
});

// END: Remove Contact Us form from "SIGNUP" page


// BEGIN: Script scroll top 

$(document).ready(function () {
var offset = 60;
var duration = 300;
$(window).scroll(function () {
if (jQuery(this).scrollTop() > offset) {
$('.Menu_Container').removeClass('MenuWhite');
$('.Menu_Container').addClass('MenuWhiteX');
} else {
$('.Menu_Container').addClass('MenuWhite');
$('.Menu_Container').removeClass('MenuWhiteX');
}
});
});

// END: Script scroll top

// BEGIN: Choose Template

$(document).ready(function(){
if($('#Choose_Template option:nth-child(1)').text() == "Choose Template"){  
$('#Choose_Template option:nth-child(1)').text("-- Choose Template --");
}
});

// END: Choose Template


// BEGIN: Homepage Template
$(document).ready(function(){
	$('.bl_see_more_t').each(function(){
		$(this).click(function(){
			$(this).parent('.main_contenir_PRV155').addClass('t_show_more');
		});
	});
});
// END: Homepage Template
