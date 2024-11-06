//Dữ liệu ban đầu
function randomDice() {
  return Math.floor(Math.random() * 6) + 1;
}
let dices = [
  {
    value: randomDice(),
    isFrozen: false,
  },
  {
    value: randomDice(),
    isFrozen: false,
  },
  {
    value: randomDice(),
    isFrozen: false,
  },
  {
    value: randomDice(),
    isFrozen: false,
  },
  {
    value: randomDice(),
    isFrozen: false,
  },
  {
    value: randomDice(),
    isFrozen: false,
  },
  {
    value: randomDice(),
    isFrozen: false,
  },
  {
    value: randomDice(),
    isFrozen: false,
  },
  {
    value: randomDice(),
    isFrozen: false,
  },
  {
    value: randomDice(),
    isFrozen: false,
  },
];
let isWin = false;
let count = 0;
let time = 0;
let bestCount = Number(localStorage.getItem("bestCount"));
let bestTime = Number(localStorage.getItem("bestTime"));

//query cac phan tu can thiet
const container = document.querySelector(".dice-container");
const btnStart = document.querySelector("#btnStart");
const btnRoll = document.querySelector("#btnRoll");
const rollCount = document.querySelector(".dice-count .value");
const rollTime = document.querySelector(".dice-time .value");
const bestRollCount = document.querySelector(".dice-best-count .value");
const bestRollTime = document.querySelector(".dice-best-time .value");
let timerID;
// ham ap nhat hien thi du lieu tren DOM
function renderDices() {
  container.innerHTML = "";

  dices.forEach((dice, index) => {
    const div = document.createElement("div");
    div.classList.add("dice");
    div.textContent = dice.value;

    if (dice.isFrozen) {
      div.classList.add("frozen");
    }

    div.addEventListener("click", () => {
      if (isWin) {
      }
      dice[index].isFrozen = !dice[index].isFrozen;
      div.classList.toggle("frozen");

      if (!checkWin()) {
        isWin = true;
        clearInterval(timerID);
        if (bestCount) {
          bestCount = count;
          bestRollCount.textContent = bestCount;
        } else {
          if (count < bestCount) {
            bestCount = count;
          }
        }
        if (!bestTime) {
          bestTime = time;
          bestRollTime.textContent = formatTime(bestTime);
        }
        bestRollCount.textContent = bestCount;
        bestRollCount.textContent = btnRoll.style.display = "block";
        btnStart.style.display = "none";
        //phat am thanh
      }
    });

    container.appendChild(div);
  });
}
bestRollCount.textContent = bestCount;
bestRollTime.textContent = formatTime(bestTime);
renderDices();
function formatTime(number) {
  const hours = Math.floor(number / 3600);
  const minutes = Math.floor(number - hours * 3600) / 60;
  const seconds = number - hours * 3600 - minutes * 60;
  return `${zeroFill(hours)}:${zeroFill(minutes)}:${zeroFill(seconds)}`;
}
//Thực hiện chức năng sau hoảng thời gian lặp lại
// let timerID = setInterval(fn,time);
// clearInterval(timerID);
// //Thực hiện chức năng sau khoảng thời gian độ trể -delay
// setTimeout(fn,time);
localStorage.setItem;
localStorage.getItem;
localStorage.removeItem;

//su ly su kien
btnStart.addEventListener("click", () => {
  isWin = false;
  count = 0;
  time = 0;
  btnStart.style.display = "none";
  btnRoll.style.display = "block";

  dices.forEach((dice) => {
    dice.value = randomDice;
    dice.isFrozen = false;
  });

  rollCount.textContent = count;
  rollTime.textContent = formatTime(time);

  timerID = setInterval(() => {
    time++;
    rollTime.textContent = formatTime(time);
  }, 1000);
  renderDices();
});
btnRoll.addEventListener("click", () => {
  count++;
  dices.forEach((dice) => {
    if (!dice.isFrozen) {
      dice.value = randomDice;
    }
  });
  rollCount.textContent = count;
  rollDice();
  //   renderDices();
});

//ham su ly su kien
function rollDice() {
  dices.forEach((dice) => {
    if (!dice.isFrozen) {
      dice.value = randomDice;
    }
  });
}

function checkWin() {
  return dices.every((dice) => dice.isFrozen && dice.value === dices[0].value);
}

//Đếm Số lần Roll ( reset khi start game )
//Âm thanh khi win (hiệu ứng )
// Đếm thời gian chơi ( SetInterval , dừng và reset khi start game)
// Record score (giữ lại kể cả khi reload trang , localStoeage)
