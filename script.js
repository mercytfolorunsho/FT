// Function to handle the click event for the images
function handleImageClick(event) {
    const clickedImage = event.target;
    clickedImage.style.background = 'red';
    clickedImage.style.color = 'white';
}

// Get all the elements with class 'imagename'
const imagenameElements = document.querySelectorAll('.imagename');

// Loop through each 'imagename' element and add a click event listener
imagenameElements.forEach((element) => {
    element.addEventListener('click', handleImageClick);
});

