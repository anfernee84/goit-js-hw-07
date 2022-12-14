import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
///////////////////////////////////////////////////////// gallery creation ///////////////////////////
const rootGallery = document.querySelector(".gallery");
const imageGallery = createGallery(galleryItems);
rootGallery.insertAdjacentHTML("afterbegin", imageGallery);
rootGallery.addEventListener("click", handleClickOnImage);

function createGallery(arrOfObj) {
  return arrOfObj
    .map((elem) => {
      const { preview, original, description } = elem;
      return `
    <div>
        <img 
        class="gallery__image"
        src=${preview}
        data-source=${original}
        alt=${description}/>
        </div>`;
    })
    .join("");
}
///////////////////////////////////////////////////////// click on image handler //////////////////////
function handleClickOnImage(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}", width = "640", height = "480"></div>`
  );
  instance.show();
  ////////////////////////////////////////////////////// close on Escape v1////////////////////////////
  //   document.onkeydown = function (evt) {
  //     if (evt.key == "Escape" || evt.key == "Esc" || evt.keyCode == 27) {
  //      // evt.preventDefault();
  //       instance.close();
  //     }
  //   };
  ////////////////////////////////////////////////////// close on Escape v2////////////////////////////
  window.addEventListener("keydown", onEscape);
  function onEscape(evt) {
    const ESC_KEY_CODE = "Escape";
    if (evt.code === ESC_KEY_CODE) {
      instance.close();
      window.removeEventListener("keydown", onEscape);
    }
  }
}
