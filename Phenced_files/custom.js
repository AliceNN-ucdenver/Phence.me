var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
			$('#return-to-top').fadeIn(200);    // Fade in the arrow
		} else {
			$('#return-to-top').fadeOut(200);   // Else fade out the arrow
		}
	});
	$('.circle').click(function() {      // When arrow is clicked
		$('body,html').animate({
			scrollTop : 0                       // Scroll to top of body
		}, 500);
	});	
$('.menu-toggle').on('click', function(e) {
		$(this).toggleClass('active');
		$(this).next().slideToggle(); 
		
	});
	
var options = {
    animateThreshold: 100,
    scrollPollInterval: 20
}
$('.aniview').AniView(options);

$('.navTrigger').click(function(){
  $(this).toggleClass('active');
});

 var $window = $(window), previousScrollTop = 0, scrollLock = false;
$window.scroll(function(event) {     
    if(scrollLock) {
        $window.scrollTop(previousScrollTop); 
    }
 previousScrollTop = $window.scrollTop();
});

$('.navbar-toggle.collapsed').click(function() {
      /*  scrollLock = true; */
	 var a= $('#hambernav').attr("aria-expanded"); 
 if(a=="false"){
	/*  scrollLock = true;  */
	  /* $('#bs-example-navbar-collapse-1').slideDown();   */
   $('html').css({'overflow':'hidden'}); 
 }
 else{
	/*  scrollLock = false; */
	 /*  $('#bs-example-navbar-collapse-1').slideUp();   */
  $('html').css({'overflow':'visible'});  
 }
 });
/*  $('.navbar-toggle.fixed').click(function() {
       scrollLock = false;
	   $('#hambernav').removeClass("fixed"); 
	   alert('s');	 
 }); */

 // Apps Section hover function
    var appHolder = $(".app-icon-holder", "#apps");
     appHolder.on("mouseover",function(){
        appHolder.removeClass("opened");
        $(this).addClass("opened");
        $(".show-details", "#apps").removeClass("show-details");
        $(".app-details"+$(this).data("id"), "#apps").addClass("show-details");
    });
	
	$('#nexts').click(function() {
			var appHolder = $(".apps-links-holder", "#apps");
			appHolder.find('.opened').next().addClass("opened");
			$(".app-details", "#apps").find('.show-details').next().addClass("show-details");
	 });	
	 
	$('#prevs').click(function() {
			var appHolder = $(".apps-links-holder", "#apps");
			appHolder.find('.opened').removeClass('opened').prev().addClass("opened");
			$(".app-details", "#apps").find('.show-details').removeClass('show-details').prev().addClass("show-details");
	 });	
	 $('.navilist li').click(function() {
		    $('.navilist li').removeClass("active");
		    $(this).addClass("active");
			var appHolder = $(".apps-links-holder", "#apps");
			var did=$(this).data("id");
			  $(".show-details").removeClass("show-details");
			 $(".app-details"+did).addClass("show-details");
			 $(".app-icon-holder").removeClass("opened");
			  $(".app-icon-holder"+did).addClass("opened");
	 });
	
	
	    var appHolders = $(".ib", ".area");
		appHolders.on("click",function(){
        appHolders.removeClass("activeicon");
        $(this).addClass("activeicon");
		 
         $(".thumbnail", ".area").removeClass("activeimg");
      $(".thumbnail."+$(this).attr("id"), ".area").addClass("activeimg");  
    });
	
	 
                 $.mCustomScrollbar.defaults.theme="light-2"; //set "light-2" as the default theme
				 $(".demo-x").mCustomScrollbar({ 
				   scrollEasing:"linear",
				   timeout:0,
				   setTop: 0,
				   setHeight: 700,
				   scrollbarPosition: "outside",
			       scrollInertia: 1000,  
				     mouseWheel:{ enable: false },  
					 contentTouchScroll: false,
					axis:"x", 
					advanced:{autoExpandHorizontalScroll:false},
				 });  
	
$( document ).ready(function() {
	$('.areaimg .thumbnail').css({'float':'left'});
	 windowWidth = $(window).width();
	  var $scroller = $('.areaicon'); 
	 if(windowWidth<767) {
		$('.content').animate({paddingLeft: "0%",right: "0%"}); 
		        var imgw= $("#imgw").width();
				
			 	
				$("#travel").click(function(e){ 
						$('.content').animate({paddingLeft: "10px"});
					    $('.demo-x').mCustomScrollbar('scrollTo','first');
					
				});
					$("#business").click(function(e){ 
							$('.demo-x').mCustomScrollbar('scrollTo', '#img2');$('.content').animate({paddingLeft: "10px"});
						var scrollTo = $('.areaicon').position().left+130;     
					    $scroller.animate({'scrollLeft': scrollTo}, 500); 					
				});
					$("#family").click(function(e){
								$('.demo-x').mCustomScrollbar('scrollTo', '#img3');
					$('.content').animate({paddingLeft: "0%",right: "0%"});
								var scrollTo = $('.areaicon').position().left+260;     
								$scroller.animate({'scrollLeft': scrollTo}, 500); 					
				});
					$("#healthcare").click(function(e){
						$('.demo-x').mCustomScrollbar('scrollTo', '#img4'); $('.content').animate({paddingLeft: "10px"});
					           var scrollTo = $('.areaicon').position().left+400; 
								$scroller.animate({'scrollLeft': scrollTo}, 500); 
								
								
				});
					$("#dating").click(function(e){
								  $('.demo-x').mCustomScrollbar('scrollTo', '#img5'); $('.content').animate({paddingLeft: "10px"});
								var scrollTo = $('.areaicon').position().left+540; 
								$scroller.animate({'scrollLeft': scrollTo}, 500); 
				});
					$("#realestate").click(function(e){
								$('.demo-x').mCustomScrollbar('scrollTo', '#img6'); $('.content').animate({paddingLeft: "10px"});
				});
				$("#university").click(function(e){
				   $('.demo-x').mCustomScrollbar('scrollTo','last');
				    $(".content").animate({ right: '0%' }, 'slow'); 
					 var scrollTo = $('.areaicon').position().left+610; 
								$scroller.animate({'scrollLeft': scrollTo}, 500);
				 });		
		
		
	}
	 else if(windowWidth<1400) {
		$('.content').animate({paddingLeft: "0%",right: "0%"}); 
		var imgw= $("#imgw").width();
				
			 	
				$("#travel").click(function(e){ 
						$('.content').animate({paddingLeft: "0%",right: "0%"});
					    $('.demo-x').mCustomScrollbar('scrollTo','first');
					
				});
					$("#business").click(function(e){
							var of = $(this).offset(), // this will return the left and top
							left = of.left;
							 bu=imgw*2-left-(imgw/2);
					$('.demo-x').mCustomScrollbar('scrollTo', bu); $('.content').animate({paddingLeft: "0%",right: "0%"}); 
				});
					$("#family").click(function(e){
								  var of = $(this).offset(),  
								  left = of.left, 
								  fam=imgw*3-left-(imgw/3)-10*3;
				      
					$('.demo-x').mCustomScrollbar('scrollTo', fam); 
					$('.content').animate({paddingLeft: "0%",right: "0%"}); 
				});
					$("#healthcare").click(function(e){
								  var of = $(this).offset(),  
								  left = of.left, 
								  h=imgw*4-left-(imgw/4)-10*4;
					$('.demo-x').mCustomScrollbar('scrollTo', h); $('.content').animate({paddingLeft: "0%",right: "0%"}); 
				});
					$("#dating").click(function(e){
								  var of = $(this).offset(),  
								  left = of.left, 
								  da=imgw*5-left-(imgw/5)-10*5;
					$('.demo-x').mCustomScrollbar('scrollTo', da); $('.content').animate({paddingLeft: "0%",right: "0%"}); 
				});
					$("#realestate").click(function(e){
								  var of = $(this).offset(),  
								  left = of.left, 
								  real=imgw*6-left-(imgw/6)-10*6;
					$('.demo-x').mCustomScrollbar('scrollTo', real); $('.content').animate({paddingLeft: "0%",right: "0%"}); 
				});
				$("#university").click(function(e){
				   $('.demo-x').mCustomScrollbar('scrollTo','last');
				    $(".content").animate({ right: '0%' }, 'slow'); 
				 });	
		
		
	}
 else{
		var imgw= $("#imgw").width();
				 
				$('.content').animate({paddingLeft: "11%",right: "0%"}); 
				
				 
				
				$("#travel").click(function(e){ 
						$('.content').animate({paddingLeft: "11%",right: "0%"});
					    $('.demo-x').mCustomScrollbar('scrollTo','first');
					
				});
					$("#business").click(function(e){
							var of = $(this).offset(), // this will return the left and top
							left = of.left;
							 bu=imgw*2-left-(imgw/2);
					$('.demo-x').mCustomScrollbar('scrollTo', bu); $('.content').animate({paddingLeft: "0%",right: "0%"}); 
				});
					$("#family").click(function(e){
								  var of = $(this).offset(),  
								  left = of.left, 
								  fam=imgw*3-left-(imgw/3)-10*3;
				      
					$('.demo-x').mCustomScrollbar('scrollTo', fam); 
					$('.content').animate({paddingLeft: "0%",right: "0%"}); 
				});
					$("#healthcare").click(function(e){
								  var of = $(this).offset(),  
								  left = of.left, 
								  h=imgw*4-left-(imgw/4)-10*4;
					$('.demo-x').mCustomScrollbar('scrollTo', h); $('.content').animate({paddingLeft: "0%",right: "0%"}); 
				});
					$("#dating").click(function(e){
								  var of = $(this).offset(),  
								  left = of.left, 
								  da=imgw*5-left-(imgw/5)-10*5;
					$('.demo-x').mCustomScrollbar('scrollTo', da); $('.content').animate({paddingLeft: "0%",right: "0%"}); 
				});
					$("#realestate").click(function(e){
								  var of = $(this).offset(),  
								  left = of.left, 
								  real=imgw*6-left-(imgw/6)-10*6;
					$('.demo-x').mCustomScrollbar('scrollTo', real); $('.content').animate({paddingLeft: "0%",right: "0%"}); 
				});
				$("#university").click(function(e){
				   $('.demo-x').mCustomScrollbar('scrollTo','last');
				    $(".content").animate({ right: '13%' }, 'slow'); 
				 });
	 }
				
 			
				
});
 		
			
});
 

}
/*
     FILE ARCHIVED ON 10:21:15 Feb 25, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:26:09 May 29, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.452
  exclusion.robots: 0.022
  exclusion.robots.policy: 0.012
  esindex: 0.009
  cdx.remote: 80.583
  LoadShardBlock: 1836.751 (3)
  PetaboxLoader3.datanode: 1832.015 (5)
  load_resource: 1134.063 (2)
  PetaboxLoader3.resolve: 783.259 (2)
*/