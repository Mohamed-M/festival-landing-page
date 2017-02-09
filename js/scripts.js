$( function(){

  $('.clock').countdown('2017/10/10', function(event) {
    var $this = $(this).html(event.strftime(''
      + '<li><p>%w</p><span>weeks</span></li>'
      + '<li><p>%d</p><span>days</span></li>'
      + '<li><p>%H</p><span>hr</span></li>'
      + '<li><p>%M</p><span>min</span></li>'
      + '<li><p>%S</p><span>sec</span></li>'
      )
    );
  });
});
