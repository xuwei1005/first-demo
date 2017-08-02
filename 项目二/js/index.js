
// 轮播图
var swiper=new Swiper(".swiper-container",{
			pagination:".swiper-pagination",
			// paginationClickable:true,
			// prevButton:".swiper-button-prev",
			// nextButton:".swiper-button-next",
			// keyboardControl:true,//键盘控制
			
			
			autoplay:2000,
			loop:true,
			

		});

// 地区选择
$("#citylist").css("display","none");
var state=0;
$(".selects").click(function(){
	if(state==0){
		$("#citylist").show();
		$(".selects").css("transform","rotate(180deg)");
		state=1;
	}else{
		$("#citylist").hide();
		$(".selects").css("transform","rotate(360deg)");
		state=0;
	}
})


$("#citylist li").click(function(){
	$(".zhenzhou").html($(this).html());
	$("#citylist").css("display","none");
	$(".selects").css("transform","rotate(36  0deg)");
	state=0;
})



// 查看全部团购		
$("#tb2").css("display","none");
var st=1;
$(".more").click(function(){
if(st==1){

		$("#tb2").show();
		$("#like").css("height","10rem");
		$(".more").html("收起");
		st=0;
	}else{
		$("#tb2").hide();
		$("#like").css("height","6rem");
		$(".more").html("查看全部团购");
		st=1;
	}
	
})


// 倒计时
		clock();
		setInterval(clock,1000);
		function clock(){

			var newTime=new Date(2017,5,12,22,10,00);
			var nowTime=new Date();

			var onlyTime=Math.floor((newTime-nowTime)/1000);

			var strTime=Math.floor(onlyTime%86400/3600)+":"+Math.floor(onlyTime%86400%3600/60)+":"+onlyTime%60;

			$(".count").html(strTime);

		}





	

