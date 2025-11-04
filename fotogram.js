const dialogRef = document.getElementById('dialog-box');
const imgGallery = document.getElementById('imgGallery');
const imgBox = document.querySelector('.imgBox');
const closeBtn = document.getElementById('close-btn');
const backBtn = document.getElementById('back-btn');
const nextBtn = document.getElementById('next-btn');
const counter = document.getElementById('counter');
const filename = document.getElementById('filename');

let myImgs = [
    'amman.jpg',
    'boston.jpg',
    'busan.jpg',
    'dresden.jpg',
    'frankfurt.jpg',
    'hongkong.jpg',
    'istanbul.jpg',
    'madrid.jpg',
    'monschau.jpg',
    'new-york.jpg',
    'paris.jpg',
    'santorini.jpg',
    'singapore-sg.jpg',
    'singapore.jpg',
    'tokyo.jpg',
    'venedig.jpg',
    'york.jpg',
    'zurich.jpg',
];

let currentIndex = 0;

function updateDialogImage() {
    const currentFile = myImgs[currentIndex];
    imgBox.innerHTML = getNotesHtml(myImgs[currentIndex]);
    if (counter) {
        counter.textContent = `${currentIndex + 1} / ${myImgs.length}`;
    }
    if (filename) {
        filename.textContent = currentFile;
    }

}

function openDialog(imgName) {
    dialogRef.showModal();

    imgBox.innerHTML = getNotesHtml(imgName);

}

function getNotesHtml(myImgs) {
    return `    <div class= "dialogGallery">
                        <img class="dialogGallery" src="./img/${myImgs}" alt="${myImgs}">
                 </div>`
}


function closeDialog() {
    dialogRef.close();
    
}

function updateDialogImage() {
    const currentFile = myImgs[currentIndex];
    imgBox.innerHTML = getNotesHtml(myImgs[currentIndex]);
    if (counter) {
        counter.textContent = `${currentIndex + 1} / ${myImgs.length}`;
    }
    if (filename) {
        filename.textContent = currentFile;
    }

}

function prev() {
    currentIndex = (currentIndex - 1 + myImgs.length) % myImgs.length;
    updateDialogImage();
}

function next() {
    currentIndex = (currentIndex + 1) % myImgs.length;
    updateDialogImage();
}

