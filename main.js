var homeBtn = document.querySelector('.home');
var menuBtn = document.querySelector('.menu');
var aboutBtn = document.querySelector('.about');

var mainContent = document.querySelector('.main-content');
var menuContent = document.querySelector('.menu-content');
var aboutContent = document.querySelector('.about-content');


homeBtn.addEventListener('click', function() {
mainContent.style.display = "block";
menuContent.style.display = "none";
aboutContent.style.display = "none";
});

menuBtn.addEventListener('click', function() {
    mainContent.style.display = "none";
    menuContent.style.display = "flex";
    aboutContent.style.display = "none";
});

aboutBtn.addEventListener('click', function() {
    mainContent.style.display = "none";
    menuContent.style.display = "none";
    aboutContent.style.display = "flex";
});





