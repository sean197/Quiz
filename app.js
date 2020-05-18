// Stored answers
// Each array is a value of input
const correctAnswers = ["A", "B", "B", "B"];

// Reference to the whole quiz-form
const form = document.querySelector(".quiz-form");

// Reference results
const result = document.querySelector(".result");

form.addEventListener("submit", function(e){
    // doesn't reload browser
   e.preventDefault();

   // Initialise score variable
let score = 0;

// Gets the answer user clicks
const userAnswers = [form.Q1.value, form.Q2.value, form.Q3.value, form.Q4.value];

// You can use forEach on an array
userAnswers.forEach(function(answer,index){
    // The equivalent index of correctAnswers
    if(answer === correctAnswers[index]){
        score+=25;
    }
});

//  Display results
scrollTo(0,0);
// Adds the text score of the user to UI
result.querySelector("span").textContent = `${score}%`; 

// Removes diplay: none style
result.removeAttribute("style");


})

