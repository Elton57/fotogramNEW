const dialogRef = document.getElementById('dialog-box');
const imgGallery = document.getElementById('imgGallery');
const imgBox = document.querySelector('.imgBox');
const closeBtn = document.getElementById('close-btn');

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


function openDialog(imgName){
    dialogRef.showModal();
   
        imgBox.innerHTML = getNotesHtml(imgName);
    
}

function getNotesHtml(myImgs){
    return `    <div class= "dialogGallery">
                        <img class="dialogGallery" src="./img/${myImgs}" alt="${myImgs}">
                 </div>`
}


function closeDialog(){
    dialogRef.close();
}