
$(function(){
	var $heights = $(window).height();
	    $widths  = $(window).width();
		function init(){
			$(".disloc").each(function() {
			var self = $(this);
				setTimeout(function(){
					var offsetTop = self[0].offsetTop;
					  if (offsetTop >= $(window).scrollTop() && offsetTop < ($(window).scrollTop()+$(window).height())) {
							var peos = self.offset().top;
							var lisx = peos-$(window).height();
							if($(window).scrollTop()>lisx){
							  self.addClass("animate");
							}
						}
				},300);
			});
		}
		$(window).scroll(function(){
		 init()
		}).scroll();
	$(window).scroll(function(){
			if($(window).scrollTop()>1){
				$(".top").addClass("top-set");
				}else{
					$(".top").removeClass("top-set");
					}
			});
	if($(window).width()<550){
			   $(".map-img .bd > img").each(function(index, element) {
				    var self = $(this);
			    	self.attr("src",self.attr("mobimg"));
              });
		}else{
		  	   $(".map-img .bd > img").each(function(index, element) {
				    var self = $(this);
			    	self.attr("src",self.attr("pcimg"));
              });
			};
		$(window).resize(function(){
			if($(window).width()<550){
			  $(".map-img .bd > img").each(function(index, element) {
                var self = $(this);
			    	self.attr("src",self.attr("mobimg"));
              });
			}else{
				$(".map-img .bd > img").each(function(index, element) {
				  var self = $(this);
			    	self.attr("src",self.attr("pcimg"));
                });
				}
			});
	//内页锚点		
	  var ost01=0,ost02=0;	  
	  $(".selc01").click(function(){
		  ost01=$(".piclt").offset().top;
		  if(ost01!=0){
			  $('html,body').stop(false,true).animate({scrollTop:ost01});
			  }
		  });
	  $(".selc02").click(function(){
		  ost02=$(".osnit").offset().top;
		  if(ost02!=0){
		      $('html,body').stop(false,true).animate({scrollTop:ost02});
		      }
		  });
	$(".xfolt .menu-on").click(function(){
		if($(this).hasClass("menu-off")){
			$(this).css({opacity:"0"})
			$(this).removeClass("menu-off").stop(false,true).animate({opacity:"1",right:"-40px"});
			$(this).parent(".xfolt").stop(false,true).animate({left:"-222px"});
			}else{
				$(this).css({opacity:"0"})
				$(this).addClass("menu-off").stop(false,true).animate({opacity:"1",right:"0px"});
			    $(this).parent(".xfolt").stop(false,true).animate({left:"0px"});
				}
		})	  
		  
	$(".setl-img").each(function(index, element) {
        var lilt = $(this).children("p:eq(0)").children("img").attr("bigimg");
		$(this).siblings(".bilg-xt").children("img").attr("src",lilt)
    });
	$(".xfolt dl dd a").click(function(){
		  var lidh = $(this).index();
		  var claskt = $(".pickt a").eq(lidh).offset().top;
		  $('html,body').animate({scrollTop:claskt});
		  });
	$(".setl-img p").click(function(){
		var unclt =$(this).children("img").attr("bigimg");
		$(this).parent().siblings(".bilg-xt").children("img").attr("src",unclt);
		});
	$(".recr-item-ope a").click(function(){
		$(this).parents(".recr-item").siblings().children(".recr-txt").stop(false,true).slideUp();
		$(this).parent().parent().siblings(".recr-txt").stop(false,true).slideToggle();
		});
	$(".recr-list .recr-item:eq(0)").children(".recr-txt").slideDown();
	$(".falt:last").css({border:"none"});
	$(".tloltx img").click(function(){
		var imgurl=$(this).attr("bgurl");
		var vodurl=$(this).attr("vodurl");
		$(".letlx").children("img").attr("src",imgurl).siblings(".video-li-a").attr("video-path",vodurl);
		$(".shade, .big-video").hide();
		});
    $(".mob-sild").click(function(){
		if($(this).hasClass("backl")){
			$(this).removeClass("backl").stop(false,true).animate({left:"0px"});
			$(".lolt-red").stop(false,true).animate({left:"-260px"})
			}else{
				$(this).addClass("backl").stop(false,true).animate({left:"260px"});
		        $(".lolt-red").stop(false,true).animate({left:"0"});
				}
		
		});
	$(".silet").each(function(index, element) {
        var lixlt = $(this).find("p").children("a").eq(0).text();
		$(this).children("i").text(lixlt);
    });
		//$(".shade").on("click", function () {
//		    $(".shade, .big-video").hide();
//		});
    $(".selit dl:last").css({border:"none"});
	$(".tab-hd span").click(function(){
		var lilx = $(this).index();
		$(this).addClass("cur").siblings().removeClass("cur");
		$(this).parent().siblings(".tab-bd").children(".bd").eq(lilx).fadeIn().siblings().hide();
		});
	$(".perlt span").click(function(){
			var lilx = $(this).index();
			$(this).addClass("cur").siblings().removeClass("cur");
			$(this).parent().siblings(".clotl").children(".bd").eq(lilx).fadeIn().siblings().hide();
			$(".map-img .bd").eq(lilx).fadeIn().siblings().hide();
			})
    $(".cholt span").click(function(){
		$(this).siblings("p").stop(false,true).slideToggle();
		});
	$(".nelx-set .silet i").click(function(){
		$(this).siblings("p").stop(false,true).slideToggle();
		})
	if($(window).width()>768){
			$(".focst").click(function(){
			$(this).find("em").animate({filter:"alpha(opacity=100)",opacity:"1"})
			$(this).children("span").stop(false,true).fadeOut()
			$(this).siblings().children("span").stop(false,true).fadeIn()
			$(this).children("p").stop(false,true).animate({width:"100%"});
			$(this).siblings().children("p").stop(false,true).animate({width:"20%"});
			var solx = $(this).index();
			$(this).stop(false,true).animate({left:(solx*10)+"%"});
			$(this).prevAll(".focst").each(function(index, element) {
                var silc = $(this).index();
				$(this).stop(false,true).animate({left:(silc*10)+"%"});
				$(this).find("em").animate({filter:"alpha(opacity=0)",opacity:"0"})
            });
			$(this).nextAll(".focst").each(function(index, element) {
                var cilc = $(this).index();
				$(this).stop(false,true).animate({left:((cilc-1)*10+50)+"%"});
				$(this).find("em").animate({filter:"alpha(opacity=0)",opacity:"0"})
            });
			});
			$(".focst.n01").click();
			}	
	$(window).resize(function(){
			if($(window).width()>768){
				$(".nelx-set .silet p").show();
				}else{
					$(".nelx-set .silet p").hide();
					}
			});
	if($(window).width()>1100){
		$(".siloxlt li").hover(function(){
			//alert("10");
			$(this).children(".melsi").stop(false,true).slideDown();
			},function(){
				$(this).children(".melsi").stop(false,true).slideUp();
				});
		$(".slatkx li").hover(function(){
				$(this).children(".slilt").stop(false,true).fadeIn();
				$(this).find("dl").each(function(index, element) {
					var lixt = $(this).index();
					
                    $(this).stop(false,true).animate({left:"0",opacity:"1"},lixt*200+500)
                });
				
				},function(){
					$(this).children(".slilt").stop(false,true).fadeOut();
					$(this).find("dl").each(function(index, element) {
						var lixt = $(this).index();
						$(this).stop(false,true).animate({left:"100px",opacity:"0"},0)
					});
		
		});
		$(window).resize(function(){
			if($(window).width()>1100){
				$(".nav li dl").css({left:"100px",opacity:"0"});
				}else{
					$(".nav li dl").css({left:"0px",opacity:"1"});
					}
			});
		$(".slatkx").hover(function(){
			$(".selt-bg").stop(false,true).fadeIn(1000);
			},function(){
				$(".selt-bg").stop(false,true).fadeOut(500);
				});
		}else{
			$(".slatkx li > a").click(function(){
				$(this).parent().siblings("li").children(".slilt").stop(false,true).slideUp();
				$(this).siblings(".slilt").stop(false,true).slideToggle();
				return false;
				});
			$(".slatkx li .slilt dt a").click(function(){
				if($(this).hasClass("cur")){
					$(this).removeClass("cur").parent().parent("dl").siblings("dl").children("dd").stop(false,true).slideUp();
				    $(this).parent().siblings("dd").stop(false,true).slideUp();
					}else{
						$(this).addClass("cur").parent().parent("dl").siblings("dl").children("dd").stop(false,true).slideUp();
				        $(this).parent().siblings("dd").stop(false,true).slideDown();
						}
				
				return false;
				});
			$(".siloxlt .melibn > a").click(function(){
				$(this).siblings(".melsi").stop(false,true).slideToggle();
				return false;
				})
			}
	if($(window).width()>1025){
			  $(".flxtm").hover(function(){
				  $(this).children(".emlxt").stop(false,true).slideToggle();
				  })
			  }else{
				  $(".flxtm").click(function(){
					  $(this).children(".emlxt").stop(false,true).slideToggle();
					  })
				  };
    if($(window).width()>1025){
			//$(".logo").show();
			$(".moclt").css({height:"60px"})
			$(".melixt").css({height:"513px"})
			
			}else{
				$(".moclt").css({height:$heights-60});
				$(".melixt").css({height:$heights-245});
				};
		$(window).resize(function(){
			//$(".flxtm").children(".emlxt").stop(false,true).fadeOut();
			if($(window).width()>1025){
				$(".moclt").css({height:"60px"}).show();
				$(".melixt").css({height:"513px"});
				$(".lolt-red").css({left:"0"});
				}else{
					$(".moclt").css({height:$heights-60}).hide();
					$(".nav li").css({left:"0",top:"0"});
					$(".melixt").css({height:$heights-245});
					$(".lolt-red").css({left:"-260px"});
					$(".mob-sild").css({left:"10px"});
					}
			})
    $(".mob-nav").click(function(){
			if($(".moclt").is(":hidden")){
				$(".moclt").fadeIn();
				$(".nav li").each(function(index, element) {
				  var peims = $(this).index();
				  $(this).stop(false,true).animate({left:"0"},120*peims+300)
				  })
				}else{
					$(".moclt").fadeOut();
					$(".nav li").each(function(index, element) {
					  var peims = $(this).index();
					  $(this).stop(false,true).animate({left:"-40px"},200*peims+300)
					  })
					}
			
			});
    if($(window).width()<=768){
		var lixlt = $(".mlsit img").length;
	    $(".mlsit").width(lixlt*117);
		}else{
			$(".mlsit").css({width:"100%"});
			$(".yearnes .ofcs:even").addClass("even");
	        $(".yearnes .ofcs:odd").addClass("odd");
			}
	$(window).resize(function(){
		if($(window).width()<=768){
		var lixlt = $(".mlsit img").length;
	    $(".mlsit").width(lixlt*117);
		$(".yearnes .ofcs:even").removeClass("even");
	    $(".yearnes .ofcs:odd").removeClass("odd");
		}else{
			$(".mlsit").css({width:"100%"});
			$(".yearnes .ofcs:even").addClass("even");
	        $(".yearnes .ofcs:odd").addClass("odd");
			}
		})
	$(".foot dl dt").click(function(){
		if($(window).width()<=768){
			$(this).parent().siblings("dl").children("dd").stop(false,true).slideUp();
			$(this).siblings("dd").stop(false,true).slideToggle();
			}
		})
		
	$(".xsd-choose span").click(function(){
		$(this).addClass("cur").siblings("ul").stop(false,true).slideToggle();
		})
	$(document).click(function (e) {
        if ( !$(e.target).is(".xsd-choose span,.xsd-choose span *,.xsd-choose ul") ) {
            $(".xsd-choose ul").stop(false,true).slideUp();
			$(".xsd-choose span").removeClass("cur");}
        });
	$(".weixin").click(function(){
		$(".ewmimt,.bg-col").fadeIn();
		$(".ewm01").stop(false,true).animate({left:"0",opacity:"1"},600);
		$(".ewm02").stop(false,true).animate({right:"0",opacity:"1"},600);
		});
	$(".ewmimt,.bg-col").click(function(){
		$(".ewmimt,.bg-col").fadeOut();
		$(".ewm01").stop(false,true).animate({left:"-150px",opacity:"0.3"},600);
		$(".ewm02").stop(false,true).animate({right:"-150px",opacity:"0.3"},600);
		});
	$("#gotop").click(function(){
		$('body,html').animate({scrollTop:0});
		});
	$(".search").click(function(){
		$(".search-con").toggle(500);
		});
	$(".clolto").click(function(){
		$(".search-con").hide(500);
		if($(window).width()<=768){
			$(".moclt").fadeOut();
			}
		})
	$(document).click(function (e) {
		   if ( !$(e.target).is(".search-con,.search-con *,.search")) {
			  //alert("1");
				  $(".search-con").hide(500);
      }
   });
   if($(window).width()<641){
	            $(".myurl a").each(function(index, element) {
                   var self = $(this);
			    	self.attr("href",self.attr("moburl"));
                });
				$(".slilt dl dd a").each(function(index, element) {
                   var self = $(this);
			    	self.attr("href",self.attr("moburl"));
                });
				$(".mel01").each(function(index, element) {
                   var self = $(this);
			    	self.attr("href",self.attr("moburl"));
                });
		}else{
		  	   $(".myurl a").each(function(index, element) {
                   var self = $(this);
			    	self.attr("href",self.attr("pcurl"));
                });
				$(".slilt dl dd a").each(function(index, element) {
                   var self = $(this);
			    	self.attr("href",self.attr("pcurl"));
                });
				$(".mel01").each(function(index, element) {
                   var self = $(this);
			    	self.attr("href",self.attr("pcurl"));
                });
			}
  
   $(window).resize(function(){
			if($(window).width()<641){
			  $(".myurl a").each(function(index, element) {
                   var self = $(this);
			    	self.attr("href",self.attr("moburl"));
                });
			  $(".slilt dl dd a").each(function(index, element) {
                   var self = $(this);
			    	self.attr("href",self.attr("moburl"));
                });
			  $(".mel01").each(function(index, element) {
                   var self = $(this);
			    	self.attr("href",self.attr("moburl"));
                });
			}else{
				$(".myurl a").each(function(index, element) {
                   var self = $(this);
			    	self.attr("href",self.attr("pcurl"));
                });
				$(".slilt dl dd a").each(function(index, element) {
                   var self = $(this);
			    	self.attr("href",self.attr("pcurl"));
                });
				$(".mel01").each(function(index, element) {
                   var self = $(this);
			    	self.attr("href",self.attr("pcurl"));
                });
				}
			});
   $(".ztl-con p area").attr("onfocus","blur(this);");
  if ($(window).width() < 641) {
                $(".milit a[pcurl]").each(function(index, element) {
                    var self = $(this);
                    self.attr("href", self.attr("moburl"));
                });
            } else {
                $(".milit a[pcurl]").each(function(index, element) {
                    var self = $(this);
                    self.attr("href", self.attr("pcurl"));
                });
			}
		$(window).resize(function(){
				if ($(window).width() < 641) {
					$(".milit a[pcurl]").each(function(index, element) {
						var self = $(this);
						self.attr("href", self.attr("moburl"));
					});
				} else {
					$(".milit a[pcurl]").each(function(index, element) {
						var self = $(this);
						self.attr("href", self.attr("pcurl"));
					});
				}
			});

})


















