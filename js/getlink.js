var objIframe = ''

function getudemy_file(url, ref){
  var container = document.createElement('div') 
  container.innerHTML = '<iframe id="BruzzyDownloadWnd" src="//zbigz.com/insite/?tf=magnet:?xt=urn:btih:'+encodeURIComponent(url)+'&ref='+ref+'"'+'style="position:fixed; left:0px; top:0px; width:100%; height:100%; z-index:999"'+'scrolling=0>'+'</iframe>'
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
