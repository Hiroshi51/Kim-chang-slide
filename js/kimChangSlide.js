  $(document).ready(function(){
	      //Configuration	
	      var slidePosition = 0;
	      var halfwindow    = 0;
		  var slideWidth    = 0;
		  var sliderMargin  = 0;	
	      var slideHeight   = 0;

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

	   
	      //adjust the slide as the window is resized
	      $(window).resize(function(){adjestImgs();});
	      
	      //adjestImgs function definition
	      function adjestImgs(){	
	      	  halfwindow         = window.innerWidth;
	          console.log(halfwindow);

	      	  if(halfwindow > 600){
		      	  slideWidth         = halfwindow*0.5;
		      	  sliderMargin       = halfwindow*0.25;	
		      	  var mainSlideWidth = slideWidth*4;
		     
		      	  $('#mainSlide')  .width(mainSlideWidth).css({left:sliderMargin*1.5-slidePosition*slideWidth+"px"});
		      	  $('.slide')      .width(slideWidth);
		      	  $('.slideImg')   .css({width:slideWidth+"px"});       
		      	  $('.textOver')   .css({width:sliderMargin+"px",left:sliderMargin/2+"px"});
		      	  $('.textSetting').css({width:sliderMargin-110+"px",left:"55px"});
		      	  $('.next')       .css({top:"100px",left:sliderMargin/2+sliderMargin-50+"px"});
		          $('.back')       .css({top:"100px",left:sliderMargin/2+sliderMargin+1+"px"});
		         
	          }
	          else{
	          	 
                  slideWidth         = halfwindow*0.8;
		      	  $('.slide')      .css({width:slideWidth+"px"});
		      	  $('.slideImg')   .css({width:slideWidth+"px"});                  
		      	  sliderMargin       = halfwindow*0.1;	
		      	  var mainSlideWidth = slideWidth*4;
		      	  slideHeight = $('.slide').height();
		      	  var adjustHeight = parseInt($('.textOver').height()) - 15;
		          
              	  $('#mainSlide')  .css({width:mainSlideWidth+"px",left:sliderMargin-slidePosition*slideWidth+"px",marginLeft:0});

		      	  $('.textOver')   .css({width:"100%",left:0});
		      	  $('.textSetting').css({width:"100%",left:0});
                  $('.next')       .css({top:slideHeight/2+adjustHeight+"px",right:0,left:"auto"});
		          $('.back')       .css({top:slideHeight/2+adjustHeight+"px",left:0,right:"auto"}); 
	          }
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
					 	$('#mainSlide').animate({left:sliderMargin*1.5},500);
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
	                    $('#mainSlide').animate({left:parseInt($('#mainSlide').css("left"))-slideWidth*3+"px"},500);
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

          //Call to Show the Slide as the document loaded
 
          adjestImgs();  

	    });
