import {getVh} from './utils.js'

const navbar = document.getElementById('nav-bar');

window.onscroll = function () {
    if (window.scrollY > getVh(20)) {
        navbar.classList.remove('top');
    } else {
        navbar.classList.add('top')
    }
}