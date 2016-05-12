cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.cranberrygame.phonegap.plugin.ad.admob/www/admob.js",
        "id": "com.cranberrygame.phonegap.plugin.ad.admob.admob",
        "pluginId": "com.cranberrygame.phonegap.plugin.ad.admob",
        "clobbers": [
            "window.admob"
        ]
    },
    {
        "file": "plugins/cordova-plugin-ad-chartboost/www/chartboost.js",
        "id": "cordova-plugin-ad-chartboost.chartboost",
        "pluginId": "cordova-plugin-ad-chartboost",
        "clobbers": [
            "window.chartboost"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.cranberrygame.phonegap.plugin.ad.admob": "1.0.39",
    "com.google.playservices": "19.0.0",
    "cordova-plugin-ad-chartboost": "1.0.81",
    "cordova-plugin-device": "1.1.1",
    "cordova-plugin-whitelist": "1.2.1",
    "cordova-plugin-splashscreen": "3.2.2",
    "cordova-plugin-statusbar": "2.1.3"
}
// BOTTOM OF METADATA
});