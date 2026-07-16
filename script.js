const maleQuestions = [
    {
        question: "Какой у\u00A0тебя рост?",
        answers: [
            { text: "Ниже 152 см", score: 2 },
            { text: "152–165 см", score: 4 },
            { text: "166–175 см", score: 5 },
            { text: "Выше 175 см", score: 6 }
        ]
    },
    {
        question: "Каков твой возраст?",
        answers: [
            { text: "18–25 лет", score: 4 },
            { text: "26–30 лет", score: 5 },
            { text: "31–40 лет", score: 6 },
            { text: "41 год и\u00A0старше", score: 7 }
        ]
    },
    {
        question: "Как ты ведёшь себя в\u00A0трудностях?",
        answers: [
            { text: "Звоню братьям", score: 2 },
            { text: "Жду, пока старшие разберутся", score: 4 },
            { text: "Борюсь до\u00A0победного", score: 5 },
            { text: "Спокойно решаю вопрос", score: 6 }
        ]
    },
    {
        question: "Какой у\u00A0тебя цвет глаз?",
        answers: [
            { text: "Карий", score: 2 },
            { text: "Зелёный", score: 4 },
            { text: "Серый", score: 3 },
            { text: "Янтарный", score: 3 },
            { text: "Голубой", score: 4 },
            { text: "Чёрный", score: 2 }
        ]
    },
    {
        question: "Насколько ты трудолюбив?",
        answers: [
            { text: "Работаю так, что\u00A0верблюды отдыхают", score: 7 },
            { text: "Люблю быть при\u00A0деле", score: 6 },
            { text: "По настроению", score: 4 },
            { text: "Лучше полежу в\u00A0теньке", score: 2 }
        ]
    },
    {
        question: "Какое у\u00A0тебя образование?",
        answers: [
            { text: "Основное", score: 1 },
            { text: "Среднее профессиональное", score: 2 },
            { text: "Неоконченное высшее", score: 3 },
            { text: "Высшее", score: 4 },
            { text: "Ученая степень", score: 4 }
        ]
    },
    {
        question: "Как бы ты оценил своё финансовое положение?",
        answers: [
            { text: "Поставил самые высокие ворота в\u00A0селе", score: 7 },
            { text: "Могу оплатить учёбу в\u00A0КБГУ", score: 6 },
            { text: "На\u00A0большой такос хватает", score: 4 },
            { text: "Накопил на\u00A0махр, но\u00A0на\u00A0финик", score: 2 }
        ]
    },
    {
        question: "Какой образ жизни тебе ближе?",
        answers: [
            { text: "Спорт видел только по\u00A0телевизору", score: 2 },
            { text: "Иногда тренируюсь", score: 4 },
            { text: "Регулярно занимаюсь спортом", score: 5 },
            { text: "Профессиональный спортсмен", score: 6 },
            { text: "Поднимался на\u00A0Эльбрус (и\u00A0спустился)", score: 7 }
        ]
    },
    {
        question: "Насколько ты ответственный человек?",
        answers: [
            { text: "Всегда держу своё слово", score: 7 },
            { text: "Почти всегда", score: 6 },
            { text: "Иногда забываю обещания", score: 4 },
            { text: "Главное —\u00A0красиво пообещать", score: 2 }
        ]
    },
    {
        question: "Как бы ты оценил свое чувство юмора?",
        answers: [
            { text: "Отличное", score: 4 },
            { text: "Шутки заходят", score: 3 },
            { text: "Иногда получается", score: 2 },
            { text: "Мама говорит, что\u00A0смешной", score: 1 }
        ]
    }
];

const femaleQuestions = [
    {
        question: "Какой у\u00A0тебя рост?",
        answers: [
            { text: "Ниже 152 см", score: 2 },
            { text: "152-165 см", score: 5 },
            { text: "166-175 см", score: 6 },
            { text: "Выше 175 см", score: 4 }
        ]
    },

    {
        question: "Каков твой возраст?",
        answers: [
            { text: "18–25 лет", score: 7 },
            { text: "26–30 лет", score: 6 },
            { text: "31–40 лет", score: 4 },
            { text: "41 год и\u00A0старше", score: 2 }
        ]
    },

    {
        question: "Любишь\u00A0ли ты готовить?",
        answers: [
            { text: "Да, кухня —\u00A0моя стихия", score: 7 },
            { text: "Иногда, по\u00A0вдохновению", score: 6 },
            { text: "Могу, если очень надо", score: 4 },
            { text: "Доставка — моё всё", score: 2 }
        ]
    },

    {
        question: "Какое у\u00A0тебя образование?",
        answers: [
            { text: "Основное", score: 1 },
            { text: "Среднее профессиональное", score: 2 },
            { text: "Неоконченное высшее", score: 3 },
            { text: "Высшее", score: 4 },
            { text: "Ученая степень", score: 4 }
        ]
    },

    {
        question: "Какой у\u00A0тебя цвет глаз?",
        answers: [
            { text: "Карий", score: 2 },
            { text: "Зелёный", score: 4 },
            { text: "Серый", score: 3 },
            { text: "Голубой", score: 4 },
            { text: "Чёрный", score: 2 },
            { text: "Янтарный", score: 3 }
        ]
    },

    {
        question: "Какова длина твоих волос?",
        answers: [
            { text: "Очень короткие", score: 2 },
            { text: "Средние", score: 4 },
            { text: "Длинные", score: 5 },
            { text: "Лысая — зато практично", score: 0 }
        ]
    },

    {
        question: "Какое у\u00A0тебя телосложение?",
        answers: [
            { text: "Пышные формы", score: 6 },
            { text: "Стройное", score: 5 },
            { text: "Среднее", score: 4 },
            { text: "Спортивное", score: 2 }
        ]
    },

    {
        question: "Любишь\u00A0ли ты заниматься домашними делами?",
        answers: [
            { text: "Да, дома всё блестит", score: 7 },
            { text: "Люблю, когда есть настроение", score: 6 },
            { text: "По необходимости", score: 4 },
            { text: "Пыль сама себя не\u00A0замечает", score: 2 }
        ]
    },

    {
        question: "Какой у\u00A0тебя характер?",
        answers: [
            { text: "Добрая и\u00A0спокойная", score: 5 },
            { text: "Весёлая и\u00A0общительная", score: 4 },
            { text: "Настроение меняется чаще, чем погода в\u00A0Кенже", score: 3 },
            { text: "Лучше не\u00A0злить", score: 2 }
        ]
    },

    {
        question: "Любишь\u00A0ли ты заботиться о\u00A0близких?",
        answers: [
            { text: "Да, это мой язык любви", score: 6 },
            { text: "Конечно, но\u00A0без\u00A0фанатизма", score: 5 },
            { text: "Если попросят", score: 4 },
            { text: "Сначала пусть сами попробуют", score: 2 }
        ]
    }
];

let questions = [];

let currentQuestion = 0;
let score = 0;
let currentGender = "";

const screens = {
    start: document.getElementById("start-screen"),
    quiz: document.getElementById("quiz-screen"),
    loading: document.getElementById("loading-screen"),
    result: document.getElementById("result-screen")
};

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const counter = document.querySelector(".question-counter");
const progress = document.querySelector(".progress-bar");

const resultText = document.getElementById("result-text");
const camelResult = document.querySelector(".camel-result");
const camelImage = document.getElementById("camel-image");

const camelPrice = 50000;

function show(screen){

    Object.values(screens).forEach(s=>s.classList.remove("active"));

    screen.classList.add("active");

}

function startQuiz(type){

    currentGender = type;

    questions = type === "male"
        ? maleQuestions
        : femaleQuestions;

    currentQuestion = 0;
    score = 0;

    show(screens.quiz);

    renderQuestion();

}

function renderQuestion(){

    const q = questions[currentQuestion];

    counter.textContent = `Вопрос ${currentQuestion+1} из ${questions.length}`;

    progress.style.width =
        `${currentQuestion/questions.length*100}%`;

    question.textContent = q.question;

    answers.innerHTML = "";

    q.answers.forEach(answer=>{

        const button = document.createElement("button");

        button.textContent = answer.text;

        button.onclick = ()=>{

            score += answer.score;

            currentQuestion++;

            if(currentQuestion < questions.length){

                renderQuestion();

            }else{

                finishQuiz();

            }

        };

        answers.appendChild(button);

    });

}

function getCamelImage(score, gender) {

    if (gender === "male") {

        if (score <= 35) {
            return "img/camel-1.webp";
        }

        if (score <= 49) {
            return "img/camel-2.webp";
        }

        return "img/camel-3.webp";

    } else {

        if (score <= 35) {
            return "img/camel-4.webp";
        }

        if (score <= 49) {
            return "img/camel-5.webp";
        }

        return "img/camel-6.webp";
    }
}

function getCamelPrice(score){
    return score * camelPrice;
}

function finishQuiz(){

    progress.style.width = "100%";

    show(screens.loading);

    setTimeout(()=>{

    camelImage.src = getCamelImage(score, currentGender);

    const price = getCamelPrice(score);

    resultText.innerHTML = `
        <strong>Ты стоишь ${score} верблюдов</strong><br>
        это примерно ${price.toLocaleString("ru-RU")} ₽
    `;

    show(screens.result);

    },1500);

}

document
.getElementById("male-btn")
.onclick = ()=> startQuiz("male");

document
.getElementById("female-btn")
.onclick = ()=> startQuiz("female");

document
.getElementById("restart-btn")
.onclick = ()=> show(screens.start);