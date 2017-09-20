function tweenSpaceship(){var e=$("#spaceship"),i=e.find(".spaceship-line"),t=new TimelineMax({paused:!0}),n=new TimelineMax({repeat:-1,yoyo:!0});i.each(function(){var e=$(this).data("length");$(this).css({"stroke-dasharray":e,"stroke-dashoffset":e})}),n.add(TweenMax.to(e,1.2,{y:7,ease:Power1.easeInOut})),t.add(TweenMax.fromTo(e,.7,{scale:.65,y:25,autoAlpha:1},{scale:.75,y:0})),t.add(TweenMax.to(i,.5,{strokeDashoffset:0}),.2),t.add("label1"),t.add(n),e.closest("a").hover(function(){t.play()},function(){t.reverse("label1")})}function brandSlider(){function e(){n=!0,TweenMax.set(a.eq(c),{autoAlpha:1}),TweenMax.to(a.eq(s),l,{autoAlpha:0,onComplete:function(){a.eq(s).css("z-index",""),a.eq(c).css("z-index",1),c=((s=c)+1)%o.length,n=!1}}),d[c].play(),d[s].pause(0)}var i,t,n,a=$("#brand-slider").find(".item"),o=$("#brand-slider-nav .nav-link"),r=2,l=.6,s=0,c=1,d=[];o.on("click",function(i){i.preventDefault();var a=$(this).index();a===s||n||(c=a,e(),t.seek(0))}),o.each(function(e){var t=$(this);d[e]=new TimelineMax({paused:!0}).to(t.find(".ko"),l/2,{autoAlpha:1}).to(t.find(".fill-text .color, .ko .line"),r,{width:"100%",ease:Linear.easeNone}),i=d[e].totalDuration()}),d[s].play(),t||(t=TweenMax.to({},i,{repeat:-1,onRepeat:e}))}function over(){this.animation.play()}function out(){this.animation.reverse()}function frontPageInitSelection(e){function i(){k=this.x,n(-this.x/(y-h),"slider")}function t(){n(this.x/(M-x),"dragger")}function n(e,i){if("dragger"!==i){var t=(M-x)*-e;TweenMax.set(g,{x:-t})}"slider"!==i&&(k=-(y-T*m)*e,TweenMax.set(v,{x:k})),a()}function a(){b.forEach(function(e,i){-Math.floor(e.offset+T)>=Math.ceil(k)&&!e.isLeft?(e.isLeft=!0,TweenMax.to(e.element,.3,{x:-50,ease:Strong.easeIn})):-(e.offset+T)<k&&e.isLeft&&(e.isLeft=!1,TweenMax.to(e.element,.3,{x:0,ease:Strong.easeOut}))})}function o(){h=d.width(),y=v.width(),M=w.width();window.innerWidth;m=3,T=$(".cardItem").eq(0).width(),TweenMax.set(f,{width:T,x:0}),TweenMax.set(v,{x:0}),TweenMax.set(g,{x:0});var e=d.offset().left;b=[],f.each(function(){b.push({element:$(this),offset:$(this).offset().left-e,isLeft:!1,isRight:!1})}),u=[],p=[];var i=(M-x)/(y-h);v.children(".cardItem").each(function(t,n){var a=$(n).offset().left-e;u.push(-Math.min(a,y-h)),p.push(Math.min(M-x-1,a*i))}),r.vars.snap=u,l.vars.snap=p,k=r.x}var r,l,s=$(window),c=e.find(".selection-wrapper"),d=c.find(".selection-slider"),v=c.find(".selection-slider-inner"),f=v.children(),w=c.find(".dragger"),g=w.find(".handle"),u=[],p=[],m=1,h=0,y=0,T=0,x=40,k=0,b=[],M=0;r=Draggable.create(v,{type:"x",dragClickables:!0,bounds:d,throwProps:!0,onDrag:i,onThrowUpdate:i})[0],l=Draggable.create(g,{type:"x",dragClickables:!0,bounds:w,throwProps:!0,maxDuration:3,onDrag:t,onThrowUpdate:t})[0],s.on("extra:resize",o),o()}function upTween(e,i){var t=$(e);TweenMax.set(t,{opacity:0,y:40}),t.each(function(){var e=this,t=TweenMax.to(e,.8,{opacity:1,y:0});new ScrollMagic.Scene({triggerElement:e,triggerHook:i}).setTween(t).reverse(!1).addTo(controller)})}function initScrollMagic(){var e=$("#person-4c-color");new ScrollMagic.Scene({triggerElement:e[0],offset:-50}).setTween(e,.8,{width:"100%",ease:Linear.easeNone}).addTo(controller);var i=$("#robert-quote"),t=i.find(".color"),n=(new TimelineMax).to(t.eq(0),.8,{width:"100%"}).to(t.eq(1),1,{width:"100%"}).to(t.eq(2),1.5,{width:"100%"});new ScrollMagic.Scene({triggerElement:i[0]}).setTween(n).addTo(controller);var a=$("#video-brand1"),o=$("#video-brand2");a.find("video").attr({src:"http://cf.c.ooyala.com/s0cW5nYzE6g8tOxwqdkBqKlGIhA8xQVh/DOcJ-FxaFrRg4gtDEwOjFyazowODE7G_",controls:!0,controlsList:"nodownload",preload:"auto",loop:!1,poster:""}),o.find("video").attr({src:"http://cf.c.ooyala.com/84cW5nYzE6_psmoDsuHmTCrGIUyISTyu/DOcJ-FxaFrRg4gtDEwOjFyazowODE7G_",controls:!0,controlsList:"nodownload",preload:"auto",loop:!1,poster:""}),new ScrollMagic.Scene({triggerElement:a[0],duration:a.height()}).on("enter leave",function(e){var i,t=a,n=t.find("video")[0],o=n.currentTime>0&&!n.paused&&!n.ended&&n.readyState>2;"enter"===e.type?i=setTimeout(function(){o||t.find(".play").click()},600):(i&&clearTimeout(i),o&&n.pause())}).addTo(controller),new ScrollMagic.Scene({triggerElement:o[0],duration:o.height()}).on("enter leave",function(e){var i,t=o,n=t.find("video")[0];"enter"===e.type?i=setTimeout(function(){n.currentTime>0&&!n.paused&&!n.ended&&n.readyState>2||t.find(".play").click()},300):(i&&clearTimeout(i),n.played&&n.pause())}).addTo(controller),scrollToSection()}function scrollToSection(){$(".section-nav a, .brand-top-intro .link, .brand-identity a").on("click",function(e){e.preventDefault();var i,t=$(this).attr("href"),n=$(t);n.length>0&&(i=n.offset().top-$("#roof").outerHeight(),$("html, body").stop().animate({scrollTop:i},500))})}$(function(){tweenSpaceship()});var aprilTweens=[];window.addEventListener("load",function(){var e;e=new TimelineMax({paused:!0}).from("#as1-dog",.4,{y:200}).add("label1").from("#as1-clip",.4,{y:-200},0).from("#as1-mung",.4,{scale:0,x:80,y:60,transformOrigin:"center center"}).from("#as1-heart",.4,{scale:0,rotation:-30,x:80,y:60,transformOrigin:"center center"}).staggerFrom("#as1-line line",.1,{opacity:0},.1).add(new TimelineMax({yoyo:!0,repeat:-1}).to("#as1-dog",4,{y:10,ease:Elastic.easeOut}).to("#as1-clip",4,{y:-10,ease:Elastic.easeOut},0),"label1"),aprilTweens.push(e),e=new TimelineMax({paused:!0}).from("#as2-hand",.4,{y:100}).from("#as2-circle",.4,{scale:0,transformOrigin:"center center"},"-=.2").from("#as2-dog",.4,{scale:0,transformOrigin:"center center"}).add("label1").from("#as2-doc",.4,{scale:0,rotation:"-45_ccw",x:-50,y:-50,transformOrigin:"right bottom"}).staggerFrom("#as2-doc-line line",.1,{opacity:0},.1).from("#as2-talk",.4,{x:30,scale:0,transformOrigin:"center center"}).staggerFromTo("#as2-talk line",.3,{strokeDashoffset:50,strokeDasharray:50},{strokeDashoffset:0},.2).add(new TimelineMax({yoyo:!0,repeat:-1}).to("#as2-dog",4,{rotation:6,transformOrigin:"center top"}),"label1"),aprilTweens.push(e),e=new TimelineMax({paused:!0}).from("#as3-hand1",.5,{x:-100,y:-100,rotation:-45,transformOrigin:"center center"}).from("#as3-hand2",.5,{x:100,y:100,rotation:-45,transformOrigin:"center center"},0).add("label1").from("#as3-circle1",.5,{scale:0,transformOrigin:"center center"}).from("#as3-line1",.5,{scale:0,transformOrigin:"right bottom"},"label1").set("#as3-circle2",{x:-10},"label1").from("#as3-circle2",.5,{scale:0,transformOrigin:"center center"},"label1").from("#as3-line2",.5,{scale:0,transformOrigin:"left bottom"},"label1").add("label2").staggerFrom("#as3-line line",.1,{opacity:0},.1).add(new TimelineMax({yoyo:!0,repeat:-1}).to(["#as3-circle1","#as3-circle2"],1,{scale:1.1,transformOrigin:"center center",ease:Linear.none}),"label2"),aprilTweens.push(e),e=new TimelineMax({paused:!0}).from("#as4-talk",.4,{scale:0,transformOrigin:"left bottom"}).staggerFromTo("#as4-talk line",.3,{strokeDashoffset:50,strokeDasharray:50},{strokeDashoffset:0},.2).from("#as4-mic",.4,{x:30,scale:0,transformOrigin:"center center"}).from("#as4-camera",.4,{xPercent:-110},"-=.2"),aprilTweens.push(e),e=new TimelineMax({paused:!0}).from("#as5-upload",.4,{scale:0,transformOrigin:"center center"}).from("#as5-upload-c",.4,{y:30,transformOrigin:"center center"},"-=.1").from("#as5-circle",.4,{scale:0,rotation:40,transformOrigin:"center center"}).add("label1").staggerFrom(["#as5-like1","#as5-like2","#as5-like3","#as5-like4","#as5-like5"],.2,{scale:0,transformOrigin:"center center"},.3).add(new TimelineMax({repeat:-1}).to("#as5-circle",120,{rotation:360,transformOrigin:"center center",ease:Linear.none}),"label1"),aprilTweens.push(e)}),window.addEventListener("load",function(){var e,i=$("#april-sample"),t=i.find(".owl-dot"),n=i.find("#april-sample-slider").find(".item"),a=n.length;TweenMax.set(n,{autoAlpha:0}),e=new TimelineMax({delay:.1});for(var o=0;o<a;o++)e.to(n.eq(o),.2,{autoAlpha:1}),e.to(t.eq(o),0,{className:"+=active"}),e.staggerFrom(n.eq(o).find(".content > *"),.4,{y:30},.1),e.call(function(e){null!==e&&aprilTweens[e]&&aprilTweens[e].restart()},[o]),e.from(n.eq(o).find(".image > svg"),.1,{autoAlpha:0}),e.to({},1.5,{}),o+1!==a&&(e.to(n.eq(o),0,{autoAlpha:0}),e.to(t.eq(o),0,{className:"-=active"}));new ScrollMagic.Scene({triggerElement:i[0],triggerHook:0,duration:100*a*1.2+"%",offset:-1*$("#roof").height()}).setPin(i[0]).setTween(e).addTo(controller)}),window.addEventListener("load",function(){brandSlider()}),window.addEventListener("load",function(){for(var e,i,t=$("#igarten-iplay"),n=t.find(".iplay-story-timeline .item"),a=t.find(".iplay-story .item"),o=$("#iplay-illust-inner"),r=o.find(".item"),l=r.length,s=100/l,c=new TimelineMax,d=[],v=0;v<l;v++)i=new SplitText(r.eq(v).find(".text")),i=new TimelineMax({paused:!0}).staggerFrom(i.chars,.2,{opacity:0,y:10},.1),d.push(i);for(var f=0;f<l;f++)f>0&&(c.to({},1,{}),c.to(o,1,{xPercent:-s*f,delay:0,ease:Linear.easeNone})),e="slide"+(f+1),c.add(e),c.call(function(e){null!==e&&d[e].play()},[f]),f>0&&(c.to(n.eq(f-1),.5,{className:"-=active"},e),c.to(a.eq(f-1),.5,{className:"-=active"},e)),c.to(n.eq(f),.5,{className:"+=active"},e),c.to(a.eq(f),.5,{className:"+=active"},e),f+1===l&&c.to({},1,{});new ScrollMagic.Scene({triggerElement:t[0],triggerHook:0,duration:100*l+"%",offset:-1*$("#roof").height()}).setPin(t[0]).setTween(c).addTo(controller),$("#iplay-slider-nav a").on("click",function(e){e.preventDefault();var i,a=$(this).hasClass("next"),o=n.filter(".active").index(),r=t.parent(".scrollmagic-pin-spacer").outerHeight(),s=[.03,.18,.36,.54,.71,.82];0<=(o=a?o+1:o-1)&&o<l&&(i=t.parent(".scrollmagic-pin-spacer").offset().top-$("#roof").outerHeight()+r*s[o],$("html, body").stop().animate({scrollTop:i},500))})});var controller=new ScrollMagic.Controller,$interview=$(".interview_face"),vw=$("#viewport").width();if($(".interview_face").each(function(e,i){var t=$(this).find("interview_cover"),n=$(this).find(".overlay"),a=$(this).find(".interview_arrow"),o=new TimelineMax({paused:!0}).staggerFromTo(t,.1,{visibility:"hidden",opacity:0},{visibility:"visible",opacity:1},.1).staggerTo(n,.5,{visibility:"visible",opacity:1},.1).staggerFromTo(a,.1,{visibility:"hidden",opacity:0},{visibility:"visible",opacity:1,ease:Power3.easeIn},.6);i.animation=o}),$(".interview_face").hover(over,out),$("#viewport").width()<1200)var l2="33.3vw",l3="66.6vw",l100="100vw";else l2="33.3%",l3="66.6%",l100="100%";$("#interview1 .interview_face, #interview2 .prev-interview-arrow, #interview3 .next-interview-arrow").click(function(){$(this),(new TimelineMax).staggerFromTo("#interview1",.1,{left:0,zIndex:0},{left:0,zIndex:10},.1).staggerFromTo("#interview1 .interview_content",.1,{display:"none"},{display:"block"},.1).staggerFromTo("#interview1 .interview_navi",.1,{display:"none"},{display:"block"},.1).staggerFromTo("#interview2",.1,{left:l2},{left:l100},.1).staggerFromTo("#interview3",.1,{left:l3},{left:l100},.1).staggerFromTo("#interview1 .interview_cover",.1,{visibility:"visible",opacity:1,ease:Elastic.easeInOut.config(1,.5)},{visibility:"hidden",opacity:0,ease:Elastic.easeInOut.config(1,.5)},.1).staggerFromTo("#interview1 .interview_arrow",.1,{width:"100%",opacity:0,visibility:"hidden",left:"50%",ease:Elastic.easeInOut.config(1,.5)},{ease:Elastic.easeInOut.config(1,.5),width:"100%",opacity:1,visibility:"visible",left:0},.1).staggerFromTo("#interview1 .interview_hover",.1,{visibility:"hidden",opacity:0,ease:Elastic.easeInOut.config(1,.5)},{visibility:"visible",opacity:1,ease:Elastic.easeInOut.config(1,.5)},.1)}),$("#interview2 .interview_face, #interview3 .prev-interview-arrow, #interview1 .next-interview-arrow").click(function(){$(this),(new TimelineMax).staggerFromTo("#interview3",.1,{left:l3},{left:l100},.1).staggerFromTo("#interview2",.1,{left:0,zIndex:0},{left:0,zIndex:10},.1).staggerFromTo("#interview2 .interview_content",.1,{display:"none"},{display:"block"},.1).staggerFromTo("#interview2 .interview_navi",.1,{display:"none"},{display:"block"},.1).staggerFromTo("#interview1",.1,{left:0},{left:-l2},.1).staggerFromTo("#interview2 .interview_cover",.1,{visibility:"visible",opacity:1},{visibility:"hidden",opacity:0},.1).staggerFromTo("#interview2 .interview_arrow",.1,{width:"100%",opacity:0,visibility:"hidden",left:"50%"},{width:"100%",opacity:1,visibility:"visible",left:0},.1).staggerFromTo("#interview2 .interview_hover",.1,{visibility:"hidden",opacity:0},{visibility:"visible",opacity:1},.1)}),$("#interview3 .interview_face, #interview1 .prev-interview-arrow, #interview2 .next-interview-arrow").click(function(){$(this),(new TimelineMax).staggerFromTo("#interview2",.1,{left:l2},{left:l100},.1).staggerFromTo("#interview3",.1,{left:0,zIndex:0},{left:0,zIndex:10},.1).staggerFromTo("#interview3 .interview_content",.1,{display:"none"},{display:"block"},.1).staggerFromTo("#interview3 .interview_navi",.1,{display:"none"},{display:"block"},.1).staggerFromTo("#interview1",.1,{left:0},{left:-l2},.1).staggerFromTo("#interview3 .interview_cover",.1,{visibility:"visible",opacity:1},{visibility:"hidden",opacity:0},.1).staggerFromTo("#interview3 .interview_arrow",.1,{width:"100%",opacity:0,visibility:"hidden",left:"50%"},{width:"100%",opacity:1,visibility:"visible",left:0},.1).staggerFromTo("#interview3 .interview_hover",.1,{visibility:"hidden",opacity:0},{visibility:"visible",opacity:1},.1)}),$(".close-interview-circle").click(function(){TweenMax.to([".interview_navi",".interview_content"],.5,{display:"none"}),TweenMax.to(".interview_arrow",.5,{visibility:"hidden",opacity:0,width:"50%",left:"50%"}),TweenMax.to(".interview_cover",.5,{visibility:"visible",opacity:1},.1),TweenMax.to(".interview_hover",.5,{visibility:"hidden",opacity:0}),TweenMax.to("#interview1",.1,{left:0,zIndex:0}),TweenMax.to("#interview2",.1,{left:l2,zIndex:0}),TweenMax.to("#interview3",.1,{left:l3,zIndex:0})}),frontPageInitSelection($("#drag-slider")),upTween("blockquote.quote","blockquote.quote");var outerHandle=$(".handle .outer"),innerHandle=$(".handle .inner"),tweenDuration=.5,staggerDelay=.5*tweenDuration,handle=new TimelineMax({repeat:-1,yoyo:!0});handle.staggerFromTo(innerHandle,tweenDuration,{scale:2,ease:Linear.easeInOut},{scale:1,ease:Linear.easeInOut},staggerDelay).staggerFromTo(outerHandle,tweenDuration,{scale:1,ease:Linear.easeInOut},{scale:2,ease:Linear.easeInOut},staggerDelay);var dragslider=$(".selection-slider");new ScrollMagic.Scene({triggerElement:dragslider,triggerHook:.5}).setTween(handle).addTo(controller),window.addEventListener("load",function(){$("#article-slider .link").on("click",function(){jatracker("event","clickEvent","관련 기사 더보기","기사 링크 클릭","기사 더 보기")}),$("#interview-q-list a").on("click",function(){jatracker("event","clickEvent","루트번스타인 인터뷰","제목 클릭","내용 보기")}),$("#qna .q-link").on("click",function(){jatracker("event","clickEvent","청담 QnA","제목 클릭","내용 보기")}),$("#check-quiz").on("click",function(){jatracker("event","clickEvent","아이가르텐 퀴즈","버튼 클릭","정답 확인하기")}),$(".box-btn a").on("click",function(){jatracker("event","clickEvent","","버튼 클릭","청담어학원 가을학기 발제문 더보기")}),$(".openlink.v1").on("click",function(){jatracker("event","clickEvent","","V1버튼 클릭","V1 확인하기")}),$(".openlink.c1").on("click",function(){jatracker("event","clickEvent","","C1버튼 클릭","C1 확인하기")}),$(".openlink.c2").on("click",function(){jatracker("event","clickEvent","","C2버튼 클릭","C2 확인하기")}),$(".section-more.brand-more").on("click",function(){jatracker("event","clickEvent","청담러닝","링크 클릭","청담러닝 더 알아보기")}),$(".section-more.igarten").on("click",function(){jatracker("event","clickEvent","아이가르텐","링크 클릭","아이가르텐 커리큘럼 더 알아보기")}),$(".section-more.april").on("click",function(){jatracker("event","clickEvent","에이프릴","링크 클릭","에이프릴 커리큘럼 더 알아보기")}),$(".section-more.institute").on("click",function(){jatracker("event","clickEvent","청담어학원","링크 클릭","청담어학원 더 알아보기")})}),"object"==typeof WebFont&&WebFont.load({custom:{families:["Spoqa Han Sans"],urls:["https://cdnjs.cloudflare.com/ajax/libs/spoqa-han-sans/2.1.1/css/SpoqaHanSans-kr.min.css"]},google:{families:["Roboto"],text:"abcdefghijklmnopqrstuvwxyzCV"}}),$(function(){$(".video-play .play").on("click",function(e){e.preventDefault(),$(this).hide().next("video")[0].play()});var e=$("#qna");e.length&&(e.find(".q-link").on("click",function(e){e.preventDefault(),$(this).parent("li").toggleClass("active").siblings(".active").removeClass("active")}),e.find(".a-content").on("transitionend",function(){var e=$(this).parent();e.hasClass("active")&&$("html, body").stop().animate({scrollTop:e.offset().top-$("#roof").outerHeight()},500)}),e.find("#qna-more").on("click",function(i){i.preventDefault(),$(this).hide(),e.find(".hidden").show()}))});var controller=new ScrollMagic.Controller;window.addEventListener("load",initScrollMagic),$(function(){}),$(function(){var e=$("#article-slider").owlCarousel({loop:!1,nav:!1,dots:!1,autoWidth:!0,margin:20});$("#article-prev").on("click",function(i){i.preventDefault(),e.trigger("prev.owl.carousel")}),$("#article-next").on("click",function(i){i.preventDefault(),e.trigger("next.owl.carousel")});var i=$("#interview-slider").owlCarousel({loop:!1,nav:!1,dots:!1,mouseDrag:!1,items:1});$("#interview-q-list a").on("click",function(e){e.preventDefault();var t=$(this).parent("li"),n=t.index();t.hasClass("active")||(t.addClass("active").siblings(".active").removeClass("active"),i.trigger("to.owl.carousel",[n,0]))}),$("#art-slider").owlCarousel({loop:!0,nav:!1,dots:!0,items:1,mouseDrag:!1,animateOut:"fadeOut",autoplay:!0,autoplayTimeout:3e3});var t=$("#quiz-slider");t.length&&(t.owlCarousel({loop:!1,nav:!0,dots:!0,margin:200,center:!0,autoWidth:!0,lazyLoad:!0,items:2}),$("#check-quiz").on("click",function(){var e=$(this),i=t.find(".center"),n=e.hasClass("active");i.find("img").toggle(),e.text(n?"정답 확인하기":"문제 다시 보기"),e.toggleClass("active")}),t.on("change.owl.carousel",function(){$("#check-quiz.active").click()})),$("#april-tool-slider").owlCarousel({loop:!0,nav:!0,dots:!0,items:1}),$("#april-book-slider").owlCarousel({loop:!0,nav:!0,dots:!1,lazyLoad:!0,items:3,slideBy:3});var n,a=$("#april-illust-slider").owlCarousel({loop:!0,nav:!0,dots:!1,margin:100,center:!0,autoWidth:!0,lazyLoad:!0,smartSpeed:400});a.on("change.owl.carousel initialized.owl.carousel",function(){setTimeout(function(){var e=a.find(".owl-item");TweenMax.to(e,.2,{scale:.7})},0)}),a.on("changed.owl.carousel",function(){n&&clearInterval(n),n=setTimeout(function(){var e=a.find(".owl-item.center");TweenMax.to(e,.4,{scale:1})},400)}),$("#institute-icon-slider").owlCarousel({loop:!0,dots:!0,dotsData:!0,lazyLoad:!0,items:1}),$("#institute-text-slider").owlCarousel({loop:!0,nav:!0,dots:!0,lazyLoad:!0,items:1}),$("#institute-curriculum-slider").on("initialized.owl.carousel changed.owl.carousel",function(e){if(e.namespace){var i=e.relatedTarget;$("#slider-counter").text(i.relative(i.current())+1+"/"+i.items().length)}}).owlCarousel({loop:!0,nav:!0,dots:!1,lazyLoad:!0,items:1,navText:['<span class="prev-circle-arrow"></span>','<span class="next-circle-arrow"></span>']})});
//# sourceMappingURL=script.js.map
