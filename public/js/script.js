
const quizForm = document.querySelector('.quiz');
const resultArea = document.querySelector('.result-area');
const largeQuestions = document.querySelectorAll('.large-questions');
const smallQuestions = document.querySelectorAll('.small-questions');
const calculatedAnswers = document.querySelectorAll('.calculated-answers');
const inputAnswers = document.querySelectorAll('.input-answers');
const answerLines = document.querySelectorAll('.answer-lines');
const ticks = document.querySelectorAll('.ticks');
const crosses = document.querySelectorAll('.crosses');
const result = document.querySelector('.result-area');
const btnSub = document.querySelector('.btn-sub');
const btnRes = document.querySelector('.btn-res');

let lefts = [];
let rights = [];
let multiplied = [];

function buildQuestions() {
    for (let index = 0; index < 15; index++) {
        lefts[index] = Math.floor(Math.random() * 86) + 13;
        rights[index] = Math.floor(Math.random() * 86) + 13;
        multiplied[index] = lefts[index] * rights[index];
    }    
    for (let i = 0; i < largeQuestions.length; i++) {
        
        largeQuestions[i].textContent = multiplied[i];
        smallQuestions[i].textContent = lefts[i];
        calculatedAnswers[i].textContent = rights[i];
    }    
      
}


quizForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let correctCount = 0;
 
    
    for (let i = 0; i < inputAnswers.length; i++) {

        if (inputAnswers[i].value == calculatedAnswers[i].textContent) {
            correctCount ++;
            
            ticks[i].style.display = "inline";
        } else {
            inputAnswers[i].style.background = "red";
            inputAnswers[i].style.color = "white";
            
            crosses[i].style.display = "inline";

        }
        inputAnswers[i].disabled = true;
        answerLines[i].style.display="block";
        
        
        
    }
    let displayCorrectCount = correctCount.toString();
    resultArea.style.display="block";
    btnSub.style.display="none";
    btnRes.style.display="inline-block";
    // result.querySelector('span').textContent = `${displayPercentage}`;
    result.querySelector('span').textContent = displayCorrectCount;
    
})

buildQuestions();
