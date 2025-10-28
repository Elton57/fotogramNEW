const dialogRef = document.getElementById('dialog-box');
const gallery = document.getElementById('imgGallery');
const DialogImg = document.getElementById('dialog-img');
const backBtn = document.getElementById('back-btn');
const nextBtn = document.getElementById('next-btn');
const closeBtn = document.getElementById('close-btn');
const counter = document.getElementById('counter');
const filanme = document.getElementById('filname');

const images = Array.from(document.querySelectorAll('.mainImg'));
let currentIndex = 0;

