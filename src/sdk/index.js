export default {
    isApi: navigator.userAgent.indexOf('vue_apicloud') > 0 ? true : false,
    isPlus: navigator.userAgent.indexOf('Html5Plus') > 0 ? true : false,
    isAndroid: /android/gi.test(navigator.appVersion.toLocaleLowerCase())
}