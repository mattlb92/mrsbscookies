import PhotoSwipeLightbox from 'photoswipe/lightbox'
import pswpModule from 'photoswipe'
import 'photoswipe/style.css'

// Originally in the astro file:
//const lightbox = new PhotoSwipeLightbox({
//    gallery: '.gallery',
//    children: 'a',
//    pswpModule: () => import ("photoswipe"),
//})
//
//document.addEventListener(
//'astro:page-load',
//() => { if (lightbox) lightbox.init() },
//{ once: false },
//)
//// Don't forget to initialize!
//lightbox.init();
//
////
////
//


const lightbox = new PhotoSwipeLightbox({
  gallery: '.gallery',
  children: 'a',
  pswpModule: () => import('photoswipe'),
});

lightbox.init();
