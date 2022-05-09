import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from "./gallery-items";
const createGalleryItem = ({ preview, original, description }) =>
  `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" title = '${description}'>
  </a>`;
const galleryMarkup = galleryItems.reduce(
  (acc, item) => acc + createGalleryItem(item),
  ""
);
const galleryList = document.querySelector(".gallery");
galleryList.insertAdjacentHTML("afterbegin", galleryMarkup);

const gallery = new SimpleLightbox(".gallery a");

gallery.on("show.simplelightbox", function () {
  gallery.defaultOptions.captionDelay = 250;
});
console.log(galleryItems);
