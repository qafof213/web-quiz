
// let reader = new FileReader();
const fs = require('fs');

// Define the file path
const filePath = './m.txt';

// Read the file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});



// fetch("./m.txt")
//   .then(test => {
//     test.text()
//     test = test.toString().replace(/\n/g, '&');
//     console.log(test)

//     let i = 0;
//     let j = 0;
//     let answ = [];
//     let correct = '';

//     while (j < 400) {
//         let res = '';
//         let res1 = '';
//         let listt = [];
//         while (test[i] !== '•') {
//             if (test[i] === '√') {
//                 break;
//             }
//             console.log(test[i])
//             res += test[i];
//             i++;
//         }

//         listt.push(res);
//         res = '';
//         let count = 0;
//         i -= 2;
//         while (count !== 5) {
//             try {
//                 let nextAmpersand = test.indexOf('&', i + 1);
//                 res1 += test.substring(i + 1, nextAmpersand);
//                 i = nextAmpersand;

//                 if (res1.includes('√')) {
//                     res1 = ' •' + res1.slice(2);
//                     correct = res1;
//                 }

//                 listt.push(res1);
//                 res1 = '';
//                 count++;
//             } catch (error) {
//                 if (error instanceof RangeError) {
//                     // Handle the error if needed
//                 }
//             }
//         }
//         listt.push(correct);
//         answ.push(listt);
//         j++;
//     }
//     console.log(answ[0]);
// ;

// })


    








// const questions = [
//     {
//         question: answ[0],
//         answers: [
//             { text: "Cevap 1", correct: false },
//             { text: "Cevap 2", correct: false },
//             { text: "Cevap 3", correct: false },
//             { text: "Cevap 4", correct: true }
//         ]
//     },
//     {
//         question: "Soru 2?",
//         answers: [
//             { text: "Cevap 1", correct: false },
//             { text: "Cevap 2", correct: true },
//             { text: "Cevap 3", correct: false },
//             { text: "Cevap 4", correct: false }
//         ]
//     },
//     {
//         question: "Soru 3?",
//         answers: [
//             { text: "Cevap 1", correct: true },
//             { text: "Cevap 2", correct: false },
//             { text: "Cevap 3", correct: false },
//             { text: "Cevap 4", correct: false }
//         ]
//     },
//     {
//         question: "Soru 4?",
//         answers: [
//             { text: "Cevap 1", correct: true },
//             { text: "Cevap 2", correct: false },
//             { text: "Cevap 3", correct: false },
//             { text: "Cevap 4", correct: false }
//         ]
//     }
// ];


// const questionElement = document.getElementById("question");
// const answerButtons = document.getElementById("answer-buttons");
// const nextButton = document.getElementById("next-btn");

// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz() {
//     currentQuestionIndex = 0;
//     score = 0;
//     nextButton.innerHTML = "Next";
//     showQuestion();
// }

// function showQuestion() {
//     resetState();
//     let currentQuestion = questions[currentQuestionIndex];
//     let questionNo = currentQuestionIndex + 1;
//     questionElement.innerHTML = questionNo + ".  " + currentQuestion.question;

//     currentQuestion.answers.forEach(answer => {
//         const button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");
//         answerButtons.appendChild(button);
//         if (answer.correct) {
//             button.dataset.correct = answer.correct;
//         }
//         button.addEventListener("click", selectAnswer);
//     });
    
// }

// function resetState() {
//     nextButton.style.display = "none";
//     while (answerButtons.firstChild) {
//         answerButtons.removeChild(answerButtons.firstChild);
//     }
// }

// function selectAnswer(e) {
//     const selectedBtn = e.target;
//     const isCorrect = selectedBtn.dataset.correct === "true";
//     if (isCorrect) {
//         selectedBtn.classList.add("correct");
//         score++;
//     } else {
//         selectedBtn.classList.add("incorrect");
//     }
//     Array.from(answerButtons.children).forEach(button => {
//         if (button.dataset.correct === "true") {
//             button.classList.add("correct");
//         }
//         button.disabled = true;
//     });
//     nextButton.style.display = "block";
// }

// function showScore() {
//     resetState();
//     questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
//     nextButton.innerHTML = "Play Again";
//     nextButton.style.display = "block";
// }

// function handleNextButton() {
//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//         showQuestion();
//     }
//     else {
//         showScore();
//     }
// }

// nextButton.addEventListener("click", () => {
//     if (currentQuestionIndex < questions.length) {
//         handleNextButton();
//     }
//     else {
//         startQuiz();
//     }
// })

// startQuiz();



