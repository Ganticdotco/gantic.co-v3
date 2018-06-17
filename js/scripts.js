function runOnScroll() {
   var banner = document.querySelector('#banner');
   if (window.scrollY >= 300) {
     banner.classList.remove('transparent');
     banner.classList.remove('reversed');
   } else {
     banner.classList.add('transparent');
     banner.classList.add('reversed');
   }
};
window.addEventListener("scroll", runOnScroll);
