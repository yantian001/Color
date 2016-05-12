

var isOverlap = true;
var isTest = false;
var mobid ={};
if (/(android)/i.test(navigator.userAgent)) {
mobid={
	bannerAdUnit:"ca-app-pub-4639863322045897/5089747962",
	intersititalAdUnit:"ca-app-pub-4639863322045897/8043214366"
  };
}
else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
//  alert('iOS');
mobid={
		bannerAdUnit:"ca-app-pub-4639863322045897/6706081969",
		intersititalAdUnit:"ca-app-pub-4639863322045897/8182815164"
  };
}

function init(){
	window.admob.setUp(mobid.bannerAdUnit,mobid.intersititalAdUnit,isOverlap,isTest);
	window.admob.onBannerAdPreloaded = bannerPreloaded;
	window.admob.onInterstitialAdPreloaded = intersitialPreloaded;
	window.admob.preloadBannerAd();
	window.admob.preloadInterstitialAd();
	//alert('msg');
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
