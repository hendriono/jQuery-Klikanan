/*!
 * jQuery Menu Klik Kanan - A replacer right-click menu on the browser with jQuery
 * Copyleft 2012, Blogger Tune-Up
 * http://modification-blog.blogspot.com/
 * http://www.twitter.com/bloggertuneup/
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * Date: Fri Jun 08 18:25:29 2012 -0500
 */
(function($)
{
	$.fn.klikanan = function(options) {

		var defaults = {
			speed: 400,
			overlay: true
		};

		var options = $.extend(defaults, options);
		
		return this.each(function ()
		{
			var elemen = $(this),
				menu = $('#menuKanan'),
				latar = $('#latarMenu'),
				lebar = $(window).width(),
				tinggi = $(window).height(),
				checkmenu = 1;
				menu.hide();
				elemen.on("contextmenu", function (pos)
				{
					checkmenu = 1;
					latar.css({
						'height': tinggi,
						'width': lebar
					});
					if (options.overlay == true){
						latar.animate({ opacity:"0.8" }, options.speed);
					}
					menu.show(options.speed);
					menu.css({
						'top': pos.pageY + 'px',
						'left': pos.pageX + 'px'
					});
					return false;
				}),
				latar.click(function ()
				{
					$(this).height(0);
					$(this).width(0);
					menu.hide(options.speed);
					if (options.overlay == true){
						latar.animate({ opacity:"0" }, options.speed);
					}
					checkmenu = 0;
					return false;
				}),
				latar.on("contextmenu", function ()
				{
					$(this).height(0);
					$(this).width(0);
					menu.hide(options.speed);
					checkmenu = 0;
					return false;
				}),
				elemen.load(function ()
				{
					$(window).on("resize", function ()
					{
						if (checkmenu == 1) {
							latar.css({
								'height': tinggi,
								'width': lebar,
							});
						}
					});
				});
		});
	};
})(jQuery);