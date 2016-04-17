cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/com.cranberrygame.phonegap.plugin.ad.admob/www/admob.js",
        "id": "com.cranberrygame.phonegap.plugin.ad.admob.admob",
        "clobbers": [
            "window.admob"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "clobbers": [
            "device"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.1",
    "com.google.playservices": "19.0.0",
    "com.cranberrygame.phonegap.plugin.ad.admob": "1.0.39",
    "cordova-plugin-device": "1.1.1"
};
// BOTTOM OF METADATA
});