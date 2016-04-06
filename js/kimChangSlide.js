$(document).ready(function(){
  //Configuration	
  var slidePosition = 0;　//現在のスライド位置認識用
  var defaultWinWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;　
  var windowWidth   = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;　//ウィンドウサイズ監視用
  var slideWidth    = 0;  //画像一つの横幅用
  var sliderMargin  = 0;  //スライドの左マージン用
  var slideHeight   = 0;  //スライドの高さ用
  var adjustMargin  = 70; //両サイドのマージンを調整
  var easing        = "easeInOutCirc"; //イージングの種類
  var animateSpeed  = 800; //イージングの種類
  var settings    = {}; //スライドのポジション設定
  
  //次へボタンの動作設定
  var click_allowed = true;
  $('.next').on('click',function(event){
  	if(!click_allowed){return};
  	event.preventDefault();
    windowWidth = $(window).width();
    settings = setRanges();
  	animateSlideNext(settings);
  	click_allowed = false; 
  	var wait = window.setTimeout(function(){
  		click_allowed = true;
  	},600,easing);
  });
  
  //前へボタンの動作設定
  $('.back').on('click',function(event){
  	if(!click_allowed){return};
  	event.preventDefault();
    windowWidth = $(window).width();
    settings = setRanges();
  	animateSlideBack(settings);
  	click_allowed = false; 
  	var wait = window.setTimeout(function(){
  		click_allowed = true;
  	},600,easing);
  });

  //ウィンドウのリサイズが行われるたびにスライドの再設定を実行
  $(window).resize(function(){
    windowWidth = $(window).width();
    settings = setRanges();
    adjestImgs(windowWidth,settings);
  });
  
  //デフォルト設定オブジェクト返し
  function setRanges(){
    if(windowWidth > 600){
       settings = {
        slideWidth:windowWidth*0.6,
        slideLeftMargin:windowWidth*0.2,
        mainSlideWidth:function(){return this.slideWidth*4}, 
        originalPosition:function(){return this.slideLeftMargin*1.5-slidePosition*this.slideWidth+adjustMargin}
      };
    }
    else{
       settings = {
        slideWidth:windowWidth*0.8,
        slideLeftMargin:windowWidth*0.1,
        mainSlideWidth:function(){return this.slideWidth*4}, 
      };
    }
    return settings;
  }
  //スライド設定関数
  function adjestImgs(windowWidth,settings){	
 
  	  if(windowWidth > 600){
      	  $('#mainSlide')  .width(settings.mainSlideWidth()).css({left:settings.originalPosition()+"px"});
      	  $('.slide')      .width(settings.slideWidth);
      	  $('.slideImg')   .width(settings.slideWidth);     
      	  $('.textOver')   .css({width:settings.slideLeftMargin+adjustMargin*2+"px",left:settings.slideLeftMargin/2-adjustMargin+"px"});
      	  $('.textSetting').css({width:settings.slideLeftMargin+adjustMargin*2-100+"px",right:"55px",left:"auto"});
      	  $('.next')       .css({top:"100px",left:settings.slideLeftMargin*1.5-50+adjustMargin+"px"});
          $('.back')       .css({top:"100px",left:settings.slideLeftMargin*1.5+1+adjustMargin+"px"});
      }
      else{
      	  $('.slide')      .css({width:settings.slideWidth+"px"});
      	  $('.slideImg')   .css({width:settings.slideWidth+"px"});  
          var adjustHeight = parseInt($('.textOver').height()) - 15;
          slideHeight = $('.slide').height();                
      	  $('#mainSlide')  .css({width:settings.mainSlideWidth()+"px",left:settings.slideLeftMargin-slidePosition*settings.slideWidth+"px",marginLeft:0});
      	  $('.textOver')   .css({width:"100%",left:0});
      	  $('.textSetting').css({width:"95%",left:"2.5%"});
          $('.next')       .css({top:slideHeight/2-15+"px",right:0,left:"auto"});
          $('.back')       .css({top:slideHeight/2-15+"px",left:0,right:"auto"}); 
      }
  }

  //moveSlideForward function definition
  function moveSlideForward(settings){
		$('#mainSlide').animate({left:"-="+settings.slideWidth},animateSpeed,easing);
  }

  //moveSlideBackward function definition		 
  function moveSlideBackward(settings){
	  $('#mainSlide').animate({left:"+="+settings.slideWidth},animateSpeed,easing);
  }	

  //次への動作関数
  function animateSlideNext(settings){
       	switch(slidePosition){
        case 0:
        moveSlideForward(settings)
        $('.fadeIntext01').animate({top:"100px",opacity:"0"},animateSpeed);
        var wait = window.setTimeout(function(){
        $('.fadeIntext02').animate({top:"20px",opacity:"1"},animateSpeed);
        },10);
        slidePosition++;
        break;
        case 1:
        moveSlideForward(settings)
        $('.fadeIntext02').animate({top:"100px",opacity:"0"},animateSpeed);
        var wait = window.setTimeout(function(){
        $('.fadeIntext03').animate({top:"20px",opacity:"1"},animateSpeed);
        },10);
        slidePosition++;
        break;   
        case 2:
        moveSlideForward(settings)
        $('.fadeIntext03').animate({top:"100px",opacity:"0"},animateSpeed);
        var wait = window.setTimeout(function(){
        $('.fadeIntext04').animate({top:"20px",opacity:"1"},animateSpeed);
        },10);
        slidePosition++;
        break;       
        case 3:
        $('#mainSlide').animate({left:parseInt($('#mainSlide').css("left"))+settings.slideWidth*3+"px"},animateSpeed,easing);
        $('.fadeIntext04').animate({top:"100px",opacity:"0"},animateSpeed);
        var wait = window.setTimeout(function(){
        $('.fadeIntext01').animate({top:"20px",opacity:"1"},animateSpeed);
        },10);
        slidePosition = 0;
        break;  
		}
  }	

  //前への動作関数
  function animateSlideBack(settings){
        switch(slidePosition){
        case 0:
        $('#mainSlide').animate({left:parseInt($('#mainSlide').css("left"))-settings.slideWidth*3+"px"},animateSpeed,easing);
        $('.fadeIntext01').animate({top:"100px",opacity:"0"},animateSpeed);
        var wait = window.setTimeout(function(){
        $('.fadeIntext04').animate({top:"20px",opacity:"1"},animateSpeed);
        },10);
        slidePosition = 3;
        break;
        case 1:
        moveSlideBackward(settings);
        $('.fadeIntext02').animate({top:"100px",opacity:"0"},animateSpeed);
        var wait = window.setTimeout(function(){
        $('.fadeIntext01').animate({top:"20px",opacity:"1"},animateSpeed);
        },10);
        slidePosition--;
        break;   
        case 2:
        moveSlideBackward(settings);
        $('.fadeIntext03').animate({top:"100px",opacity:"0"},animateSpeed);
        var wait = window.setTimeout(function(){
        $('.fadeIntext02').animate({top:"20px",opacity:"1"},animateSpeed);
        },10);
        slidePosition--;
        break;       
        case 3:
        moveSlideBackward(settings);
        $('.fadeIntext04').animate({top:"100px",opacity:"0"},animateSpeed);
        var wait = window.setTimeout(function(){
        $('.fadeIntext03').animate({top:"20px",opacity:"1"},animateSpeed);
        },10);
        slidePosition--;
        break;  
     	}
   }

  //ページロード時のスライド表示
  settings = setRanges();
　　adjestImgs(defaultWinWidth,settings);  
});
