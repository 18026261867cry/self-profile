let questions = [
    {
        question: "What is the capital of France?",
        options: ["A. London", "B. Paris", "C. Rome", "D. Berlin"],
        answer: "B"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["A. Mars", "B. Venus", "C. Jupiter", "D. Saturn"],
        answer: "A"
    },
    // Add more questions here
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let answer=0;
let startTime, endTime;
let timerInterval; // 新增的计时器变量
let myname='';
let totalTime=0;
const users = [
    { username: "User1", correctAnswers1: 3, totalTime1: 25 },
    { username: "User2", correctAnswers1: 2, totalTime1: 20 },
    { username: "User3", correctAnswers1: 4, totalTime1: 30 }
];

function startQuiz() {
    myname = document.getElementById("username").value;
    if (!myname) {
        alert("请输入用户名！");
        return;
    }

    document.getElementById("start-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";

    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").innerHTML = question.question;
    
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = ""; // 清空之前的选项

    question.options.forEach((option, index) => {
        const optionLabel = document.createElement("label");
        const optionInput = document.createElement("input");
        optionInput.type = "radio";
        optionInput.name = "option";
        optionInput.value = String.fromCharCode(65 + index); // 将选项值转换为对应的字母
        optionLabel.appendChild(optionInput);
        optionLabel.appendChild(document.createTextNode(option));
        optionsContainer.appendChild(optionLabel);
        optionsContainer.appendChild(document.createElement("br")); // 换行
    });
    
    startTimer();
}

function startTimer() {
    let timeLeft = 15;
    const timer = document.getElementById("timer");

    clearInterval(timerInterval); // 清除之前的计时器
    timerInterval = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeout();
            nextQuestion(); // 时间到后立即切换到下一题
        } else {
            timer.innerHTML = "倒计时: " + timeLeft + " 秒";
            timeLeft--;
        }
    }, 1000);
}



function handleTimeout() {
    
    nextQuestion();
}

function nextQuestion() {
    
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            endQuiz();
        }
    }    

    const selectedAnswer = selectedOption.value;
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedAnswer === correctAnswer) {
        correctAnswers++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }

    
}

function endQuiz() {
    endTime = new Date();
    totalTime = (endTime - startTime) / 1000;

    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";

    document.getElementById("correct-answers").innerHTML = "正确的数量: " + correctAnswers;
    document.getElementById("total-time").innerHTML = "总共答题所用的时间: " + totalTime + " 秒";
    users.push({ username: myname, correctAnswers1:correctAnswers , totalTime1: totalTime });

    updateLeaderboard(); // 调用更新排行榜函数
}




function updateLeaderboard() {
    // 此处根据你编写的用户数据和答题情况来更新排行榜
    // 这里简化为随机生成排行榜数据
    const leaderboard = document.getElementById("leaderboard");
    leaderboard.innerHTML = ""; // 清空排行榜

    

    // 根据正确数量和总用时排序排行榜
    users.sort((a, b) => {
        if (a.correctAnswers !== b.correctAnswers) {
            return b.correctAnswers - a.correctAnswers;
        } else {
            return a.totalTime - b.totalTime;
        }
    });

    // 将排行榜数据添加到页面上
    users.forEach(user => {
        const listItem = document.createElement("li");
        listItem.textContent = `${user.username}: ${user.correctAnswers1}题答对, 总用时${user.totalTime1}秒`;
        leaderboard.appendChild(listItem);
    });
}

window.onload = function() {
    startTime = new Date();
};