$(document).ready(function(){
  //Configuration	
  var slidePosition = 0;　//現在のスライド位置認識用
  var windowWidth   = 0;　//ウィンドウサイズ監視用
  var slideWidth    = 0;  //画像一つの横幅用
  var sliderMargin  = 0;  //スライドの左マージン用
  var slideHeight   = 0;  //スライドの高さ用
  var adjustMargin  = 70; //両サイドのマージンを調整

  //次へボタンの動作設定
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
  
  //前へボタンの動作設定
  $('.back').on('click',function(event){
  	if(!click_allowed){return};
  	event.preventDefault();
  	animateSlideBack();
  	click_allowed = false; 
  	var wait = window.setTimeout(function(){
  		click_allowed = true;
  	},500);
  });

  //ウィンドウのリサイズが行われるたびにスライドの再設定を実行
  $(window).resize(function(){adjestImgs();});
  
  //スライド設定関数
  function adjestImgs(){	
  	  windowWidth = window.innerWidth;
  	  if(windowWidth > 600){
      	  slideWidth         = windowWidth*0.6;
      	  sliderMargin       = windowWidth*0.2;	
      	  var mainSlideWidth = slideWidth*4;
      	  var originalPosition = sliderMargin*1.5-slidePosition*slideWidth+adjustMargin;
      	  $('#mainSlide')  .width(mainSlideWidth).css({left:originalPosition+"px"});
      	  $('.slide')      .width(slideWidth);
      	  $('.slideImg')   .css({width:slideWidth+"px"});       
      	  $('.textOver')   .css({width:sliderMargin+adjustMargin*2+"px",left:sliderMargin/2-adjustMargin+"px"});
      	  $('.textSetting').css({width:sliderMargin+adjustMargin*2-100+"px",right:"55px",left:"auto"});
      	  $('.next')       .css({top:"100px",left:sliderMargin/2+sliderMargin-50+adjustMargin+"px"});
          $('.back')       .css({top:"100px",left:sliderMargin/2+sliderMargin+1+adjustMargin+"px"});
      }
      else{
          slideWidth         = windowWidth*0.8;
      	  $('.slide')      .css({width:slideWidth+"px"});
      	  $('.slideImg')   .css({width:slideWidth+"px"});                  
      	  sliderMargin       = windowWidth*0.1;	
      	  var mainSlideWidth = slideWidth*4;
      	  slideHeight = $('.slide').height();
      	  var adjustHeight = parseInt($('.textOver').height()) - 15;
      	  $('#mainSlide')  .css({width:mainSlideWidth+"px",left:sliderMargin-slidePosition*slideWidth+"px",marginLeft:0});
      	  $('.textOver')   .css({width:"100%",left:0});
      	  $('.textSetting').css({width:"95%",left:"2.5%"});
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

  //次への動作関数
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
			 	$('#mainSlide').animate({left:sliderMargin*1.5+adjustMargin},500);
			 	$('.fadeIntext04').animate({top:"100px",opacity:"0"},500);
				var wait = window.setTimeout(function(){
				$('.fadeIntext01').animate({top:"20px",opacity:"1"});
				},10);
			    slidePosition = 0;
			    break;  
		}
  }	

  //前への動作関数
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

  //ページロード時のスライド表示
　　adjestImgs();  
});
