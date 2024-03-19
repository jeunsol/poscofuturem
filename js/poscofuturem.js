$(document).ready(function(){

$(window).on("scroll",function(){
	var pos = $("html").scrollTop();

	if(pos>800){
		$("header").addClass("on");
	}else{
		$("header").removeClass("on");
	}

});
	


$(".menu > li").on("mouseover",function(){
	$(".submenu").stop().slideDown(300);
	$(".sub-bg").stop().slideDown(300);
});

$(".menu > li").on("mouseout",function(){
	$(".submenu").stop().slideUp(10);
	$(".sub-bg").stop().slideUp(10);
});



$("#sitemap").on("click",function(){
	$("#sitemapInner").toggleClass("open");
});
	
	
	
$(".content").hide();
$(".content").first().show();
$(".tab li").first().addClass("choice");
	
$(".tab li").on("mouseover",function(){
	var idx = $(this).index();
	//alert(idx);
	$(".content").hide();
	$(".content").eq(idx).show();
	$(".tab li").removeClass("choice");
	$(this).addClass("choice");
});
	
});