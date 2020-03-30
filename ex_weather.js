var s = document.querySelector('select');
var p = document.querySelector('p');

s.addEventListener('change',setWeather);

function setWeather(){
    var choice = s.value; //s의 value값을 chioce변수에 넣고 밑의 조건문 실행

    if(choice ==='sunny'){
        p.textContent = 'it is nice and sunny outside today';
    } else if (choice === 'rainy') {
        p.textContent = 'Rain is falling outside. take a rain coat and a brolly';
    } else {
        p.textContent = ' ';
    }
}

//브라우저에 select the choice 글씨 + plz choice 배너
//배너에서 선택하면 해당하는 choice의 문구 출력