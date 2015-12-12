var objIframe = ''
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

// Define the string
var string = encodeURIComponent(url);

// Decode the String
var decodedString = Base64.decode(string);

function data_insite(url, ref){
  var container = document.createElement('div') 
  container.innerHTML = '<iframe id="BruzzyDownloadWnd" src="//zbigz.com/insite/?tf='+console.log(decodedString)+'&ref='+ref+'"'+'style="position:fixed; left:0px; top:0px; width:100%; height:100%; z-index:999"'+'scrolling=0>'+'</iframe>'
  var rezultHtml = container.firstChild
  objIframe = rezultHtml
  document.body.appendChild(rezultHtml)
}

var lastId = '';
function checkForMessages(){
if (location.hash != lastId){
lastId = location.hash;
lastHashIdx = lastId.lastIndexOf('#myMsg');
if (lastHashIdx != -1) {
// ÐŸÑ€Ð¾Ð¿Ð°Ñ€ÑÐ¸Ñ‚ÑŒ Ð½Ð°Ñˆ Ð¼ÐµÑÐ°Ð´Ð¶
msg = lastId.substring(lastHashIdx + 7); // lastHashIdx + strlen(â€™#myMsgâ€™)

// Ð£Ð±Ñ€Ð°Ñ‚ÑŒ Ð¼ÐµÑÐ°Ð´Ð¶ Ð¸Ð· ÑƒÑ€Ð»Ð°
lastId = lastId.substring(0, lastHashIdx);
location.hash = lastId;

// ÐžÐ±Ñ€Ð°Ð±Ð¾Ñ‚Ð°Ñ‚ÑŒ Ð¼ÐµÑÐ°Ð´Ð¶
if (msg == 'close') {
// TODO Handler here
objIframe.parentNode.removeChild(objIframe)


} else {
    //alert('Ñ…Ð·' + msg);
}
}
}
}
setInterval(checkForMessages, 200);
