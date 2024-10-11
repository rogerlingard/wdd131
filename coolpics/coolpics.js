const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
  const menu = document.querySelector(".button-crew");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    const menu = document.querySelector(".button-crew");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }

}

handleResize();
window.addEventListener("resize", handleResize);

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
  }
  function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
    const clickedImage = event.target;

	// get the src attribute from that element and 'split' it on the "-"
    const imageSrc = clickedImage.src;
	// // construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    // const imageName = imageSrc.split('-')[0];


	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    const viewer = document.querySelector(".viewer");
    const modalImage = document.querySelector("#modalImage");
    modalImage.src = imageSrc;
	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    viewer.style.display = 'block';

}
const closeViewerButton = document.querySelector(".close-viewer");
closeViewerButton.addEventListener("click", closeViewer);

function closeViewer() {
    const viewer = document.querySelector(".viewer");
    viewer.style.display = 'none';
}

const gallery = document.querySelectorAll(".gallery figure img");
gallery.forEach(image => {
    image.addEventListener("click", function(event) {
            viewHandler(event);
    });
})
    

console.log(gallery);