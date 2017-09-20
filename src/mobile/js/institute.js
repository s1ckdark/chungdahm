// /* institute */

 var $interview = $('.interview');

$interview.find('.interview_click').on('click', function(e) {
  e.preventDefault();
  var $this = $(this);
  console.log($this.parents('.interview').find('.interview_content'));
  if($this.hasClass('up')){
    TweenMax.to($this, 1, {className:'-=up'}); // 클릭 목록 활성화 토글
    TweenMax.to($this.parents('.interview').find('.interview_content'), .1, {display:'none',opactiy:0});
  } else {
    TweenMax.to($this, 1, {className:'+=up'});
    TweenMax.to($this.parents('.interview').find('.interview_content'), 1, {display:'block',opacity:1});
  }
});
