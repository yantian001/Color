
var bannerAdUnit = 'ca-app-pub-8295605020027148/3378986710';
var intersititalAdUnit='ca-app-pub-8295605020027148/4775531117';
var isOverlap = true;
var isTest = false;


function init(){
	window.admob.setUp(bannerAdUnit,intersititalAdUnit,isOverlap,isTest);
	window.admob.onBannerAdPreloaded = bannerPreloaded;
	window.admob.onInterstitialAdPreloaded = intersitialPreloaded;
	window.admob.preloadBannerAd();
	window.admob.preloadInterstitialAd();
}

function bannerPreloaded()
{
	//alert('banner loaded!');
	window.admob.showBannerAd('bottom-center', 'SMART_BANNER');
}

function intersitialPreloaded () {
	// body...
	//alert('intersitial preloaded');
	 window.admob.showInterstitialAd();
}

