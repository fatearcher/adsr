//main-box1
const mainBox1 = document.querySelector(".main-box1 img");
const subBox1_1 = document.querySelector(".sub-box1 div:nth-child(1)");
const subBox1_2 = document.querySelector(".sub-box1 div:nth-child(2)");
const subBox1_3 = document.querySelector(".sub-box1 div:nth-child(3)");

subBox1_1.addEventListener("click", function (event) {
  mainBox1.src = "../img/swaby1-1.jpg";
  subBox1_1.classList.add("color-box-active");
  subBox1_2.classList.remove("color-box-active");
  subBox1_3.classList.remove("color-box-active");
  mainBox1.style.transition = "all 0.4s ease-in-out";
  alert("click");
});
subBox1_2.addEventListener("click", function (event) {
  mainBox1.src = "../img/swaby1-2.jpg";
  subBox1_1.classList.remove("color-box-active");
  subBox1_2.classList.add("color-box-active");
  subBox1_3.classList.remove("color-box-active");
});
subBox1_3.addEventListener("click", function (event) {
  mainBox1.src = "../img/swaby1-3.jpg";
  subBox1_1.classList.remove("color-box-active");
  subBox1_2.classList.remove("color-box-active");
  subBox1_3.classList.add("color-box-active");
});

//main-box2
const mainBox2 = document.querySelector(".main-box2 img");
const subBox2_1 = document.querySelector(".sub-box2 div:nth-child(1)");
const subBox2_2 = document.querySelector(".sub-box2 div:nth-child(2)");
const subBox2_3 = document.querySelector(".sub-box2 div:nth-child(3)");

subBox2_1.addEventListener("click", function (event) {
  mainBox2.src = "../img/mute1-1.jpg";
  subBox2_1.classList.add("color-box-active");
  subBox2_2.classList.remove("color-box-active");
  subBox2_3.classList.remove("color-box-active");
});
subBox2_2.addEventListener("click", function (event) {
  mainBox2.src = "../img/mute1-2.jpg";
  subBox2_1.classList.remove("color-box-active");
  subBox2_2.classList.add("color-box-active");
  subBox2_3.classList.remove("color-box-active");
});
subBox2_3.addEventListener("click", function (event) {
  mainBox2.src = "../img/mute1-3.jpg";
  subBox2_1.classList.remove("color-box-active");
  subBox2_2.classList.remove("color-box-active");
  subBox2_3.classList.add("color-box-active");
});

//main-box3
const mainBox3 = document.querySelector(".main-box3 img");
const subBox3_1 = document.querySelector(".sub-box3 div:nth-child(1)");
const subBox3_2 = document.querySelector(".sub-box3 div:nth-child(2)");
const subBox3_3 = document.querySelector(".sub-box3 div:nth-child(3)");

subBox3_1.addEventListener("click", function (event) {
  mainBox3.src = "../img/satchmo1-1.jpg";
  subBox3_1.classList.add("color-box-active");
  subBox3_2.classList.remove("color-box-active");
  subBox3_3.classList.remove("color-box-active");
});
subBox3_2.addEventListener("click", function (event) {
  mainBox3.src = "../img/satchmo1-2.jpg";
  subBox3_1.classList.remove("color-box-active");
  subBox3_2.classList.add("color-box-active");
  subBox3_3.classList.remove("color-box-active");
});
subBox3_3.addEventListener("click", function (event) {
  mainBox3.src = "../img/satchmo1-3.jpg";
  subBox3_1.classList.remove("color-box-active");
  subBox3_2.classList.remove("color-box-active");
  subBox3_3.classList.add("color-box-active");
});

//main-box4
const mainBox4 = document.querySelector(".main-box4 img");
const subBox4_1 = document.querySelector(".sub-box4 div:nth-child(1)");
const subBox4_2 = document.querySelector(".sub-box4 div:nth-child(2)");
const subBox4_3 = document.querySelector(".sub-box4 div:nth-child(3)");

subBox4_1.addEventListener("click", function (event) {
  mainBox4.src = "../img/monk1-1.jpg";
  subBox4_1.classList.add("color-box-active");
  subBox4_2.classList.remove("color-box-active");
  subBox4_3.classList.remove("color-box-active");
});
subBox4_2.addEventListener("click", function (event) {
  mainBox4.src = "../img/monk1-2.jpg";
  subBox4_1.classList.remove("color-box-active");
  subBox4_2.classList.add("color-box-active");
  subBox4_3.classList.remove("color-box-active");
});
subBox4_3.addEventListener("click", function (event) {
  mainBox4.src = "../img/monk1-3.jpg";
  subBox4_1.classList.remove("color-box-active");
  subBox4_2.classList.remove("color-box-active");
  subBox4_3.classList.add("color-box-active");
});
//main-box5
const mainBox5 = document.querySelector(".main-box5 img");
const subBox5_1 = document.querySelector(".sub-box5 div:nth-child(1)");
const subBox5_2 = document.querySelector(".sub-box5 div:nth-child(2)");

subBox5_1.addEventListener("click", function (event) {
  mainBox5.src = "../img/holiday1-1.jpg";
  subBox5_1.classList.add("color-box-active");
  subBox5_2.classList.remove("color-box-active");
});
subBox5_2.addEventListener("click", function (event) {
  mainBox5.src = "../img/holiday1-2.jpg";
  subBox5_1.classList.remove("color-box-active");
  subBox5_2.classList.add("color-box-active");
});

//main-box6
const mainBox6 = document.querySelector(".main-box6 img");
const subBox6_1 = document.querySelector(".sub-box6 div:nth-child(1)");
const subBox6_2 = document.querySelector(".sub-box6 div:nth-child(2)");

subBox6_1.addEventListener("click", function (event) {
  mainBox6.src = "../img/lou1-1.jpg";
  subBox6_1.classList.add("color-box-active");
  subBox6_2.classList.remove("color-box-active");
});
subBox6_2.addEventListener("click", function (event) {
  mainBox6.src = "../img/lou1-2.jpg";
  subBox6_1.classList.remove("color-box-active");
  subBox6_2.classList.add("color-box-active");
});
