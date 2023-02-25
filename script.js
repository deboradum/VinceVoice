"use strict";

/* Responsive menu */
const hamburgerMenuBtn = document.querySelector(".hamburger-menu");
const closeMenuBtn = document.querySelector(".close-menu");
const nav = document.querySelector("nav");
const menuOverlay = document.querySelector(".menu-overlay");

function showMenu() {
    nav.classList.add("show");
    menuOverlay.classList.add("show");
}

function hideMenu() {
    nav.classList.remove("show");
    menuOverlay.classList.remove("show");
}

hamburgerMenuBtn.addEventListener("click", () => {
    showMenu();
});

closeMenuBtn.addEventListener("click", () => {
    hideMenu();
});

menuOverlay.addEventListener("click", () => {
    hideMenu();
});

/* Responsive menu end */


/* Playing of MP3s */
const diner = new Audio('mp3/Vincent - Het Diner.mp3');
const bosch = new Audio('mp3/Vincent - Jeroen Bosch.mp3');
const quooker = new Audio('mp3/Vincent - Quooker Flex.mp3');
const schooltv = new Audio('mp3/Vincent - SchoolTV.mp3');
const sire = new Audio('mp3/Vincent - Sire.mp3');
const gevangenis = new Audio('mp3/Vincent - Opgesloten.mp3');
const gvr = new Audio('mp3/Vincent- GVR.mp3');
const mva = new Audio('mp3/Vincent - Link.mp3');
const vermeer = new Audio('mp3/Vincent - Meisje met de parel.mp3');
const hanzo = new Audio('mp3/Vincent - Hanzo.mp3');
const belbel = new Audio('mp3/Vincent - Belbel.mp3');



function toggleAudio(audio) {
    if (audio.paused) {
        audio.play()
    } else {
        audio.pause()
    }
}
/* Playing of MP3s end */

function mvaVid() {

}
