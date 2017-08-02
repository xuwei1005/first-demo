 var myswiper = new Swiper('.swiper-container', {
 		direction: 'vertical',
    	keyboardControl:true,
    	pagination: '.swiper-pagination',
    	paginationClickable: true,
    	mousewheelControl:true,
    	
    	
    	onInit: function(swiper){ 

			    swiperAnimateCache(swiper);
			    swiperAnimate(swiper); 
			
			}, 
		onSlideChangeEnd: function(swiper){ 
			    swiperAnimate(swiper); 
			    if(swiper.activeIndex==3){
			    	$(".line").css("animation","move 2s linear 0s forwards");
			    	$(".one").css("animation","one 0.5s linear 0s forwards");
			    	$(".second").css("animation","one 0.5s linear 0.5s forwards");
			    	$(".third").css("animation","one 0.5s linear 1s forwards");
			    	$(".fourth").css("animation","one 0.5s linear 1.5s forwards");
			    }else{
			    	$(".line").css("animation","none");
			    	$(".one").css("animation","none");
			    	$(".second").css("animation","none");
			    	$(".third").css("animation","none");
			    	$(".fourth").css("animation","none");
			    }
			},
       
    });

 		$(".tip").click(function(){
			myswiper.slideNext();
		});

		$(".knownw").click(function(){
			myswiper.slideNext();
		});

	var musicState=1;
	$(".music").click(function(){
	if (musicState==1) {
		$(".music").css("animation","none");
		$("#video")[0].pause();
		musicState=0;
	}else{
		$(".music").css("animation","musicplay 2s linear infinite");
		$("#video")[0].play();
		musicState=1;
	}
	//点击图标时，如果音频在播放就暂停，否则就启动播放
	
	});