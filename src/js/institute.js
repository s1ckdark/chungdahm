/* institute */

// $instituteIconSlider();
// $instituteTextSlider();
var controller = new ScrollMagic.Controller();
var $interview = $('.interview_face'), vw = $('#viewport').width();
 // interviewTween.from(background, 0.25, {scaleX: "0%", transformOrigin: "left center", ease: Quad.easeInOut}, "#start");

 
// // HOVER
// $interview.find('.interview_face').each(function(index, element){
//   var $this = $(this), $element = $(element);
//   var ht = new TimelineMax({paused:true})
//      .staggerFromTo($element.find('.overlay')[0], .1, {visibility:'hidden',opacity:0}, {visibility:'visible',opacity:1},.1)
//      .staggerTo($element.find('.interview_inner'), .1, {backgroundColor:'transparent'},.1)
//      .staggerFromTo($element.find('.interview_arrow'), .1,  {visibility:'hidden',opacity:0}, {visibility:'visible',opacity:1},.1);
//   element.interviewHover = ht;


//   });
//   $interview.on({
//     mouseout: function(e){
//       this.interviewHover.reverse();
//     },
//     mouseover: function(){
//       this.interviewHover.play();
//     }
// });

  $('.interview_face').each(function(index, element){
    var ele = $(this).find('interview_cover');
    var overlay = $(this).find('.overlay');
    var arrow= $(this).find('.interview_arrow');
   var tl = new TimelineMax({paused:true})
      .staggerFromTo(ele, .1, {visibility:'hidden',opacity:0}, {visibility:'visible',opacity:1},.1)
      .staggerTo(overlay, .5, {visibility:'visible',opacity:1},.1)
      .staggerTo(arrow, .5, {className:'+=active',autoAlpha:1,width:'+=50%',ease: Power3.easeOut},.1);
  element.animation = tl;
});
$('.interview_face').hover(over, out);
function over(){ this.animation.play(); }
function out(){ this.animation.reverse(); }


if($('#viewport').width()<1200){
  var l2 = '33.3vw', l3 = '66.6vw', l100 = '100vw';
} else {
   l2 = '33.3%';
   l3 = '66.6%';
   l100 = '100%';
}

$('#interview1 .interview_face, #interview2 .prev-interview-arrow, #interview3 .next-interview-arrow').click(function(){
    var $this = $(this);
var tl = new TimelineMax()
  .staggerFromTo('#interview1', .1, {left:0,zIndex:0}, {left:0,zIndex:10},.1)
  .staggerFromTo('#interview1 .interview_content', .1, {display:'none'}, {display:'block'},.1)
  .staggerFromTo('#interview1 .interview_navi',.1, {display:'none'}, {display:'block'},.1)
  .staggerFromTo('#interview2', .1, {left:l2}, {left:l100}, .1)
  .staggerFromTo('#interview3', .1, {left:l3}, {left:l100}, .1)
  .staggerFromTo('#interview1 .interview_cover', .1, {visibility:'visible',opacity:1, ease: Elastic.easeInOut.config(1, 0.5)}, {visibility:'hidden',opacity:0, ease: Elastic.easeInOut.config(1, 0.5)},.1)
  .staggerFromTo('#interview1 .interview_arrow', .1, {width:'100%',opacity:0,visibility:'hidden',left:'50%', ease: Elastic.easeInOut.config(1, 0.5)}, { ease: Elastic.easeInOut.config(1, 0.5),width:'100%',opacity:1,visibility:'visible',left:0},.1)
  .staggerFromTo('#interview1 .interview_hover', .1, {visibility:'hidden',opacity:0, ease: Elastic.easeInOut.config(1, 0.5)}, {visibility:'visible',opacity:1, ease: Elastic.easeInOut.config(1, 0.5)},.1);
});

$('#interview2 .interview_face, #interview3 .prev-interview-arrow, #interview1 .next-interview-arrow').click(function(){
    var $this = $(this);
var tl = new TimelineMax()
  .staggerFromTo('#interview3', .1, {left:l3}, {left:l100}, .1)
  .staggerFromTo('#interview2', .1, {left:0,zIndex:0}, {left:0,zIndex:10},.1)
  .staggerFromTo('#interview2 .interview_content', .1, {display:'none'}, {display:'block'},.1)
  .staggerFromTo('#interview2 .interview_navi',.1, {display:'none'}, {display:'block'},.1)
  .staggerFromTo('#interview1', .1, {left:0}, {left:-l2}, .1)
  .staggerFromTo('#interview2 .interview_cover', .1, {visibility:'visible',opacity:1, ease: Elastic.easeInOut.config(1, 0.5)}, {visibility:'hidden',opacity:0, ease: Elastic.easeInOut.config(1, 0.5)},.1)
  .staggerFromTo('#interview2 .interview_arrow', .1, {width:'100%',opacity:0,visibility:'hidden',left:'50%', ease: Elastic.easeInOut.config(1, 0.5)}, { ease: Elastic.easeInOut.config(1, 0.5),width:'100%',opacity:1,visibility:'visible',left:0},.1)
  .staggerFromTo('#interview2 .interview_hover', .1, {visibility:'hidden',opacity:0, ease: Elastic.easeInOut.config(1, 0.5)}, {visibility:'visible',opacity:1, ease: Elastic.easeInOut.config(1, 0.5)},.1);
});

$('#interview3 .interview_face, #interview1 .prev-interview-arrow, #interview2 .next-interview-arrow').click(function(){
    var $this = $(this);
var tl = new TimelineMax()
  .staggerFromTo('#interview2', .1, {left:l2}, {left:l100}, .1)
  .staggerFromTo('#interview3', .1, {left:0,zIndex:0}, {left:0,zIndex:10},.1)
  .staggerFromTo('#interview3 .interview_content', .1, {display:'none'}, {display:'block'},.1)
  .staggerFromTo('#interview3 .interview_navi',.1, {display:'none'}, {display:'block'},.1)
  .staggerFromTo('#interview1', .1, {left:0}, {left:-l2}, .1)
  .staggerFromTo('#interview3 .interview_cover', .1, {visibility:'visible',opacity:1, ease: Elastic.easeInOut.config(1, 0.5)}, {visibility:'hidden',opacity:0, ease: Elastic.easeInOut.config(1, 0.5)},.1)
  .staggerFromTo('#interview3 .interview_arrow', .1, {width:'100%',opacity:0,visibility:'hidden',left:'50%', ease: Elastic.easeInOut.config(1, 0.5)}, { ease: Elastic.easeInOut.config(1, 0.5),width:'100%',opacity:1,visibility:'visible',left:0},.1)
  .staggerFromTo('#interview3 .interview_hover', .1, {visibility:'hidden',opacity:0, ease: Elastic.easeInOut.config(1, 0.5)}, {visibility:'visible',opacity:1, ease: Elastic.easeInOut.config(1, 0.5)},.1);
});

$('.close-interview-circle').click(function(){
  TweenMax.to(['.interview_navi', '.interview_content'], .5, {display:'none'});
  TweenMax.to('.interview_arrow', .5, {visibility:'hidden',opacity:0,width:'50%',left:'50%'});
  TweenMax.to('.interview_cover', .5, {visibility:'visible',opacity:1},.1);
  TweenMax.to('.interview_hover', .5, {visibility:'hidden',opacity:0});
  TweenMax.to('#interview1',.1, {left:0,zIndex:0});
  TweenMax.to('#interview2',.1, {left:l2,zIndex:0});
  TweenMax.to('#interview3',.1, {left:l3,zIndex:0});
});

/* drag slider */

function frontPageInitSelection($container){
    var $window = $(window),
        $wrapper = $container.find('.selection-wrapper'),
        $slider = $wrapper.find('.selection-slider'),
        $sliderInner = $wrapper.find('.selection-slider-inner'),
        $items=$sliderInner.children(),
        $dragger=$wrapper.find('.dragger'),
        $handle=$dragger.find('.handle'),
        slider,
        sliderSnap=[],
        draggerSnap=[],
        viewableItems=1,
        sliderWidth=0,
        sliderInnerWidth=0,
        itemWidth=0,
        dragger,
        handleWidth=40,
        tmpSliderX=0,
        items=[],
        draggerWidth=0,
        isActive=true;
    
    slider = Draggable.create(
        $sliderInner,{type:'x',dragClickables:true,bounds:$slider,throwProps:true,onDrag:sliderUpdateHandler,onThrowUpdate:sliderUpdateHandler}
    )[0];
    
    function sliderUpdateHandler(){
        tmpSliderX=this.x;
        updateEverything(-(this.x/(sliderInnerWidth-sliderWidth)),'slider');
    }
    
    dragger = Draggable.create($handle,{type:'x',dragClickables:true,bounds:$dragger,throwProps:true,maxDuration:3,onDrag:draggerUpdateHandler,onThrowUpdate:draggerUpdateHandler})[0];
    
    function draggerUpdateHandler(){
        updateEverything(this.x/(draggerWidth-handleWidth),'dragger');
    }

    function updateEverything(percent,source){
        if(source!=='dragger'){
            var handleTargetX=(draggerWidth-handleWidth)*-percent;TweenMax.set($handle,{x:-handleTargetX});
        }
        if(source!=='slider'){
            tmpSliderX=-(((sliderInnerWidth-(itemWidth*viewableItems)))*percent);
            TweenMax.set($sliderInner,{x:tmpSliderX});
        }
        updateItems();
    }
    
    function updateItems(){
        items.forEach(function(item,index){
            if(-Math.floor(item.offset+itemWidth)>=Math.ceil(tmpSliderX)&&!item.isLeft){
                item.isLeft = true;
                TweenMax.to(item.element,0.3,{x:-50,ease:Strong.easeIn});
            } else if(-(item.offset+itemWidth)<tmpSliderX&&item.isLeft){
                item.isLeft=false;
                TweenMax.to(item.element,0.3,{x:0,ease:Strong.easeOut});
            }
        });
    }

    function windowResizeHandler(){
        sliderWidth=$slider.width();
        sliderInnerWidth=$sliderInner.width();
        draggerWidth=$dragger.width();
        var wWidth=window.innerWidth;
        viewableItems=3;
        // itemWidth=sliderWidth/viewableItems;
        itemWidth=$('.cardItem').eq(0).width();
        TweenMax.set($items,{width:itemWidth,x:0});
        TweenMax.set($sliderInner,{x:0});
        TweenMax.set($handle,{x:0});
        var sliderOffset=$slider.offset().left;
        items=[];
        $items.each(function(){
            items.push({element:$(this),offset:$(this).offset().left-sliderOffset,isLeft:false,isRight:false});});
        sliderSnap=[];
        draggerSnap=[];
        var sliderRatio=((draggerWidth-handleWidth)/(sliderInnerWidth-sliderWidth));
        $sliderInner.children('.cardItem').each(function(index,item){
            var itemLeft=$(item).offset().left-sliderOffset;
            sliderSnap.push(-Math.min(itemLeft,sliderInnerWidth-sliderWidth));
            draggerSnap.push(Math.min(draggerWidth-handleWidth-1,itemLeft*sliderRatio));
        });
        slider.vars.snap=sliderSnap;
        dragger.vars.snap=draggerSnap;
        tmpSliderX=slider.x;
    }

    $window.on('extra:resize',windowResizeHandler);
    windowResizeHandler();

   
}

//
if($('#drag-slider').length == 1){
frontPageInitSelection($('#drag-slider'));
}

function upTween(e, hook){
     var $e = $(e);
     TweenMax.set($e, {opacity:0, y:40});
     // TweenMax.killTweensOf()
     $e.each(function(){
        var $this = this;
        var sectionTitTween = TweenMax.to($this, .8, {opacity:1, y:0});
        var sectionTitScene = new ScrollMagic.Scene({
            triggerElement: $this,
            triggerHook: hook
        })
        .setTween(sectionTitTween)
        .reverse(false)
        .addTo(controller);
});
}

// upTween('.institute_remark_icon','.institute_remark_icon');
// upTween('#institute_section .sub-title','#institute_section .sub-title');
// upTween('#institute_section p','#institute_section p');
// upTween('#institute_section h2','#institute_section h2');
upTween('.infoSVG span','.infoSVG span');
upTween('blockquote.quote','blockquote.quote');



var outerHandle = $('.handle .outer');
var innerHandle = $('.handle .inner');
var tweenDuration = .5;
var staggerDelay = tweenDuration * .5;
var handle = new TimelineMax({repeat:-1});
  handle.staggerFromTo(innerHandle, tweenDuration,{scale:2,ease:Linear.easeIn,opacity:.5}, {scale:1,ease:Linear.easeOut,opaicty:0},staggerDelay)
        .staggerFromTo(outerHandle, tweenDuration, {scale:1,ease:Linear.easeIn,opacity:.5}, {scale:2,ease:Linear.easeOut,opaicty:0},staggerDelay);


  var dragslider = $('.selection-slider');
  new ScrollMagic.Scene(
    {
      triggerElement: dragslider,
      triggerHook:0.5
    })
    .setTween(handle)
    .addTo(controller);

// var infoSVG = $('.infoSVG span');
// var infoSVGhandle = new TweenMax({repeat:-1,yoyo:true});
//    infoSVGhandle.to(infoSVG, tweenDuration, {y:'+=20',ease:Linear.easeInOut},staggerDelay);
//   new ScrollMagic.Scene(
//     {
//       triggerElement: infoSVG,
//       triggerHook:0.5
//     })
//     .setTween(infoSVGhandle)
//     .addTo(controller);