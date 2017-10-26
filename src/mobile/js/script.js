// web font loader
if (typeof WebFont === 'object') {
  WebFont.load({
    custom: {
      families: ['Spoqa Han Sans'],
      urls: ['https://cdnjs.cloudflare.com/ajax/libs/spoqa-han-sans/2.1.1/css/SpoqaHanSans-kr.min.css']
    },
    google: {
      families: ['Roboto'],
      text: 'abcdefghijklmnopqrstuvwxyzCV'
    }
  });
}

$(function(){
  //
  // Video play
  //
  $('.video-play .play').on('click', function(e){
    e.preventDefault();
    $(this).hide().next('video')[0].play();
  });

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
  }); // 청담어학원 비디오
// src/html/mobile 에 있는  _institute.html, _april.html, _igarten.html 에서 video로 검색해서 
// style로 background 처리되어있는 포스터 이미지를 교체.
  //
  // Brand QnA / Interview
  //
  var $qna = $('.qna-list');
  if ($qna.length) {
    // 질문 누르면 답변 열고 닫기
    $qna.find('.q-link').on('click', function(e) {
      e.preventDefault();

      var $this = $(this);
      $this
        .parent('li').toggleClass('active') // 클릭 목록 활성화 토글
        .siblings('.active').removeClass('active'); // 기존 활성화 목록 비활성화
    });

    // 활성화 영역으로 스크롤하기
    $qna.find('.a-content').on('transitionend', function(){
      var $parent = $(this).parent();
      if ($parent.hasClass('active')) {
        $('html, body').stop().animate({scrollTop: $parent.offset().top - $('#roof').outerHeight()}, 500);
      }
    });
  }


});