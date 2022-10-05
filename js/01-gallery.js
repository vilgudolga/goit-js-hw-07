import { galleryItems } from './gallery-items.js'
// Change code below this link
const gallery = document.querySelector('div.gallery')
const galleryItemsElement = galleryItems
  .map((element) => {
    const image = `<div class="gallery__item">
<a class="gallery__link" href="${element.original}" >
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      alt="${element.description}"
    />
  </a>
</div>`
    return image
  })
  .join(' ')
gallery.insertAdjacentHTML('afterbegin', galleryItemsElement)
gallery.addEventListener('click', (event) => {
  event.preventDefault()
  const altImg = event.target.getAttribute('alt')
  const dataImg = event.target.getAttribute('data-source')

  const instance = basicLightbox.create(`
    <img src="${dataImg}" width="800" height="600">
`)
  instance.show()
})
console.log(galleryItems)
