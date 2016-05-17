var manifest = chrome.runtime.getManifest();
var apiserver = manifest.homepage_url;
wscript = document.createElement('script');
wscript.src = "chrome-extension://" + chrome.i18n.getMessage('@@extension_id') + "/widget.js";
wscript.async = false;
document.head.appendChild(wscript);

console.log("reached content-script");