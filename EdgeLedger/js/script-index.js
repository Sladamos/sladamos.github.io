import {getVh} from './utils.js'

const navbar = document.getElementById('nav-bar');

window.onscroll = function () {
    if (window.scrollY > getVh(90)) {
        navbar.classList.remove('top');
    } else {
        navbar.classList.add('top')
    }
}