var slide = $('.carousel').carousel({
    dist:0,
    padding:20,
    indicators:true
  });
  //slide.carousel('next');
  $('.controls .prev').click(function(){
    slide.carousel('prev');
  });
  $('.controls .next').click(function(){
    slide.carousel('next');
  });