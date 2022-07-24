console.log('Hello!');

$(document).ready(() => {
  $('.nav-ham').click(function(){
		$(this).toggleClass('open');
    $('.nav').toggleClass('show');
  });
});