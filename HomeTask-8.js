const imageList = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];



const gallery = document.querySelector('.js-gallery')


// for (const image of imageList) {
//     const itemImage = document.createElement('li')
//     itemImage.classList.add('gallery__item')

//     const linkImage = document.createElement('a');
//     linkImage.classList.add('gallery__link');
//     // linkImage.href = image.original;

//     const imageTag = document.createElement('img')
//     imageTag.classList.add('gallery__image')
//     imageTag.src = image.preview;
//     imageTag.alt = image.description;
//     imageTag.dataset.source = image.original;

//     linkImage.appendChild(imageTag)
//     itemImage.appendChild(linkImage)
    
//     gallery.append(itemImage)
// }
// gallery.addEventListener('click', (event)=> {
//     if(event.target === linkImage) event.preventDefault()
//     }
// )
// const imageModal = document.querySelector('.lightbox__image')
// const modal = document.querySelector('.lightbox')
// const allImage = document.querySelectorAll('.gallery__image')



// const arrayImages = [];
// allImage.forEach(Element => {  
//     arrayImages.push(Element.getAttribute('data-source'));
//   Element.addEventListener('click', function () {
//        modal.classList.add('is-open'); 
//      imageModal.src = this.dataset.source;  
//   }
//     );
//     }
//     );
const galleryBuilding = getCollectionImage(imageList);
gallery.insertAdjacentHTML('afterbegin', galleryBuilding)
function getCollectionImage (imageList) {
 return imageList.map( img => {
  return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${img.original}"
  >
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>
</li>` }).join('')
};

gallery.addEventListener('click',(e)=>{
  if(e.target.nodeName !== 'IMG'){
    return
  }
  modal.classList.add('is-open')
})


const close = document.querySelector('[data-action="close-lightbox"]');
close.addEventListener('click', () => { modal.classList.remove('is-open') ;
imageModal.src = '';
}
);

const overlay = document.querySelector('.lightbox__overlay')
overlay.addEventListener('click', (event) => {
    if(event.target === overlay){
        modal.classList.remove('is-open')
    }
})

document.addEventListener('keydown', el => { 
      let newIndex; 
      const currentId = arrayImages.indexOf(imageModal.src); 
      if (el.key === 'ArrowLeft') { 
             newIndex = currentId - 1; 
       if (newIndex == -1) {  
            newIndex = arrayImages.length - 1;  
          }  
        } 
        else if (el.key === 'ArrowRight') { 
               newIndex = currentId + 1;  
                 if (newIndex === arrayImages.length) {
                           newIndex = 0;   
                        } 
                 }  imageModal.src = arrayImages[newIndex];

                  if (el.key === 'Escape'){
                     modal.classList.remove('is-open')
                 }
    
                });