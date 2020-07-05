var xt = ""
var h3OK = 1
function checkErrorXML(x) {
  checkXML(x)
}

function checkXML(n) {
  var l, i, nam
  nam = n.nodeName
  if (nam == "h3") {
    if (h3OK == 0) {
      return;
    }
    h3OK = 0
  }
  if (nam == "#text") {
    xt = xt + n.nodeValue + "\n"
  }
  l = n.childNodes.length
  for (i = 0; i < l; i++) {
    checkXML(n.childNodes[i])
  }
}

export function validateXML(txt) {
// code for IE
  if (window.ActiveXObject) {
    var xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
    xmlDoc.async = false;
    xmlDoc.loadXML(document.all(txt).value);

    if (xmlDoc.parseError.errorCode != 0) {
      txt = "Error Code: " + xmlDoc.parseError.errorCode + "\n";
      txt = txt + "Error Reason: " + xmlDoc.parseError.reason;
      txt = txt + "Error Line: " + xmlDoc.parseError.line;
      alert(txt);
    } else {
      alert("No errors found");
    }
  }
// code for Mozilla, Firefox, Opera, etc.
  else if (document.implementation.createDocument) {
    var parser = new DOMParser();
    var text = txt;
    var xmlDoc = parser.parseFromString(text, "text/xml");

    if (xmlDoc.getElementsByTagName("parsererror").length > 0) {
      checkErrorXML(xmlDoc.getElementsByTagName("parsererror")[0]);
      return {valid: false, message: xt}
    } else {
      return {valid: true, message: 'No errors found'}
    }
  } else {
    alert('Your browser cannot handle XML validation');
  }
}