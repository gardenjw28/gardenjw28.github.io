var randomNumber = Math.floor(Math.random()*100) +1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
// querySelector 매소드(객체 안의 함수)로써, 특정한 정보를 가져오는 역할
// 브라우저 열어서 console창에 "guessField = ' hello'"라고 입력하면 페이지의 입력창에 hello가 뜸
// guesses.textContent = 'what?' => 만든 내용 밑에 what?이 나타남
// guesses.style.backgroundColor = 'pink' => what? 핑크색 박스
// guesses.style.fontSize = '200%' => what?이 커짐
// guesses.style.padding = '10px' => paddding 영역, 즉 핑크색 박스 상하좌우 공간이 생김
// guesses.style.boxShadow = '3px 3px 6px skyblue' => 핑크색 박스 아래, 오른쪽에 하늘색의 그림자 생성
var guessCount = 1;
var resetButton;
guessField. focus(); //페이지 열면 입력상자에 바로 커서가 되어 있게 

function checkGuess() {
  var userGuess = Number(guessField.value);
  if (guessCount ===1) {
    guesses.textcontent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = ' Congratulation!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!! Game Over!!!';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }

  guessCount++;
  guessField.value = ''; //공백으로 만들어줌
  guessField.focus(); //입력상자에 커서를 위치시키는 역할
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;

  var resetParas = document.querySelectorAll('.resultParas p'); //resultParas 밑의 p element들을 다 선택, 그래서 각각 배열 형태로 저장됨.

  for (var i = 0; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';

  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = ''; //입력상자 값 공란
  guessField.focus(); //입력상자에 커서

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) +1;
}