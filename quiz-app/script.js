const quizData = [
    {
        question: "Quel est le plus long fleuve du monde?",
        a: "le Nil",
        b: "la Seine",
        c: "la Volga",
        d: "l'Amazone",
        correct: "a",
    },
    {
        question: "Quelle est la plus grande ville du continent européen?",
        a: "Berlin",
        b: "Paris",
        c: "Londres",
        d: "Madrid",
        correct: "c",
    },
    {
        question: "Combien de pays arabes y a-t-il sur le continent africain?",
        a: "12",
        b: "8",
        c: "10",
        d: "9",
        correct: "d",
    },
    {
        question: "Combien de muscles dans le corps humain?",
        a: "550",
        b: "620",
        c: "820",
        d: "750",
        correct: "b",
    },
    {
        question: "Combien de dents un humain adulte a-t-il?",
        a: "25",
        b: "36",
        c: "32",
        d: "29",
        correct: "c",
    },
    {
        question: "Quel est le métal le plus cher?",
        a: "l'Or",
        b: "le Radium métal",
        c: "le Lithium métal",
        d: "le Palladium",
        correct: "b",
    },
    {
        question: "Quel est l’animal à mémoire le plus puissant au monde?",
        a: "L'Eléphant",
        b: "Le Singe",
        c: "Le Koala",
        d: "Le Chameau",
        correct: "d",
    },
    {
        question: "De quelle couleur est le sang d’une pieuvre?",
        a: "Rouge",
        b: "Vert",
        c: "Jaune",
        d: "Bleu",
        correct: "d",
    },
    {
        question: "Quel est le nombre d’yeux d’une abeille?",
        a: "5",
        b: "3",
        c: "2",
        d: "1",
        correct: "a",
    },
    {
        question: "Combien de couleurs l’œil humain distingue-t-il?",
        a: "32",
        b: "150 milles",
        c: "10 millions",
        d: "100 millions",
        correct: "c",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
