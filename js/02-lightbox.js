import { galleryItems } from './gallery-items.js';
// Change code below this line



const gallery = document.querySelector(".gallery")
gallery.addEventListener("click", imagesGallry)

function imagesGallry(evnt) {

  evnt.preventDefault()

  const evntValue = evnt.target.nodeName
  
  if (evntValue !== "IMG") {
    return console.log("не картинка")
  }



}


const allImg = galleryItems.map(({ preview, original, description }) => 
  `
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
`
).join("")

gallery.innerHTML = allImg
console.log(simpleLightbox)