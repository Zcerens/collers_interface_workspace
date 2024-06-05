$(document).ready(function() {
    $('.btn-prev').click(function() {
      var leftPos = $('.love-us-container').scrollLeft();
      $(".love-us-container").animate({ scrollLeft: leftPos - 300 }, 800);
    });
  
    $('.btn-next').click(function() {
      var leftPos = $('.love-us-container').scrollLeft();
      $(".love-us-container").animate({ scrollLeft: leftPos + 300 }, 800);
    });
  });
  