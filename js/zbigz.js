var objIframe = ''

function zbigz_insite(url, ref){
  var container = document.createElement('div') 
  container.innerHTML = '<iframe id="BruzzyDownloadWnd" src="//zbigz.com/insite/?tf='+base64_decode(url)+'&ref='+ref+'"'+'style="position:fixed; left:0px; top:0px; width:100%; height:100%; z-index:999"'+'scrolling=0>'+'</iframe>'
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
// Пропарсить наш месадж
msg = lastId.substring(lastHashIdx + 7); // lastHashIdx + strlen(’#myMsg’)

// Убрать месадж из урла
lastId = lastId.substring(0, lastHashIdx);
location.hash = lastId;

// Обработать месадж
if (msg == 'close') {
// TODO Handler here
objIframe.parentNode.removeChild(objIframe)


} else {
    //alert('хз' + msg);
}
}
}
}
setInterval(checkForMessages, 200);
