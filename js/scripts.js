// #####################################
// Show and hide the page banner depending on page position
function runOnScroll() {
  var banner = document.querySelector('#banner');
  var pageName =  document.querySelector('html');
  if (pageName.classList.contains('home')) {
    if (window.scrollY >= 300) {
      banner.classList.remove('transparent');
      banner.classList.remove('reversed');
    } else {
      banner.classList.add('transparent');
      banner.classList.add('reversed');
    };
  } else {
    if (window.scrollY >= 60) {
      banner.classList.remove('transparent');
    } else {
      banner.classList.add('transparent');
    };
  };
};
window.addEventListener("scroll", runOnScroll);




// #####################################
// Show and hide the mobile overlay menu
var menuToggle = document.querySelector('#menu-toggle');
var docBody = document.querySelector('body');
var menuItems = document.querySelectorAll('.main-nav > ul > li > a, .logo > a');

// Show hide from hamburger toggle
menuToggle.addEventListener('click', function () {
  docBody.classList.toggle('nav-active');
});

// Hide once a menu item is clicked
for (var i = 0; i < menuItems.length; i++) {
  // console.log("menuItems[i]");
  menuItems[i].addEventListener("click", function() {
    docBody.classList.remove('nav-active');
  });
};


// #####################################
// Show and hide lightbox images
var lightboxClose = document.querySelectorAll('#close-lightbox, .lightbox-overlay');
var lightboxItems = document.querySelectorAll('.lightbox');

// Show lightbox when image selected
for (var i = 0; i < lightboxItems.length; i++) {
  // console.log("lightboxItems[i]");
  lightboxItems[i].addEventListener("click", function() {
    docBody.classList.add('lightbox-active');
    // console.log(this);
    this.classList.add('selected');
  });
};

// Hide lightbox when image, close button, or overlay selected
for (var i = 0; i < lightboxClose.length; i++) {
  // console.log("lightboxClose[i]");
  lightboxClose[i].addEventListener("click", function() {
    docBody.classList.remove('lightbox-active');
    // console.log(this);
    for (var i = 0; i < lightboxItems.length; i++) {
      lightboxItems[i].classList.remove('selected');
    };
  });
};

// #####################################
// Allow JS clickable items to be accessed via Keyboard
// document.onkeydown = function(e) {
//   if(e.keyCode == 13 || e.keyCode == 32) { // The Enter/Return key
//     document.activeElement.click();
//   }
// };


// #####################################
// Scroll smoothly to internal links
function anchorLinkHandler(e) {
    const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);

    e.preventDefault();
    const targetID = this.getAttribute("href");
    const targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) return;
    const originalTop = distanceToTop(targetAnchor);

    window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });

    const checkIfDone = setInterval(function() {
        const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
        if (distanceToTop(targetAnchor) === 0 || atBottom) {
            targetAnchor.tabIndex = "-1";
            targetAnchor.focus();
            window.history.pushState("", "", targetID);
            clearInterval(checkIfDone);
        }
    }, 150);
}

const linksToAnchors = document.querySelectorAll('a[href^="#"]');

linksToAnchors.forEach(each => (each.onclick = anchorLinkHandler));
