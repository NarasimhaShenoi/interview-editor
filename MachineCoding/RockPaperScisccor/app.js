let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const sciscors_div = document.getElementById("s");
const smallUserWord = "user".fontsize(3).sub();
const smallComputerWord = "computer".fontsize(3).sub();

const getComputerChoice = () => {
    const choices = ["r", "p", "s"];
    const random_number = Math.floor(Math.random() * 3);
    return choices[random_number];
};

const convertToWord = (letter) => {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

const win = (userChoice, computerChoice) => {
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallComputerWord}. You win!!!`;
    userChoice_div.classList.add("green-glow");
    setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);
};

const loss = (userChoice, computerChoice) => {
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallComputerWord}. You lost!!!`;
    userChoice_div.classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
};

const draw = (userChoice, computerChoice) => {
    const userChoice_div = document.getElementById(userChoice);
    console.log("DRAW");
    userChoice_div.classList.add("gray-glow");
    setTimeout(() => userChoice_div.classList.remove("gray-glow"), 300);
}

const game = (userChoice) => {
    const computerChoice = getComputerChoice();
    switch(userChoice+computerChoice) {
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "ps":
        case "rp":
            loss(userChoice, computerChoice);
    }
};

const main = () => {
    rock_div.addEventListener("click", () => {
        game("r");
    });

    paper_div.addEventListener("click", () => {
        game("p");
    });

    sciscors_div.addEventListener("click", () => {
        game("s");
    });
};

main();
