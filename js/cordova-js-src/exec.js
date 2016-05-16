﻿//////////////////
// CORDOVA EXEC //
//////////////////
// IOS //
/////////
if (/(iPhone|iPad|iPod)/i.test(navigator.userAgent)) {
	function massageArgsJsToNative(e){if(!e||"Array"!=utils.typeName(e))return e;var a=[];return e.forEach(function(e,r){"ArrayBuffer"==utils.typeName(e)?a.push({CDVType:"ArrayBuffer",data:base64.fromArrayBuffer(e)}):a.push(e)}),a}function massageMessageNativeToJs(e){if("ArrayBuffer"==e.CDVType){var a=function(e){for(var a=new Uint8Array(e.length),r=0;r<e.length;r++)a[r]=e.charCodeAt(r);return a.buffer},r=function(e){return a(atob(e))};e=r(e.data)}return e}function convertMessageToArgsNativeToJs(e){var a=[];return e&&e.hasOwnProperty("CDVType")?"MultiPart"==e.CDVType?e.messages.forEach(function(e){a.push(massageMessageNativeToJs(e))}):a.push(massageMessageNativeToJs(e)):a.push(e),a}function iOSExec(){var e,a,r,n,t,o=null;if("string"==typeof arguments[0])throw new Error("The old format of this exec call has been removed (deprecated since 2.1). Change to: cordova.exec(null, null, 'Service', 'action', [ arg1, arg2 ]);");e=arguments[0],a=arguments[1],r=arguments[2],n=arguments[3],t=arguments[4],o="INVALID",t=t||[],(e||a)&&(o=r+cordova.callbackId++,cordova.callbacks[o]={success:e,fail:a}),t=massageArgsJsToNative(t);var c=[o,r,n,t];commandQueue.push(JSON.stringify(c)),isInContextOfEvalJs||1!=commandQueue.length||pokeNative()}function proxyChanged(){var e=cordovaExec();return execProxy!==e&&iOSExec!==e}function handleBridgeChange(){if(proxyChanged()){for(var e=commandQueue.shift();e;){var a=JSON.parse(e),r=a[0],n=a[1],t=a[2],o=a[3],c=cordova.callbacks[r]||{};execProxy(c.success,c.fail,n,t,o),e=commandQueue.shift()}return!0}return!1}function pokeNative(){return document.body?(execIframe&&execIframe.contentWindow?execIframe.contentWindow.location="gap://ready":(execIframe=document.createElement("iframe"),execIframe.style.display="none",execIframe.src="gap://ready",document.body.appendChild(execIframe)),void(failSafeTimerId=setTimeout(function(){commandQueue.length&&(handleBridgeChange()||pokeNative())},50))):void setTimeout(pokeNative)}function cordovaExec(){var e=require("cordova/exec"),a="function"==typeof e.nativeFetchMessages&&"function"==typeof e.nativeEvalAndFetch&&"function"==typeof e.nativeCallback;return a&&execProxy!==e?e:iOSExec}function execProxy(){cordovaExec().apply(null,arguments)}var cordova=require("cordova"),utils=require("cordova/utils"),base64=require("cordova/base64"),execIframe,commandQueue=[],isInContextOfEvalJs=0,failSafeTimerId=0;iOSExec.nativeFetchMessages=function(){if(failSafeTimerId&&(clearTimeout(failSafeTimerId),failSafeTimerId=0),!commandQueue.length)return"";var e="["+commandQueue.join(",")+"]";return commandQueue.length=0,e},iOSExec.nativeCallback=function(e,a,r,n,t){return iOSExec.nativeEvalAndFetch(function(){function t(){cordova.callbackFromNative(e,o,a,c,n)}var o=0===a||1===a,c=convertMessageToArgsNativeToJs(r);setTimeout(t,0)})},iOSExec.nativeEvalAndFetch=function(e){isInContextOfEvalJs++;try{return e(),iOSExec.nativeFetchMessages()}finally{isInContextOfEvalJs--}},execProxy.nativeFetchMessages=function(){return cordovaExec().nativeFetchMessages.apply(null,arguments)},execProxy.nativeEvalAndFetch=function(){return cordovaExec().nativeEvalAndFetch.apply(null,arguments)},execProxy.nativeCallback=function(){return cordovaExec().nativeCallback.apply(null,arguments)},module.exports=execProxy;
/////////////
// ANDROID //
/////////////
} else if (/Android/i.test(navigator.userAgent)) {
	//
///////////////////
// WINDOWS PHONE //
///////////////////
} else if (/IEMobile/i.test(navigator.userAgent) && !/MSApp/i.test(navigator.userAgent)) {
	//
///////////
// MSAPP //
///////////
} else if (/MSApp/i.test(navigator.userAgent)) {
	//
///////////////////
// BLACKBERRY 10 //
///////////////////
} else if (/BB10/i.test(navigator.userAgent)) {
	//
////
} //
////

