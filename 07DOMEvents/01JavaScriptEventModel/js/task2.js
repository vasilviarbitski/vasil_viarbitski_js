var tasks = [];

function get (){
var value = document.querySelector('[type=text]').value;
if (value.length>0){
  tasks.push(value);
  }
document.querySelector('[type=text]').value = '';
show();
}﻿;

function show(){
  var todo = '';
  if (tasks.length>0){
    for(var i=0; i<tasks.length;i++){
      if (tasks[i] != undefined){
    todo+='<div><button class="remove" onclick="delUl('+i+')" id="' + i  + '"> - </button>'+(i+1)+'. '+ tasks[i] +'</div>';
    }
    }
    document.querySelector('[class=todo]').innerHTML = todo;
    unHide();
  }
};

function delUl(that){
  var ele = document.getElementById(that);
  ele.parentNode.remove();
  delete tasks[that];
};

function hide (){
  var unHide = document.querySelector('[name=unHide]');
  var btn = document.querySelector('[name=hide]');
  var toHide = document.querySelector('[class=todo]');
  toHide.style.display = 'none';
  btn.style.display = 'none';
  unHide.style.display = 'block';
};

function unHide (){
  var unHide = document.querySelector('[name=unHide]');
  var btn = document.querySelector('[name=hide]');
  var toUnHide = document.querySelector('[class=todo]');
  toUnHide.style.display = 'block';
  btn.style.display = 'block';
  unHide.style.display = 'none';
};
