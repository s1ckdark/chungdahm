/*
* Scroll 관련 스크립트
*
* JS Dependencies
* - ScrollMagic: http://scrollmagic.io
*    - ScrollMagic.min.js
*    - animation.gsap.min.js
*    - debug.addIndicators.min.js
* - TweenMax: https://greensock.com
*    - TweenMax.min.js
* */

// ScrollMagic 컨트롤러
var controller = new ScrollMagic.Controller();

window.addEventListener('load', initScrollMagic);

function initScrollMagic() {
  // Scene 샘플
  // var scene = new ScrollMagic.Scene(
  //   {
  //     triggerElement: '#trigger,
  //     triggerHook: 0, // 'onLeave' 0, 'onCenter' 0.5, 'onEnter' 1
  //     duration: 100, // '100%' = screen height
  //     offset: -100,
  //   })
  //   .setTween('#target', 1, {width: 100, ease: Linear.easeNone})
  //   .setPin('#sample')
  //   .setClassToggle('#sample', 'active')
  //   .addTo(controller);

  // 4C 인재 텍스트 색상 채우기
  var $person4c = $('#person-4c-color');
  new ScrollMagic.Scene(
    {
      triggerElement: $person4c[0],
      offset: -50,
    })
    .setTween($person4c, .8, {width: '100%', ease: Linear.easeNone})
    .addTo(controller);

  // 로버트의 말 텍스트 색상 채우기
  var $robertQuote = $('#robert-quote');
  var $robertQuoteText = $robertQuote.find('.color');
  var rqTimeline = new TimelineMax()
    .to($robertQuoteText.eq(0), .8, {width: '100%'})
    .to($robertQuoteText.eq(1), 1.0, {width: '100%'})
    .to($robertQuoteText.eq(2), 1.5, {width: '100%'});
  new ScrollMagic.Scene(
    {
      triggerElement: $robertQuote[0]
    })
    .setTween(rqTimeline)
    .addTo(controller);

  // video
  var $video1 = $('#video-brand1');
  // var $video2 = $('#video-brand2');
  var $video3 = $('#video-igarten');
  var $video4 = $('#video-april');
  var $video5 = $('#video-institute');

  $video1.find('video').attr({
    'src': 'http://cf.c.ooyala.com/s0cW5nYzE6g8tOxwqdkBqKlGIhA8xQVh/DOcJ-FxaFrRg4gtDEwOjFyazowODE7G_',
    'controls':true,
    'controlsList':'nodownload',
    'preload':'auto',
    'loop':false,
    'poster': ''
  });

  // $video2.find('video').attr({
  //   'src': 'http://cf.c.ooyala.com/84cW5nYzE6_psmoDsuHmTCrGIUyISTyu/DOcJ-FxaFrRg4gtDEwOjFyazowODE7G_',
  //   'controls':true,
  //   'controlsList':'nodownload',
  //   'preload':'auto',
  //   'loop':false,
  //   'poster': ''
  // });
  $video3.find('video').attr({
    'src': 'http://cf.c.ooyala.com/dqdmk1ZDE6cnZ8mi4F1KSP3-VYhwLExi/DOcJ-FxaFrRg4gtDEwOjFyazowODE7G_',
    'controls':true,
    'controlsList':'nodownload',
    'preload':'auto',
    'loop':false,
    'poster': ''
  }); // igarten 비디오
  $video4.find('video').attr({
    'src': 'http://cf.c.ooyala.com/htdWk1ZDE60Ipabs-ST8O5t9Vnff3brB/DOcJ-FxaFrRg4gtDEwOjFyazowODE7G_',
    'controls':true,
    'controlsList':'nodownload',
    'preload':'auto',
    'loop':false,
    'poster': ''
  }); // april 비디오
  $video5.find('video').attr({
    'src': 'http://cf.c.ooyala.com/F2dmk1ZDE6PaTpmoKwaSLu9XqgM84Imm/DOcJ-FxaFrRg4gtDEwOjFyazowODE7G_',
    'controls':true,
    'controlsList':'nodownload',
    'preload':'auto',
    'loop':false,
    'poster': ''
  });  // 청담어학원 비디오
// src/html 에 있는  _institute.html, _april.html, _igarten.html 에서 video로 검색해서 
// style로 background 처리되어있는 포스터 이미지를 교체.

  // scroll auto play
  var $videos = $('.video-play');
  $videos.each(function(){
    var $this = $(this);
    var $videos = $this.find('video');
    new ScrollMagic.Scene(
      {
          triggerElement: this,
          duration: $this.height()
      })
      .on('enter leave', function(event){
        var $video = $this;
        var video = $video.find('video')[0];
        var timer;
        var isPlaying = video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;
        if (event.type === 'enter') {
          timer = setTimeout(function(){ // enter -> leave 이벤트 연속 발생시 play() 방지
            if (!isPlaying) {
              $video.find('.play').click(); // play
            }
          }, 600);
        } else {
          if (timer) {
            clearTimeout(timer);
          }
          if (isPlaying) {
            video.pause(); // pause
          }
        }
      })
      .addTo(controller);
  });
  // new ScrollMagic.Scene(
  //   {
  //     triggerElement: $video2[0],
  //     duration: $video2.height(),
  //   })
  //   .on('enter leave', function(event){
  //     var $video = $video2;
  //     var video = $video.find('video')[0];
  //     var timer;
  //     if (event.type === 'enter') {
  //       timer = setTimeout(function(){ // enter -> leave 이벤트 연속 발생시 play() 방지
  //         var isPlaying = video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;

  //         if (!isPlaying) {
  //           $video.find('.play').click(); // play
  //         }
  //       }, 300);
  //     } else {
  //       if (timer) {
  //         clearTimeout(timer);
  //       }
  //       if (video.played) {
  //         video.pause(); // pause
  //       }
  //     }
  //   })
  //   .addTo(controller);
    

  scrollToSection();
}

// Section Nav 링크 스크롤링
function scrollToSection () {
  $('.section-nav a, .brand-top-intro .link, .brand-identity a').on('click', function (e) {
    e.preventDefault();

    var id = $(this).attr('href');
    var $id = $(id);
    var newpos;

    if ($id.length > 0) {
      newpos = $id.offset().top - $('#roof').outerHeight(); // header가 내용을 가리지 않게 위치 조정

      $('html, body').stop().animate({scrollTop: newpos}, 500);

      // if supported by the browser we can even update the URL.
      // if (window.history && window.history.pushState) {
      //   history.pushState('', document.title, id);
      // }
    }
  });
}

$(function(){

});