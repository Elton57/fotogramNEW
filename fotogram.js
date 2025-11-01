const dialogRef = document.getElementById('dialog-box');
const gallery = document.getElementById('imgGallery');
const DialogImg = document.getElementById('dialog-img');
const backBtn = document.getElementById('back-btn');
const nextBtn = document.getElementById('next-btn');
const closeBtn = document.getElementById('close-btn');
const counter = document.getElementById('counter');
const filename = document.getElementById('filename');


console.log('dialogRef:', dialogRef);
console.log('closeBtn:', closeBtn);
console.log('supports <dialog> showModal:', typeof dialogRef?.showModal === 'function');

closeBtn.addEventListener('click', (e) => {
    console.log('[CLOSE] click on X');
});



const images = Array.from(document.querySelectorAll('.mainImg'));
let currentIndex = 0;


function ImgNames(src) {
    let name = src.split('/').pop();
    name = name.split('.')[0];
    name = name.replace(/[_-]+/g, ' ');
    name = name.replace(/\b\w/g, c => c.toUpperCase());
    return name;
}

images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        DialogImg.src = img.src;
        dialogRef.showModal();
        counter.textContent = `${currentIndex + 1} / ${images.length}`;

        filename.textContent = ImgNames(img.src);

    });
});

backBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    DialogImg.src = images[currentIndex].src;
    counter.textContent = `${currentIndex + 1} / ${images.length}`;

    filename.textContent = `${currentIndex + 1} / ${images.length}`;


});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1 + images.length) % images.length;
    DialogImg.src = images[currentIndex].src;
    counter.textContent = `${currentIndex + 1} / ${images.length}`;

    filename.textContent = ImgNames(images[currentIndex].src);
});


closeBtn.addEventListener('click', (e) => {

    dialogRef.close();
});

dialogRef.addEventListener('click', (e) => {
    if (e.target === dialogRef) dialogRef.close();
});

// --- Tastatursteuerung ---
document.addEventListener('keydown', (e) => {
    if (!dialogRef.open) return;                                    

    if (e.key === 'ArrowLeft') {
        backBtn.click();                                            
    } else if (e.key === 'ArrowRight') {
        nextBtn.click();                                             
    } else if (e.key === 'Escape') {
        dialogRef.close();                                              
    }
});
