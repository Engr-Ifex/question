let btn = document.querySelector('.submit')

let score = 0


btn.addEventListener('click', function showAnswer(){
    let answer1 = document.querySelector('.answer1');
    let answer2 = document.querySelector('.answer2');
    let answer3 = document.querySelector('.answer3');
    let answer4 = document.querySelector('.answer4');
    let show = document.querySelector('#show')
   


    if (answer1.value == 'male'){
        score = score + 25;

    }
    

    if (answer2.value == 'female'){
        score = score + 25;
    }


    if (answer3.value == 'man'){
        score = score + 25;
    }


    if (answer4.value == 'woman'){
        score = score + 25;
    }

show.innerHTML = score

    if(score == 0){
        document.querySelector('.para4').innerHTML = 'Bad';
        document.querySelector('.para5').innerHTML = 'This is really bad, try to read hard and take the test again';
    }

    if(score == 25){
        document.querySelector('.para4').innerHTML = 'Poor';
        document.querySelector('.para5').innerHTML = 'Your result is not encouraging at all, try to read hard and take the test again';
    }

    if(score == 50){
        document.querySelector('.para4').innerHTML = 'Average';
        document.querySelector('.para5').innerHTML = 'This is an average performance, put more effort at studying';
    }

    if(score == 75){
        document.querySelector('.para4').innerHTML = 'Very Good';
        document.querySelector('.para5').innerHTML = 'Your result is really good, But do not relent in studying';
    }

    if(score == 100){
        document.querySelector('.para4').innerHTML = 'Excellent';
        document.querySelector('.para5').innerHTML = 'This is an outstanding result, Keep up the good work.';
    }

})


let result = document.querySelector('.result');
let quest = document.querySelector('.quest');

btn.addEventListener('click', function showResult(){
    result.classList.add('show')

    quest.classList.add('noshow')
})
