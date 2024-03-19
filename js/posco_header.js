$(document).ready(function(){

$(window).on("scroll",function(){
	var pos = $("html").scrollTop();

	if(pos>10){
		$("header").addClass("on");
        $(".menu li a").addClass("on");
        $(".logo img").addClass("on");
		$(".btn_lang").addClass("on");
		$("#sitemap").addClass("on");
		$(".line").addClass("on");
	}else{
		$("header").removeClass("on");
        $(".menu li a").removeClass("on");
        $(".logo img").removeClass("on");
		$(".btn_lang").removeClass("on");
		$("#sitemap").removeClass("on");
		$(".line").removeClass("on");
	}
	
	if(pos>300){
		$("header").addClass("in");
	}else{
		$("header").removeClass("in");
	}

});
	
	

$("#sitemap").on("click",function(){
	$("#sitemapInner").toggleClass("open");
});
	
	
	
var $slides = $(".slide");
var current = 0; 
$slides.css("display","none");
$slides.eq(0).css("display","block");

function fnFade(idx){
	$slides.fadeOut(1000);
	$slides.eq(idx).fadeIn(1000);
	current = idx; 
}

function setSlide(){
	if(current == 1){
		fnFade(0);
	}else{
		fnFade(current + 1);
	}
}

setInterval(setSlide,2500);

});