$(document).on('click', '.valentines-day', function (e) {
  $('.envelope').css({ 'animation': 'fall 3s linear 1', '-webkit-animation': 'fall 3s linear 1' });
  $('.envelope').fadeOut(800, function () {
    $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();

    $('#card').css({ 'visibility': 'visible', 'opacity': 0, 'transform': 'scale(0.1)' });
    $('#card').animate({ 'opacity': 1 }, {
      duration: 1000, step: function (now, fx) {
        var scale = 1 + Math.sin(now * Math.PI) * 0.1;
        $(this).css('transform', 'scale(' + scale + ')');
      }
    });
    $('.made-with-love a').text('Envolver');
    $('.made-with-love a').addClass('close');
  });
});
$(document).on('click', '.made-with-love a.close', function (e) {
  e.preventDefault();
  $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').animate({ height: 'toggle' });
  $('.envelope').css({ 'animation': 'fall 3s linear 1', '-webkit-animation': 'fall 3s linear 1' });
  $('.envelope').fadeIn(800);
  $('#card').animate({ 'opacity': 0 }, {
    duration: 1000, step: function (now, fx) {
      $(this).removeClass('.close');
      $('.made-with-love a').text('Con amor para Jocelyn');
    }
  });
});