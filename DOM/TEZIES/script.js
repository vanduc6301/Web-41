document.addEventListener("DOMContentLoaded", () => {
  function randomDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

  const dices = [
    { values: randomDice(), isFrozen: false },
    { values: randomDice(), isFrozen: false },
    { values: randomDice(), isFrozen: false },
    { values: randomDice(), isFrozen: false },
    { values: randomDice(), isFrozen: false },
    { values: randomDice(), isFrozen: false },
    { values: randomDice(), isFrozen: false },
    { values: randomDice(), isFrozen: false },
    { values: randomDice(), isFrozen: false },
    { values: randomDice(), isFrozen: false },
  ];
  //Lay nhung phan tu van thiet
  const container = document.querySelector(".dice-container");
  const btnStart = document.querySelector("#btnNewGame");
  const btnRoll = document.querySelector("#btnRoll");
  const currentRollDisplay = document.querySelector(".dice-score");
  const bestRollDisplay = document.querySelector(".best-score");
  const currentTimeDisplay = document.querySelector(".dice-time");
  const bestTimeRoll = document.querySelector(".best-time");
  //Khi dem, can bien du lieu de roll
  let rollCount = 0;
  let isWin = false;
  let timer;
  let elapsedTime = 0;
  let bestRoll = localStorage.getItem("bestRoll") || null;
  let bestTime = localStorage.getItem("bestTime") || null;
  // let count = 0; bestCount = 0, bestTime = 0;

  if (bestRoll) bestRollDisplay.textContent = bestRoll;
  if (bestTime) bestTimeRoll.textContent = formatTime(bestTime);

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  }

  function renderDices() {
    container.innerHTML = "";
    // rollCount.textContent = '';
    dices.forEach((dice, index) => {
      const div = document.createElement("div");
      div.classList.add("dice");
      div.textContent = dice.values;
      if (dice.isFrozen) {
        div.classList.add("frozen");
      }
      div.addEventListener("click", () => {
        if (!isWin) {
          dice.isFrozen = !dice.isFrozen;
          div.classList.toggle("frozen");
        }
      });
      container.appendChild(div);
    });
    //Hàm kiểm tra trạng thái thắng
    if (checkWin()) {
      isWin = true;
      btnStart.style.display = "block";
      btnRoll.style.display = "none";
      clearInterval(timer);
      playWinSound();
      // animate();
      if (!bestRoll || rollCount < bestRoll) {
        bestRoll = rollCount;
        bestRollDisplay.textContent = bestRoll;
        localStorage.setItem("bestRoll", bestRoll);
      }
      if (!bestTime || elapsedTime < bestTime) {
        bestTime = elapsedTime;
        bestTimeRoll.textContent = formatTime(bestTime);
        localStorage.setItem("bestTime", bestTime);
      }
    }
  }
  //Âm thanh khi win (hiệu ứng)
  function playWinSound() {
    const winSound = new Audio(
      "nhac_pk_win_pk_chien_thang-www_tiengdong_com.mp3"
    );
    winSound.play();
  }
  //Xử lý sự kiện
  btnStart.addEventListener("click", () => {
    isWin = false;
    rollCount = 0;
    elapsedTime = 0;
    currentRollDisplay.textContent = rollCount;
    currentTimeDisplay.textContent = formatTime(elapsedTime);

    dices.forEach((dice) => {
      dice.values = randomDice();
      dice.isFrozen = false;
    });
    btnStart.style.display = "none";
    btnRoll.style.display = "block";
    clearInterval(timer);
    timer = setInterval(() => {
      elapsedTime++;
      currentTimeDisplay.textContent = formatTime(elapsedTime);
    }, 1000);
    renderDices();
  });

  btnRoll.addEventListener("click", () => {
    if (!isWin) {
      dices.forEach((dice) => {
        if (!dice.isFrozen) {
          dice.values = randomDice();
        }
      });
      rollCount++;
      currentRollDisplay.textContent = rollCount;
      renderDices();
    }
  });
  // Hàm kiểm tra thắng
  function checkWin() {
    return dices.every(
      (dice) => dice.isFrozen && dice.values === dices[0].values
    );
  }
  renderDices();
});

//Đếm số lần roll(reset khi start game)
//Âm thanh khi win (hiệu ứng)
//Thời gian chơi (setInterval)
//lịch sử (giữ lại kể cả khi reload trang- local storage)

// //Thực hiện chức năng sau 1 khoảng thời gian nhưng lặp lại
// let timerId = setInterval(fn, time);
// crearInterval(timerId); //Dừng lặp lại
// //Thực hiện chứ năng sau một khoảng thời gian
// let timerId2 = setTimeout(fn, time);
// clearTimeout(timerId2);
