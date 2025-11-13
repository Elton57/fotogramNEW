const dialogRef = document.getElementById("dialog-box");
const imgGallery = document.getElementById("imgGallery");
const imgBox = document.querySelector(".imgBox");
const closeBtn = document.getElementById("close-btn");
const backBtn = document.getElementById("back-btn");
const nextBtn = document.getElementById("next-btn");
const counter = document.getElementById("counter");
const filename = document.getElementById("filename");

let myImgs = [
  "amman.jpg",
  "zurich.jpg",
  "hongkong.jpg",
  "frankfurt.jpg",
  "boston.jpg",
  "dresden.jpg",
  "paris.jpg",
  "venedig.jpg",
  "santorini.jpg",
  "singapore.jpg",
  "singapore-sg.jpg",
  "tokyo.jpg",
  "new-york.jpg",
  "monschau.jpg",
  "madrid.jpg",
  "york.jpg",
  "busan.jpg",
  "istanbul.jpg",
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
                 </div>`;
}

function openDialog(imgName) {
  let idx = myImgs.indexOf(imgName);
  if (idx === -1)
    idx = myImgs.findIndex((n) => n.toLowerCase() === imgName.toLowerCase());
  if (idx !== -1) currentIndex = idx;
  dialogRef.showModal();
  updateDialogImage();

  document.addEventListener("keydown", arrowControl);
}

function closeDialog() {
  dialogRef.close();
}

dialogRef.addEventListener("click", function (event) {
  if (event.target === dialogRef) {
    dialogRef.close();
  }
});

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

function closeDialog() {
  document.removeEventListener("keydown", arrowControl);
  dialogRef.close();
}

function arrowControl(e) {
  if (e.key === "ArrowRight") {
    next();
  }
  if (e.key === "ArrowLeft") {
    prev();
  }
}
