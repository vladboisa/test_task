import '../css/style.css';
import '../css/style.scss';

const MENU = document.getElementById('menu');
const body = document.querySelector('body');
/* Hambgurger */

const hambgurger = document.querySelector("#header > span:nth-child(3)");
const headernav = document.getElementById('nav');
const sect = document.querySelector("#nav");
const links = document.querySelectorAll('#menu>li>a');
hambgurger.addEventListener('click', () => {
    if (headernav.style.left === "-100%" || headernav.style.left === "") {
        hambgurger.classList.add("hamb_opened");
        headernav.style.left = "0%";
        headernav.style.top = "25%"
        body.style.overflow = "hidden";
        headernav.classList.add("shadow");
    } else {
        hambgurger.classList.remove("hamb_opened");
        headernav.style.left = "-100%";
        body.style.overflow = "visible";
        headernav.classList.remove("shadow");
    }
});
function closeBurg() {
  if (hambgurger.classList.contains('hamb_opened')) {
      sect.forEach((el) => {
          links.forEach((a) => {
              if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                  hambgurger.classList.remove("hamb_opened");
                  headernav.style.left = "-100%";
                  body.style.overflow = "visible";
                  headernav.classList.remove("shadow");
              }
          });
      });
  }
};
MENU.addEventListener('click', closeBurg);
