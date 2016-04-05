$(function(){
	    $('#wrap').css({display:"none"});	
	    $('#loader-bg').animate({width:"100%"},900);
	    });

		$(window).load(function () { 
		  $('#loader-bg').delay(100).animate({height:"100%"},900).fadeOut(500)
		  var show = window.setTimeout(function(){$('#wrap').fadeIn()},1700);
		});