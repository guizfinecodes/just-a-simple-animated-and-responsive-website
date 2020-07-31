


//guiz preloader
$(document).ready(function(){
	//preloader now
	preloaderFadeOutTime = 900;
	function hidePreloader(){
		var Preloader = $('.spinner-wrapper');
		Preloader.fadeOut(preloaderFadeOutTime);

	}
	hidePreloader();
});