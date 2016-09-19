/*eslint-env jquery, browser*/
<!--
var mouseY, mouseX;
var windowWidth;
$(document).ready(function(){
	//add div when mouse enters player table cell
	$(".player").mouseenter(function(){
		$(this).append("<div class='pop-up'></div>");
		$(document).mousemove(function(e){
			mouseY=e.pageY;
			mouseX=e.pageX;
			$(".pop-up").css({
				left:mouseX + 10,
				top:mouseY +10});
		});
	});
	
	$(".player").mouseleave(function(){
		$(".pop-up").remove();
	});
	
	/*var navs=$(".nav-bar,.nav-list, .nav-list a");
	var hover=$(".nav-list a:hover");
	$(document).scroll(function(){
		if($(document).scrollTop() !== 0){
			navs.css({
				"opacity":"0.7",
				"background-color":"black",
				"color":"grey"
				});
				//navs.fadeTo('fast',0.7);
				//navs.fadeTo("slow",0.7);
				navs.animate({opacity:0.7},100);
				//navs.css({"opacity":"0.7"});
		} else {
			  navs.css({
				"opacity":"1.0",
				"background-color": "#333F8A",
				"color":"black"
				});
				//navs.fadeTo('fast',1.0);
				//navs.fadeTo("slow",1.0);
				navs.animate({opacity:1},100);
				//navs.css({"opacity":"1.0"});
		}
		
	});*/
});

-->