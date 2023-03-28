// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import "simplelightbox/dist/simple-lightbox.min.css";


console.log(galleryItems);

const galleryRef = document.querySelector(".gallery")
const markup = createGallryMarkup(galleryItems)
galleryRef.innerHTML = markup;

function createGallryMarkup(items) {
    return  items
        .map(({preview, original, description}) => { 
        return `
        <div class="gallery__item">
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        </div> `
    })
    .join('');
    
}

 new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250,});