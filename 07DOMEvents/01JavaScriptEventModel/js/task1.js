function goSlide(direction) {
  var elements = document.getElementsByClassName("hide");
  var visible = get(elements);
  elements[visible].style.display = "none";
  if(!direction) {
      var show = prev(visible, elements.length);
  } else {
      var show = next(visible, elements.length);
  }
  elements[show].style.display = "block";
};

function get(elements) {
  var visible = -1;
  for(var i = 0; i < elements.length; i++) {
      if(elements[i].style.display == "block") {
          visible = i;
      }
  }
  return visible;
};

function prev(el, len) {
  if(el == 0) {
    return len-1;
  } else {
    return el-1;
  }
};

function next(el, len) {
  if(el == len-1) {
    return 0;
  } else {
    return el+1;
  }
};

setInterval("goSlide(1)", 4000);
