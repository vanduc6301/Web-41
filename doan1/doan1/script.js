let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();


function loadInfo(element, url) {
  let tooltip = element.querySelector(".tooltip");
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      tooltip.innerHTML = data;
      tooltip.style.display = "block"; // Hiện tooltip
    })
    .catch((error) => console.log("Lỗi tải trang: " + error));
}

function hideInfo(element) {
  let tooltip = element.querySelector(".tooltip");
  tooltip.style.display = "none"; // Ẩn tooltip
}