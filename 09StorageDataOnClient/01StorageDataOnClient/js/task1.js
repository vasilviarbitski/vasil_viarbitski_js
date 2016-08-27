var names=[];
var scores=[];
var storedNames;
var storedScores;
localStorage.result = 0;
document.getElementById('player').value = '';
document.getElementById('try').innerHTML=('Try number : ' +localStorage.result);
document.getElementById('result').innerHTML=('Sheeps : 0 Rams : 0');

function clearLocalStorage(){
  localStorage.removeItem("names");
  localStorage.removeItem("scores");
  location.reload();
};

function randomInteger(min, max) {
    var rand = min-0.5+Math.random()*(max - min + 1)
    rand = Math.round(rand);
    return rand;
  };

function abcd(){
  localStorage.result = 0;
  document.getElementById('try').innerHTML=('Try number : ' +localStorage.result);
  document.getElementById('result').innerHTML=('Sheeps : 0 Rams : 0');
  document.getElementById('player').value = '';
  localStorage.a = randomInteger(1,9);
  localStorage.b = randomInteger(0,9);
  localStorage.c = randomInteger(0,9);
  localStorage.d = randomInteger(0,9);
  document.getElementById('comp').innerHTML =
  localStorage.a+localStorage.b+localStorage.c+localStorage.d;
};

function guess(){
  localStorage.result++;
  var playerGuess = document.getElementById('player').value;
  if (ramCheck(playerGuess)==4){
    document.getElementById('result').innerHTML=('Sheeps : '+sheepCheck(playerGuess)+' Rams : '+ ramCheck(playerGuess));
    document.getElementById('try').innerHTML=('You win on '+localStorage.result +' try');
    var ans = prompt('You win!!!! Whats your name?');
    names.push(ans);
    scores.push(localStorage.result);
    var oldNames = JSON.parse(localStorage.getItem('names')) || [];
    var oldScores = JSON.parse(localStorage.getItem('scores')) || [];
    oldNames.push(names);
    oldScores.push(scores);
    localStorage.setItem("scores", JSON.stringify(oldScores));
    localStorage.setItem("names", JSON.stringify(oldNames));
    names = [];
    scores = [];
    } else {
    document.getElementById('result').innerHTML=('Sheeps : '+sheepCheck(playerGuess)+' Rams : '+ ramCheck(playerGuess));
    document.getElementById('try').innerHTML=('Try number : ' +localStorage.result);
  }
};

function ramCheck(playerGuess){
  var ramCount=0;
  var _playerGuess = playerGuess;
  if (_playerGuess[0] == localStorage.a){
    ramCount++;
  };
  if (_playerGuess[1] == localStorage.b){
    ramCount++;
  };
  if (_playerGuess[2] == localStorage.c){
    ramCount++;
  };
  if (_playerGuess[3] == localStorage.d){
    ramCount++;
  };
  return ramCount;
};

function sheepCheck(playerGuess){
  var sheepCount=0;
  var _playerGuess = playerGuess;
  for (var i=0; i < _playerGuess.length;i++){
    if (_playerGuess[i]==localStorage.a){
      sheepCount++;
      break;
    };
    if (_playerGuess[i]==localStorage.b){
      sheepCount++;
      break;
    };
    if (_playerGuess[i]==localStorage.c){
      sheepCount++;
      break;
    };
    if (_playerGuess[i]==localStorage.d){
      sheepCount++;
      break;
    };
  };
  return sheepCount;
};

window.setInterval(function highScoreList () {
  if (localStorage.names){
storedNames = JSON.parse(localStorage.names);
storedScores = JSON.parse(localStorage.scores);
var allList='<table><tr><th>Name</th><th>Score</th></tr>';
for (var j = 0; j< storedNames.length;j++){
  allList+='<tr><td>'+storedNames[j]+'</td><td>'+storedScores[j]+'</td></tr>';
};
allList+='</table>';
document.getElementById('list').innerHTML = allList;
}
}, 1000);
