function githubRedirect() {
    let userAnswer = prompt("Would you like to redirect?");
    let userAnswerLowercase = userAnswer.toLowerCase();
    if(userAnswerLowercase === "yes" || userAnswerLowercase === "") {
        window.location.href="https://github.com/Ultrabugs";
    }  
}

const bewgsyWaterMark = document.querySelector('.bewgsy');

bewgsyWaterMark.addEventListener('click', (githubRedirect));



 