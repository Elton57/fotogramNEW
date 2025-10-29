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

function ImgNames(SRC) {
    let name = screen.split('/').pop();
    name = name.split('.')[0];
    name = name.replace(/[_-]+/g, ' ');
    name = name.replace(/\b\w/g, c => c.toUpperCase());
    return name;
}

images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        DialogImg.src = img.src;
        dialogRef.schowModal();
        counter.textContent = `${currentIndex + 1} / ${images.length}`;

        filanme.textContent = makeName(img.src);

    });
});

backBtn,addEventListener('click', () =>{
    currentIndex = (currentIndex - 1 + images.length ) % images.length;
    DialogImg.src = images[currentIndex].src;
    counter.textContent = `${currentIndex + 1} / ${images.length}`;

    filanme.textContent = `${currentIndex + 1} / ${images.length}`;


});

 nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    dialogImg.src = images[currentIndex].src;
    counter.textContent = `${currentIndex + 1} / ${images.length}`;

    filename.textContent = makeName(images[currentIndex].src);
 });

 