  $(document).ready(function(){
	      //Configuration	
	      var slidePosition = 0;
	      var halfwindow    = Math.ceil($(window).width());
		  var slideWidth    = halfwindow * 0.5;
		  var sliderMargin  = halfwindow * 0.25;	
	      
	      //Call to Show the Slide as the document loaded
	      adjestImgs(); 
	   
	      //adjust the slide as the window is resized
	      $(window).resize(function(){adjestImgs();});
	      
	      //set the next btn action
	      var click_allowed = true;
	      $('.next').on('click',function(event){
	      	if(!click_allowed){return};
	      	event.preventDefault();
	      	animateSlideNext();
	      	click_allowed = false; 
	      	var wait = window.setTimeout(function(){
	      		click_allowed = true;
	      	},500);
	      });
	      
	      //set the back btn action
	      $('.back').on('click',function(event){
	      	if(!click_allowed){return};
	      	event.preventDefault();
	      	animateSlideBack();
	      	click_allowed = false; 
	      	var wait = window.setTimeout(function(){
	      		click_allowed = true;
	      	},500);
	      });
	       
	      //adjestImgs function definition
	      function adjestImgs(){	
	      	  halfwindow         = Math.ceil($(window).width());
	      	  slideWidth         = halfwindow*0.5;
	      	  sliderMargin       = halfwindow*0.25;	
	      	  var mainSlideWidth = slideWidth*4;
	      	  $('#mainSlide')  .css({marginLeft:sliderMargin/2+"px"});
	      	  $('#mainSlide')  .width(mainSlideWidth).css({left:sliderMargin+"px"});
	      	  $('.slide')      .width(slideWidth);
	      	  $('.textOver')   .css({width:sliderMargin+"px",left:sliderMargin/2+"px"});
	      	  $('.textSetting').css({width:sliderMargin-110+"px",left:"55px"});
	      	  $('.next')       .css({left:sliderMargin/2+sliderMargin-50+"px"});
	          $('.back')       .css({left:sliderMargin/2+sliderMargin+1+"px"});
	      }

	      //moveSlideForward function definition
	      function moveSlideForward(){
	 			var next = parseInt($('#mainSlide').css("left")) - slideWidth; 
				$('#mainSlide').animate({left:next+"px"},500);
		  }

		  //moveSlideBackward function definition		 
		  function moveSlideBackward(){
	 			var back = parseInt($('#mainSlide').css("left")) + slideWidth; 
			    $('#mainSlide').animate({left:back+"px"},500);
		  }	

	      //animateSlideNext function definition 
	      function animateSlideNext(){
		       	switch(slidePosition){
					case 0:
					    moveSlideForward()
						$('.fadeIntext01').animate({top:"100px",opacity:"0"},500);
						var wait = window.setTimeout(function(){
						$('.fadeIntext02').animate({top:"20px",opacity:"1"});
						},10);
					    slidePosition++;
					    break;
					case 1:
					 	moveSlideForward()
					    $('.fadeIntext02').animate({top:"100px",opacity:"0"},500);
						var wait = window.setTimeout(function(){
						$('.fadeIntext03').animate({top:"20px",opacity:"1"});
						},10);
					    slidePosition++;
					    break;   
					case 2:
					 	moveSlideForward()
					    $('.fadeIntext03').animate({top:"100px",opacity:"0"},500);
						var wait = window.setTimeout(function(){
						$('.fadeIntext04').animate({top:"20px",opacity:"1"});
						},10);
					    slidePosition++;
					    break;       
					case 3:
					 	$('#mainSlide').animate({left:sliderMargin},500);
					 	$('.fadeIntext04').animate({top:"100px",opacity:"0"},500);
						var wait = window.setTimeout(function(){
						$('.fadeIntext01').animate({top:"20px",opacity:"1"});
						},10);
					    slidePosition = 0;
					    break;  
				}
		  }	

	      //animateSlideBack function definition 
	      function animateSlideBack(){
	      	    switch(slidePosition){
					case 0:
	                    $('#mainSlide').animate({left:"-"+parseInt($('#mainSlide').css("left"))-slideWidth*2+"px"},500);
	                    $('.fadeIntext01').animate({top:"100px",opacity:"0"},500);
						var wait = window.setTimeout(function(){
						$('.fadeIntext04').animate({top:"20px",opacity:"1"});
						},10);
					    slidePosition = 3;
					    break;
					case 1:
					 	moveSlideBackward();
					    $('.fadeIntext02').animate({top:"100px",opacity:"0"},500);
						var wait = window.setTimeout(function(){
						$('.fadeIntext01').animate({top:"20px",opacity:"1"});
						},10);
					    slidePosition--;
					    break;   
					case 2:
					 	moveSlideBackward();
					    $('.fadeIntext03').animate({top:"100px",opacity:"0"},500);
						var wait = window.setTimeout(function(){
						$('.fadeIntext02').animate({top:"20px",opacity:"1"});
						},10);
					    slidePosition--;
					    break;       
					case 3:
					 	moveSlideBackward();
					 	$('.fadeIntext04').animate({top:"100px",opacity:"0"},500);
						var wait = window.setTimeout(function(){
						$('.fadeIntext03').animate({top:"20px",opacity:"1"});
						},10);
					    slidePosition--;
					    break;  
		     	}
		   }
	    });