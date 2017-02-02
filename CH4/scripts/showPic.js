/**
 * Created by mouizumi on 2017/1/26.
 */
function showPic(whichPic) {
    if (!document.getElementById("placehold")) return false;

    var source = whichPic.getAttribute("href");
    var placeholder = document.getElementById("placehold");
    if(placeholder.nodeName != "IMG") return false;
    placeholder.setAttribute("src", source);
    if (document.getElementById("description")) {
        var text = whichPic.getAttribute("title")? whichPic.getAttribute("title"): " ";
        var description = document.getElementById("description");
        if(description.firstChild.nodeType == 3) {
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}



function prepareGallery(){
    if(!document.getElementsByTagName)  return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;

    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");

    for(var i=0;i<links.length;i++){
        links[i].onclick = function() {
            return !showPic(this);
        }
    }
}

addLoadEvent(prepareGallery);

function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else {
        window.onload = function(){
            oldonload();
            func();
        }
    }
}

