class questionCreate {
    constructor(ques, a, b, c, d, ans) {
        this.ques = ques;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.ans = ans;
    }
}
const question1 = new questionCreate("Q1 :What is programming?", "programming is fun", "a logical things that helps computer to do simple work", "nothing", "above all", "option-2")
const question2 = new questionCreate("Q2 :What is HTML?", "is my gf name", "a logical things", "a markup language", "i dont know", "option-3")
const question3 = new questionCreate("Q3 :What is software", "a soft things", "anything that is soft", "nothing", "a set of instructions", "option-4")
const question4 = new questionCreate("Q4 :What is  css?", "casing of style", "a selector", "cascading style sheet", "google knows", "option-3")
const question5 = new questionCreate("Q5 :What is react?", "a component", "a facebook component", "a school library", "a js library", "option-4")
const question6 = new questionCreate("Q6 :What is table tag inside html?", " where you can seat", " create a table inside html", "google knows", "above all", "option-2")
const question7 = new questionCreate("Q7 :What is boolean?", "my name", "a logical things", "truthy or falsy values", "answer is not here", "option-3")
const question8 = new questionCreate("Q8 :What is meta?", "zakarbargs wife", "a beauty parlour", "a html tag", "meta world", "option-3")
const question9 = new questionCreate("Q9 :What is head?", "why are you asking me ", "containg main information of the html", "my head", "head is nothing but a head", "option-2")
const questionBank = []
questionBank.push(question1, question2, question3, question4, question5, question6, question6, question7, question8, question9)
console.log(questionBank)

let question = document.querySelector("#question")
let option1 = document.querySelector("#option-1")
let option2 = document.querySelector("#option-2")
let option3 = document.querySelector("#option-3")
let option4 = document.querySelector("#option-4")
let options = document.querySelectorAll(".options")




let number = 0;
let score = 0;

function questionCreator() {
    let questionList = questionBank[number];
    question.innerText = questionList.ques;
    option1.innerText = questionList.a.toUpperCase();
    option2.innerText = questionList.b.toUpperCase();
    option3.innerText = questionList.c.toUpperCase();
    option4.innerText = questionList.d.toUpperCase();
}
questionCreator()


function userAns() {
    let ans;
    options.forEach((element) => {
        if (element.checked) {

            ans = element.nextElementSibling.id;
        }
    })
    return ans;
}

function clearInput() {
    options.forEach(element => element.checked = false)
}
clearInput()


let showBtn = document.querySelector("#show-btn")
showBtn.style.display = "none"
let submitBtn = document.querySelector("#submit")
submitBtn.addEventListener("click", function () {
    let questionList = questionBank[number];
    const userCheked = userAns();
    if (userCheked == questionList.ans) {
        score++;
        document.querySelector(".showAnswer").innerText = score;
    }
    number++
    clearInput()
    if (number < questionBank.length) {
        questionCreator()
    } else {
        showBtn.style.display = "block"
    }


})