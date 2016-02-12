var pContainerHeight = $('.bird-box').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('.back-bird').css({
      'transform' : 'translate(0px, -'+ wScroll/50 +'%)'
    });

    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll/3.5 +'%)'
    });

    $('.fore-bird').css({
      'transform' : 'translate(0px, -'+ wScroll /80 +'%)'
    });

  }

});
