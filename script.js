const variantNumber = 7;
const firstElementId = "item7"; // Програмування
const secondElementSelector = "li:nth-child(4)"; // Читання художньої літератури

let firstClickDone = false;
let firstElementClicked = null;
let secondElementClicked = null;
let firstClickCount = 0;
let secondClickCount = 0;

function changeColors(element, isFirstElement) {
    const colors = ['highlight1', 'highlight2', 'highlight3'];
    const body = document.body;

    if (isFirstElement) {
        if (firstElementClicked) {
            firstElementClicked.classList.remove(...colors);
            firstElementClicked.classList.remove('highlightText');
        }
        firstElementClicked = document.getElementById(firstElementId);
        firstClickCount = (firstClickCount + 1) % colors.length;
        firstElementClicked.classList.add(colors[firstClickCount]);
        firstElementClicked.classList.add('highlightText');
        body.className = colors[firstClickCount]; // Change body background
    } else {
        if (secondElementClicked) {
            secondElementClicked.classList.remove(...colors);
            secondElementClicked.classList.remove('highlightText');
        }
        secondElementClicked = document.querySelector(secondElementSelector);
        secondClickCount = (secondClickCount + 1) % colors.length;
        secondElementClicked.classList.add(colors[secondClickCount]);
        secondElementClicked.classList.add('highlightText');
        body.className = colors[secondClickCount]; // Change body background
    }
}

document.body.addEventListener('click', function (event) {
    const target = event.target;

    if (target.id === firstElementId) {
        changeColors(target, true);
        firstClickDone = true;
    } else if (firstClickDone && target.textContent === "Читання художньої літератури") {
        changeColors(target, false);
    }
});

// Button functionality remains the same
const image = document.getElementById("image");
const addButton = document.getElementById("addButton");
const increaseButton = document.getElementById("increaseButton");
const decreaseButton = document.getElementById("decreaseButton");
const removeButton = document.getElementById("removeButton");

let imageCount = 1;
let imageScale = 1;

addButton.addEventListener("click", () => {
    imageCount++;
    const newImage = document.createElement("img");
    newImage.src = "dnipro.jpg";
    newImage.alt = "Дніпро";
    newImage.style.maxWidth = "100%";
    newImage.style.height = "auto";
    document.body.insertBefore(newImage, addButton.parentNode);
});

increaseButton.addEventListener("click", () => {
    image.style.transform = `scale(${imageScale += 0.1})`;
});

decreaseButton.addEventListener("click", () => {
    if (imageScale > 0.1) {
        image.style.transform = `scale(${imageScale -= 0.1})`;
    }
});

removeButton.addEventListener("click", () => {
    if (imageCount > 0) {
        imageCount--;
        const images = document.getElementsByTagName("img");
        if (images.length > 1) {
            images[images.length - 1].remove();
        }
    }
});
