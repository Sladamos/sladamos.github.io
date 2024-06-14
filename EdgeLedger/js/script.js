const navbar = document.getElementById('nav-bar');
let scrolled = false;

function getVh(percent) {
    let vh = Math.max(document.documentElement.clientHeight/100 || 0, window.innerHeight/100 || 0)
    return vh*percent;
  }

window.onscroll = function () {
    if (window.scrollY > getVh(90)) {
        navbar.classList.remove('top');
    } else {
        navbar.classList.add('top')
        scrolled = false;
    }
}