var cbid ={};
//alert(navigator.userAgent);
if (/(android)/i.test(navigator.userAgent)) {
//  alert('android');
  cbid={
    appid:"571ca809f6cd4576ad57e66a",
    appSignature:"b35742e1cbcfaa867e1af241105377b11455888a"
  };
}
else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
//  alert('iOS');
  cbid={
    appid:"571ca77ff6cd4576b6e3b813",
    appSignature:"71f37ddab9c52f823b5fa93ab74ddf7612dc8b92"
  };
}

function cb_init()
{
  window.chartboost.setUp(cbid.appid,cbid.appSignature);
  window.chartboost.preloadInterstitialAd('Default');
  //window.chartboost.onInterstitialAdPreloaded = function(location){alert(location)};
  //alert('init chartboost');
}

function cb_show()
{
  window.chartboost.showInterstitialAd('Default');
}

var cb = {
  init:function()
  {

      window.chartboost.setUp(cbid.appid,cbid.appSignature);
      window.chartboost.onInterstitialAdPreloaded = this.onInterstitialAdPreloaded;
      this.preload();
      //alert('inti ios');
  },
  preload:function()
  {
    window.chartboost.preloadInterstitialAd('Default');
    window.chartboost.preloadMoreAppsAd('Default');
  },
  onInterstitialAdPreloaded:function(location)
  {
    alert('Chartboost intersitial ad proloaded on'+ location);
  },
  showInterstitialAd:function()
  {
    window.chartboost.showInterstitialAd('Default');
  }
}
