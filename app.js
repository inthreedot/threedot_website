// SearchIcon Trigger and Action
function openSearch() {
    document.querySelector('#search-container').style.position = "absolute";
    document.querySelector('#search-container').style.top = "0%";
    document.querySelector('#search-container').style.left = "50%";
    document.querySelector('#search-container').style.transform = "translateX(-50%)";
    document.querySelector('#search-container').style.display = "flex";
    document.querySelector('#search-container').style.animationName = "StartNavSearchFieldAnim";
    document.querySelector('#search-container').style.animationDuration = ".3s";
    document.querySelector('#search-container').style.animationTimingFunction = "linear";
    document.querySelector('#search-container').style.animationFillMode = "forwards";
    document.querySelector('.navbar-brand-logo').style.display = "none";
    document.querySelector('.navbar-container').style.display = "none";
}

function closeSearch() {
    document.querySelector('.search-container').style.display = "none";
    document.querySelector('.navbar-brand-logo').style.display = "block";
    document.querySelector('.navbar-container').style.display = "flex";
}

// Trigger Menu bar icon
function openMenu() {
    document.querySelector('body').style.overflow = "hidden";
    // document.querySelector('.carousel-indicators').style.zIndex = "-1";
    document.querySelector('#menuIcon').style.display = "none";
    document.querySelector('#closeIcon').style.display = "flex";
    document.querySelector('.navbar-menu-logo-search').style.borderBottom = "1px solid #d9d9d9";
    document.querySelector('#navBar-container').style.alignItems = "flex-start";
    document.querySelector('#navBar-container').style.justifyContent = "center";
    document.querySelector('#navBar-container').style.animationName = "navbarAnimForwards";
    document.querySelector('#navBar-container').style.animationDuration = ".3s";
    document.querySelector('#navBar-container').style.animationTimingFunction = "linear";
    document.querySelector('#navBar-container').style.animationFillMode = "forwards";
    document.querySelector('.navbar-lists').style.position = "absolute";
    document.querySelector('.navbar-lists').style.top = "60px";
    document.querySelector('.navbar-lists').style.display = "block";
    document.querySelector('.navbar-lists').style.width = "80%";
    document.querySelector('#nav-list-items').style.display = "flex";
    document.querySelector('#nav-list-items').style.flexDirection = "column";
    // Navbar List 'p' tag 
    document.querySelector('#list1').style.width = "100%";
    document.querySelector('#list1').style.borderBottom = "1px solid #d9d9d9";
    document.querySelector('#list1').style.padding = "7px 0px";
    // Navbar List 'p' tag 2
    document.querySelector('#list2').style.width = "100%";
    document.querySelector('#list2').style.borderBottom = "1px solid #d9d9d9";
    document.querySelector('#list2').style.padding = "7px 0px";
    // Navbar List 'p' tag 3
    document.querySelector('#list3').style.width = "100%";
    document.querySelector('#list3').style.borderBottom = "1px solid #d9d9d9";
    document.querySelector('#list3').style.padding = "7px 0px";
    // Navbar List 'p' tag 4
    document.querySelector('#list4').style.width = "100%";
    document.querySelector('#list4').style.padding = "7px 0px";
    // Navbar List item 'a' tag 1
    document.querySelector('#item1').style.width = "100%";
    document.querySelector('#item1').style.textAlign = "left";
    // Navbar List item 'a' tag 2
    document.querySelector('#item2').style.width = "100%";
    document.querySelector('#item2').style.textAlign = "left";
    // Navbar List item 'a' tag 3
    document.querySelector('#item3').style.width = "100%";
    document.querySelector('#item3').style.textAlign = "left";
    // Navbar List item 'a' tag 4
    document.querySelector('#item4').style.width = "100%";
    document.querySelector('#item4').style.textAlign = "left";

}


function closeMenu() {
    document.querySelector('body').style.overflow = "visible";
    // document.querySelector('.carousel-indicators').style.zIndex = "1";
    document.querySelector('#menuIcon').style.display = "flex";
    document.querySelector('#closeIcon').style.display = "none";
    document.querySelector('.navbar-menu-logo-search').style.borderBottom = "none";
    document.querySelector('#navBar-container').style.animationName = "navbarAnimBackwards";
    document.querySelector('#navBar-container').style.animationDuration = ".3s";
    document.querySelector('#navBar-container').style.animationTimingFunction = "linear";
    document.querySelector('#navBar-container').style.animationFillMode = "forwards";
    document.querySelector('.navbar-lists').style.display = "none";
    document.querySelector('#nav-list-items').style.display = "none";
}
// -----------------------------

// NEW MODIFICATION
/*
let carousel = document.getElementById('carousel');
let dot1 = document.getElementById('dot1');
let dot2 = document.getElementById('dot2');
let dot3 = document.getElementById('dot3');
let dot4 = document.getElementById('dot4');
let dot5 = document.getElementById('dot5');
let dot6 = document.getElementById('dot6');


dot1.onclick = function () {
    carousel.style.transform = "translateX(0px)";
    dot1.classList.add("active");
    dot2.classList.remove("active");
    dot3.classList.remove("active");
    dot4.classList.remove("active");
    dot5.classList.remove("active");
    dot6.classList.remove("active");
}

dot2.onclick = function () {
    carousel.style.transform = "translateX(-100%)";
    dot1.classList.remove("active");
    dot2.classList.add("active");
    dot3.classList.remove("active");
    dot4.classList.remove("active");
    dot5.classList.remove("active");
    dot6.classList.remove("active");
}

dot3.onclick = function () {
    carousel.style.transform = "translateX(-200%)";
    dot1.classList.remove("active");
    dot2.classList.remove("active");
    dot3.classList.add("active");
    dot4.classList.remove("active");
    dot5.classList.remove("active");
    dot6.classList.remove("active");
}

dot4.onclick = function () {
    carousel.style.transform = "translateX(-300%)";
    dot1.classList.remove("active");
    dot2.classList.remove("active");
    dot3.classList.remove("active");
    dot4.classList.add("active");
    dot5.classList.remove("active");
    dot6.classList.remove("active");
}

dot5.onclick = function () {
    carousel.style.transform = "translateX(-400%)";
    dot1.classList.remove("active");
    dot2.classList.remove("active");
    dot3.classList.remove("active");
    dot4.classList.remove("active");
    dot5.classList.add("active");
    dot6.classList.remove("active");
}

dot6.onclick = function () {
    carousel.style.transform = "translateX(-500%)";
    dot1.classList.remove("active");
    dot2.classList.remove("active");
    dot3.classList.remove("active");
    dot4.classList.remove("active");
    dot5.classList.remove("active");
    dot6.classList.add("active");
} */


// Bg video play pause

let pl = document.querySelector('#play');
let ps = document.querySelector('#pause');
let video = document.querySelector('video');

ps.onclick = function pause() {
    video.pause();
    pl.style.display = "block";
    ps.style.display = "none";
}

pl.onclick = function playAgain() {
    video.play();
    pl.style.display = "none";
    ps.style.display = "block";
}




// AUTOMATIC CAROUSEL SLIDE
/*
let slideIndex = 0;
showSlides();


function showSlides() {
    let i;
    let slides = document.getElementsByClassName("carousel-page");
    let dots = document.getElementsByClassName("dots");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3500);
}
*/


// setInterval(function () {
//     const show = document.querySelector("span[data-show]");
//     const next =
//         show.nextElementSibling || document.querySelector("span:first-child");
//     const up = document.querySelector("span[data-up]");

//     if (up) {
//         up.removeAttribute("data-up");
//     }

//     show.removeAttribute("data-show");
//     show.setAttribute("data-up", "");

//     next.setAttribute("data-show", "");
// }, 2000);

// Overview Services Text Animation JavaScript
const txts = document.querySelector(".mask").children,
    txtsLen = txts.length;
let index = 0;
const textInTimer = 3000,
    textOutTimer = 2800;

function animateText() {
    for (let i = 0; i < txtsLen; i++) {
        txts[i].classList.remove("text-in", "text-out");
    }
    txts[index].classList.add("text-in");

    setTimeout(function () {
        txts[index].classList.add("text-out");
    }, textOutTimer)

    setTimeout(function () {

        if (index == txtsLen - 1) {
            index = 0;
        }
        else {
            index++;
        }
        animateText();
    }, textInTimer);
}

window.onload = animateText;