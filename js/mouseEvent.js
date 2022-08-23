//smile-box1
const box1 = document.querySelector('.sm-box1');
box1.addEventListener("mouseover", function (event) {
    const box1h3 = document.querySelector('.sm-box1 h3');
    const box1img = document.querySelector('.sm-box1 img');
        box1h3.classList.add("h3-hover");
        box1img.classList.add('img-hover');
        box1h3.style.transition = ('all 0.8s ease-out');
        box1img.style.transition = ('all 0.4s ease-in-out');
}, false);

box1.addEventListener("mouseout", function (event) {
    const box1h3 = document.querySelector('.sm-box1 h3');
    const box1img = document.querySelector('.sm-box1 img');
        box1h3.classList.remove("h3-hover");
        box1img.classList.remove('img-hover');
}, false);


//smile-box2
const box2 = document.querySelector('.sm-box2');
box2.addEventListener("mouseover", function (event) {
    const box2h3 = document.querySelector('.sm-box2 h3');
    const box2img = document.querySelector('.sm-box2 img');
        box2h3.classList.add("h3-hover");
        box2img.classList.add('img-hover');
        box2h3.style.transition = ('all 0.8s ease-out');
        box2img.style.transition = ('all 0.4s ease-in-out');
}, false);

box2.addEventListener("mouseout", function (event) {
    const box2h3 = document.querySelector('.sm-box2 h3');
    const box2img = document.querySelector('.sm-box2 img');
        box2h3.classList.remove("h3-hover");
        box2img.classList.remove('img-hover');
}, false);


//smile-box3
const box3 = document.querySelector('.sm-box3');
box3.addEventListener("mouseover", function (event) {
    const box3h3 = document.querySelector('.sm-box3 h3');
    const box3img = document.querySelector('.sm-box3 img');
        box3h3.classList.add("h3-hover");
        box3img.classList.add('img-hover');
        box3h3.style.transition = ('all 0.8s ease-out');
        box3img.style.transition = ('all 0.4s ease-in-out');
}, false);

box3.addEventListener("mouseout", function (event) {
    const box3h3 = document.querySelector('.sm-box3 h3');
    const box3img = document.querySelector('.sm-box3 img');
        box3h3.classList.remove("h3-hover");
        box3img.classList.remove('img-hover');
}, false);


//smile-box4
const box4 = document.querySelector('.sm-box4');
box4.addEventListener("mouseover", function (event) {
    const box4h3 = document.querySelector('.sm-box4 h3');
    const box4img = document.querySelector('.sm-box4 img');
        box4h3.classList.add("h3-hover");
        box4img.classList.add('img-hover');
        box4h3.style.transition = ('all 0.8s ease-out');
        box4img.style.transition = ('all 0.4s ease-in-out');
}, false);

box4.addEventListener("mouseout", function (event) {
    const box4h3 = document.querySelector('.sm-box4 h3');
    const box4img = document.querySelector('.sm-box4 img');
        box4h3.classList.remove("h3-hover");
        box4img.classList.remove('img-hover');
}, false);


//smile-box5
const box5 = document.querySelector('.sm-box5');
box5.addEventListener("mouseover", function (event) {
    const box5h3 = document.querySelector('.sm-box5 h3');
    const box5img = document.querySelector('.sm-box5 img');
        box5h3.classList.add("h3-hover");
        box5img.classList.add('img-hover');
        box5h3.style.transition = ('all 0.8s ease-out');
        box5img.style.transition = ('all 0.4s ease-in-out');
}, false);

box5.addEventListener("mouseout", function (event) {
    const box5h3 = document.querySelector('.sm-box5 h3');
    const box5img = document.querySelector('.sm-box5 img');
        box5h3.classList.remove("h3-hover");
        box5img.classList.remove('img-hover');
}, false);


//smile-box6
const box6 = document.querySelector('.sm-box6');
box6.addEventListener("mouseover", function (event) {
    const box6h3 = document.querySelector('.sm-box6 h3');
    const box6img = document.querySelector('.sm-box6 img');
        box6h3.classList.add("h3-hover");
        box6img.classList.add('img-hover');
        box6h3.style.transition = ('all 0.8s ease-out');
        box6img.style.transition = ('all 0.4s ease-in-out');
}, false);

box6.addEventListener("mouseout", function (event) {
    const box6h3 = document.querySelector('.sm-box6 h3');
    const box6img = document.querySelector('.sm-box6 img');
        box6h3.classList.remove("h3-hover");
        box6img.classList.remove('img-hover');
}, false);


//insta1 
const insta1 = document.querySelector(".insta1");
const instaImg1 = document.querySelector(".insta-img1");
const instaImgHover1 = document.querySelector(".insta-hover-img1");
insta1.addEventListener('mouseover', function(event){
    instaImgHover1.classList.add("insta-hover-img-active");
    instaImgHover1.style.transition = "all 0.8s ease-out";


}, false);
insta1.addEventListener('mouseout', function(event){
    instaImgHover1.classList.remove("insta-hover-img-active");
}, false);

//insta2
const insta2 = document.querySelector(".insta2");
const instaImgHover2 = document.querySelector(".insta-hover-img2");
insta2.addEventListener('mouseover', function(event){
    instaImgHover2.classList.add("insta-hover-img-active");
    instaImgHover2.style.transition = "all 0.8s ease-out";


}, false);
insta2.addEventListener('mouseout', function(event){
    instaImgHover2.classList.remove("insta-hover-img-active");
}, false);
//insta3 
const insta3 = document.querySelector(".insta3");
const instaImgHover3 = document.querySelector(".insta-hover-img3");
insta3.addEventListener('mouseover', function(event){
    instaImgHover3.classList.add("insta-hover-img-active");
    instaImgHover3.style.transition = "all 0.8s ease-out";


}, false);
insta3.addEventListener('mouseout', function(event){
    instaImgHover3.classList.remove("insta-hover-img-active");
}, false);

