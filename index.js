const navbar = document.querySelector("nav");
const search_container = document.getElementsByClassName(
  "search-box-container"
)[0];
const search_button = document.getElementsByClassName("search-button")[0];
const user_button = document.getElementsByClassName("user")[0];
const form_close = document.getElementById("form-close");
const login_box = document.getElementsByClassName("login-box")[0];
const menu_btn = document.getElementById("menu-btn");
const close_btn = document.getElementById("close-btn");
const vid_buttons = document.querySelectorAll(".vid-btn");
const vid_container = document.getElementById("video-slider");

// console.log(search_container);

window.onscroll = function () {
  search_button.classList.remove("fa-times");
  search_container.classList.remove("active");
  navbar.style.top = "-10000%";
};

search_button.addEventListener("click", () => {
  search_button.classList.toggle("fa-times");
  search_container.classList.toggle("active");
});

user_button.addEventListener("click", () => {
  login_box.style.top = "0";
});
form_close.addEventListener("click", () => {
  login_box.style.top = "-1000px";
});

menu_btn.addEventListener("click", () => {
  navbar.style.top = "100%";
  menu_btn.style.display = "none";
  close_btn.style.display = "inline";
});

close_btn.addEventListener("click", () => {
  navbar.style.top = "-10000%";
  close_btn.style.display = "none";
  menu_btn.style = "inline";
});

console.log(vid_buttons.length);
console.log(vid_buttons[1]);

for (let i = 0; i < vid_buttons.length; i++) {
  vid_buttons[i].addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    vid_buttons[i].classList.add("active");
    let display_video = vid_buttons[i].getAttribute("data-src");
    vid_container.setAttribute("src", display_video);
  });
}

// var swiper = new Swiper(".mySwiper", {});
