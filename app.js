let gameSqs = [];
let userSqs = [];
let colors = ["yellow", "red", "green", "blue"];

let h3 = document.querySelector("h3");
let h2 = document.querySelector("h2");

let clickCount = 0;
let level = 0;
let start = false;
let maxScore = 0;

let btns = document.querySelectorAll(".btn");
document.addEventListener("keypress", gameStart);

for (btn of btns) {
        btn.addEventListener("click", btnClick);
}

function gameStart() {
    if (start == false) {
        start = true;
        levelUp();
    }
}

function levelUp() {
    level++;
    userSqs = []; // resets the userSqs when level is increased.
    clickCount=0;

    let rdmIdx = Math.floor(Math.random() * 4);
    let btn = document.querySelector(`.${colors[rdmIdx]}`);
    gameSqs.push(colors[rdmIdx]);
    console.log(gameSqs); // this can be removed.
    gameFlash(btn);
    h3.innerText = `Level ${level}`;
}
function gameFlash(btn) {
    btn.classList.add("gameFlash");
    setTimeout(function () {
        btn.classList.remove("gameFlash");
    }, 250);
}
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250);
}
function btnClick() {
    if(start==true){
    clickCount++;
    userFlash(this);
    userSqs.push(this.id);
    setTimeout(chkSqs, 200);
    }

}
function chkSqs() {
    if (gameSqs[clickCount - 1] == userSqs[clickCount - 1]) {
        if (clickCount == gameSqs.length) {
            levelUp();
        }
    }
    else {
        h3.innerHTML = `GAME OVER! Your score is ${level-1}<br>Press any key to Restart.`;
        if(level>maxScore){
            maxScore=level-1;
        }
        h2.innerText = `Highest Score : ${maxScore}`;
        reset();
    }
}
function reset() {
    gameSqs = [];
    userSqs = [];
     clickCount = 0;
    level = 0;
     start = false;
}

