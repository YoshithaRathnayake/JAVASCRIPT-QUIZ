// User Name

UserName = prompt("Hi, I am Yoshitha Rathnayake. What is your name?");
alert("Hello, " + UserName + " Welcome to my Quiz that I made using JavaScript (Language).");


// Quiz

function Quiz() {

    // Question 1

    let question1 = prompt("1. What is the highest mountain in the world?");
    let answer1 = "Mount Everest";
    if (question1 == answer1) {
        alert("Great! You are correct. 2 marks. Next >");
    } else {
        alert("You are wrong!. Answer : Mount Everest");
    }


    // Question 2

    let question2 = prompt("2. What is the longest river in the world?");
    let answer2 = "Nile River";
    if (question2 == answer2) {
        alert("Well done! You are correct. 2 marks. Next >");
    } else {
        alert("You are wrong! Answer : Nile River");
    }


    // Question 3

    let question3 = prompt("3. What is the deepest point on the Earth?");
    let answer3 = "Mariana Trench";
    if (question3 == answer3) {
        alert("Great! You are correct. 2 marks. Next >");
    } else {
        alert("You are wrong! Answer : Mariana Trench");
    }


    // Question 4

    let question4 = prompt("4. What is the largest continent in the world?");
    let answer4 = "Asia";
    if (question4 == answer4) {
        alert("Well done! You are correct. 2 marks. Next >");
    } else {
        alert("You are wrong! Answer : Asia");
    }


    // Question 5

    let question5 = prompt("5. What is the biggest desert in the world?");
    let answer5 = "Sahara Desert";
    if (question5 == answer5) {
        alert("Great! You are correct. 2 marks.");
    } else {
        alert("You are wrong! Answer : Sahara Desert");
    }

}
