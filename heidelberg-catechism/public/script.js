
function unhide() {
  var hid = document.getElementsByClassName("exp");
  if(hid[0].offsetWidth > 0 && hid[0].offsetHeight > 0) {
    hid[0].style.visibility = "visible";
 }else{
  hid.style.visibility = "none";
 }
}


function unhide2() {
  var hid = document.getElementsByClassName("exp2");
  if(hid[0].offsetWidth > 0 && hid[0].offsetHeight > 0) {
    hid[0].style.visibility = "visible";
  }
}

function unhide3() {
  var hid = document.getElementsByClassName("exp3");
  if(hid[0].offsetWidth > 0 && hid[0].offsetHeight > 0) {
    hid[0].style.visibility = "visible";
  }
}