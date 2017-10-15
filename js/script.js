;(function($){
	$(document).ready(function(){
		$('#mobile-btn').on('click', function(){


			var $nav = $('.ba-header__menu');


			if ($nav.css('top') === '0px') {
				$nav.css({top: '-100%', bottom: '100%'});
				$('body').css('overflow', 'scroll')
			} else {
				$nav.css({top:'0', bottom:'0'});
				$('body').css ('overflow', 'hidden');
			}

		});

		$(window).on('resize', function(){
			if ($(this).width() > 768){
				$('body').css('overflow', 'scroll');
			}
		});

		$(window).on('scroll', function(){
			if ($(this).scrollTop() > $(this).height()){

				$('.ba-header__mobile-overlay').fadeIn();
		} else {

				$('.ba-header__mobile-overlay').fadeOut();
		}
		});
	});
})(jQuery);
