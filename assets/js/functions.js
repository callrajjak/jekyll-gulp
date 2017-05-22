$(function(){
  mentoringFaceClick();
});

function mentoringFaceClick()
{
  $('.face').on('click',function(){
    var vertPos = $(this).position().top;
    var vertMath = -1 * (vertPos - 230);
    var horizPos = $(this).position().left;
    var horizMath = 0 - horizPos;

    if($(window).width() < 640)
    {
      if ($(this).hasClass('back-btn'))
      {
        mentoringNarrowScreen();
      }
      else
      {
        $(this).parent().css("left", ""+horizMath +"px");
      }
    }
    else {
      $(this).parent().css("top", ""+vertMath +"px");
    }
    if(!$(this).hasClass('back-btn'))
    {
      $(this).addClass('has-bubble-open')
      .siblings().removeClass('has-bubble-open');
    }
  });

}

$(window).scroll(function(){
  youtubeVidScroll();
  startMentoring();
});

function youtubeVidScroll()
{
  var wScroll = $(window).scrollTop();
  $('.video-strip').css('background-position','center -'+ wScroll +'px');

}
function startMentoring()
{
  var wScroll = $(window).scrollTop();

  if($('section.mentoring').offset().top - 500 < wScroll)
  {
    if($(window).width() > 640)
    {
      $('.faces').addClass('launched');
      if(!$('.face').hasClass('has-bubble-open') && !$(this).hasClass('back-btn'))
      {
        setTimeout(function(){
          $('.face:nth-child(3)').addClass('has-bubble-open');
        },400);
      }
    }
    else
    {
        mentoringNarrowScreen();
    }
  }
}

function mentoringNarrowScreen()
{
  $('.faces').css({
    'top': '230px',
    'left': '0px'
  });

  $('.face').first().addClass('has-bubble-open')
  .siblings().removeClass('has-bubble-open');
}
function mentoringWideScreen()
{
  $('.faces').css({
    'top':'0px',
    'left':'0px'
  });

  $('.face:nth-child(3)').addClass('has-bubble-open').
  siblings().removeClass('has-bubble-open');
}


$(window).resize(function(){
  if($(window).width() > 640)
  {
    mentoringWideScreen();
  }
  else {
    mentoringNarrowScreen();
  }
});
