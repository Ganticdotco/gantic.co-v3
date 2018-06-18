// ########################################################
// Show and hide the page banner depending on page position
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
