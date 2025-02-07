const stars = document.querySelectorAll(".stars i");
console.log(stars);
stars.forEach((star, index1)=> {

    star.addEventlistener("click", () => {

        console.log("clicked");
        })
         
    });

document.getElementById("questionnaire-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("thank-you-message").style.display = "block";
    this.reset(); 
});

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const icon = button.querySelector('.toggle-icon');
        
        if (answer.style.display === "block") {
            answer.style.display = "none";
            icon.textContent = "+";
        } else {
            answer.style.display = "block";
            icon.textContent = "-";
        }
    });
});

document.getElementById("question-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let questionInput = document.getElementById("question-input").value;
    let questionList = document.getElementById("recent-questions-list");

    if (questionInput.trim() !== "") {
        let newQuestion = document.createElement("li");
        newQuestion.textContent = questionInput;
        questionList.appendChild(newQuestion);
        
        document.getElementById("question-input").value = "";
    }
});
