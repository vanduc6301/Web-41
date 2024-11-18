//Dữ liệu ban đầu
const songs = [
  {
    file: "music/HoangHonNhoSong24-AnhTuAtusGiGiHuongGiang.mp3",
    name: "Hoàng Hôn Nhớ ",
    artist: "Anh Tú - Hương Giang",
    img: "images/chungtacuahientai.jpg",
  },
  {
    file: "music/ChungTaCuaHienTai-SonTungMTP.mp3",
    name: "Chúng ta của hiện tại ",
    artist: "Sơn Tùng",
  },
  {
    file: "music/KhoVeNuCuoi-DatGDuUyen.mp3",
    name: "Khó Vẽ Nụ Cười ",
    artist: " Đạt G - Du Uyên",
  },
  {
    file: "music/SauLoiTuKhuocThemeSongFromMAI-PhanManhQuynh.mp3",
    name: "Sau Lời Từ Khước ",
    artist: "Phan Mạnh Quỳnh",
  },
  {
    file: "music/SuytNuaThi-Andiez.mp3",
    name: "Suýt Nữa Thì ",
    artist: "Andiez",
  },
  {
    file: "music/ThienLyOi-JackJ97.mp3",
    name: " Thiên Lý Ơi",
    artist: "JackJ97",
  },
  {
    file: "music/TungLa-VuCatTuong.mp3",
    name: " Từng Là ",
    artist: "Vũ Cát Tường",
  },
  {
    file: "music/YeuEmRatNhieu-HoangTon.mp3",
    name: " Yêu Em Rất Nhiều",
    artist: "Hoàng Tôn",
  },
];

let curentSongIndex = 0;

//Truy vấn các phần từ cân thao tác
const audio = new Audio();
const btnPlay = document.querySelector("#btnPlay");
const btnNetx = document.querySelector("#btnNext");
const btnPrev = document.querySelector("#btnPrev");
const songName = document.querySelector(".player_song-name");
const songArtist = document.querySelector(".player_song-artist");
const duration = document.querySelector("#duration");
const cuarationTime = document.querySelector(".player_duration-current");
const duarationTotal = document.querySelector(".player_duaration-total");
const volume = document.querySelector("#volume");
const player_volume = document.querySelector(".player-volume");
const btnReset = document.querySelector("#btnReset");
let songStatus = 0;
let isRepeat = false;
const listMusic = document.querySelector("#btn-list-music");
const songImage = document.querySelector(".box-dish img");
// ham cap nhat / hien thi du lieu len Dom
function setSong(song) {
  audio.src = song.file;
  audio.load();
  songName.textContent = song.name;
  songArtist.textContent = song.artist;
  // songImage.src = song.image;
}

//cap nhat hien thi lan dau

setSong(songs[curentSongIndex]);

//ham xu ly su kien
//-cap nhat du lie
//-hien thi du lieyu

btnPlay.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    songImage.classList.add("playing");
  } else {
    audio.pause();
    songImage.classList.remove("playing");
  }
});

audio.addEventListener("play", () => {
  btnPlay.classList.add("playing");
  songImage.classList.add("playing");
});

audio.addEventListener("pause", () => {
  btnPlay.classList.remove("playing");
  songImage.classList.remove("playing");
});

audio.addEventListener("loadedmetadata", () => {
  cuarationTime.textContent = formatTime(0);
  duration.max = audio.duration;
  duration.value = 0;
  duarationTotal.textContent = formatTime(audio.duration);
  volume.value = audio.volume;
});
audio.addEventListener("timeupdate", () => {
  cuarationTime.textContent = formatTime(audio.currentTime);
  duration.value = audio.currentTime;
});

duration.addEventListener("input", () => {
  audio.curentTime = duration.value;
});
listMusic.addEventListener("click", () => {
  curentSongIndex.classList.add("list");
});

//audio.volume; //0-1;
volume.addEventListener("input", () => {
  audio.volume = volume.value;
  if (audio.volume === 0) {
    player_volume.className = "volumechange off";
  } else if (audio.volume < 0.4) {
    player_volume.className = "volumechange min";
  } else if (audio.volume < 0.8) {
    player_volume.className = "volumechange med";
  } else if (audio.volume <= 1) {
    player_volume.className = "volumechange max";
  }
});
// if (audio.volume === 0) {
//   volumechange.classList.add("off");
//   volumechange.classList.remove("min");
//   volumechange.classList.remove("med");
//   volumechange.classList.remove("max");
// } else if (audio.volume < 0.4) {
//   volumechange.classList.remove("off");
//   volumechange.classList.add("min");
//   volumechange.classList.remove("med");
//   volumechange.classList.remove("max");
// } else if (audio.volume < 0.8) {
//   volumechange.classList.remove("off");
//   volumechange.classList.remove("min");
//   volumechange.classList.add("med");
//   volumechange.classList.remove("max");
// } else if (audio.volume < 1) {
//   volumechange.classList.remove("off");
//   volumechange.classList.remove("min");
//   volumechange.classList.remove("med");
//   volumechange.classList.add("max");
// }
// audio.addEventListener("input", () => {
//   audio.volumechange = volume.value;
// });
//volumechange
//click => toggele volume mute

function zeroPad(number) {
  return String(number).padStart(2, "0");
}

function formatTime(time) {
  const minuets = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${zeroPad(minuets)}:${zeroPad(seconds)}`;
}

//Chuyển tiếp, quay lại
btnNetx.addEventListener("click", () => {
  if (curentSongIndex >= songs.length - 1) {
    curentSongIndex = 0;
  } else {
    curentSongIndex++;
  }
  setSong(songs[curentSongIndex]);
  play.click();
});
btnPrev.addEventListener("click", () => {
  if (curentSongIndex <= 0) {
    curentSongIndex = songs.length - 1;
  } else {
    curentSongIndex--;
  }
  setSong(songs[curentSongIndex]);
  play.click();
});
btnReset.addEventListener("click", () => {
  if (isRepeat) isRepeat = false;
  else isRepeat = true;
});
// function loadPlaylist() {
//   songs.forEach((song, index) => {
//     const li = document.createElement("li");
//     li.textContent = `${song.name} - ${song.artist}`;
//     li.addEventListener("click", () => {
//       curentSongIndex = index;
//       setSong(songs[curentSongIndex]);
//       audio.play();
//     });
//     listMusic.appendChild(li);
//   });
// }
// loadPlaylist();
function loadPlaylist() {
  const musicList = document.getElementById("music-list");
  songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.textContent = `${song.name} - ${song.artist}`;
    li.addEventListener("click", () => {
      curentSongIndex = index;
      setSong(songs[curentSongIndex]);
      audio.play();
    });
    musicList.appendChild(li);
  });
}
loadPlaylist();

// Ẩn/Hiện danh sách bài hát
const btnListMusic = document.getElementById("btn-list-music");
const musicList = document.getElementById("music-list");

btnListMusic.addEventListener("click", () => {
  musicList.classList.toggle("show");
})