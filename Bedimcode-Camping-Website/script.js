/*=========================MENÜNÜN GÖSTERİLMESİ===================*/

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/*"show-menu" classı eklenerek menünün gösterilmesi*/
if(navToggle){
    navToggle.addEventListener("click", () =>{
        navMenu.classList.add("show-menu");
    })
}
/*"show-menu" classı kaldırılarak menünün gizlenmesi*/
if(navClose){
    navClose.addEventListener("click", () =>{
        navMenu.classList.remove("show-menu");
    })
}

/*============= MENÜDEN BİR LİNKE TIKLAYINAC MENÜNÜN KAPATILMASI =============*/

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    //navMenuden bir linke tıkladığında showmenu classını kaldırığ menüyü gizleyen kısım
    navMenu.classList.remove("show-menu");
}

navLink.forEach(n => n.addEventListener("click", linkAction));

/* ========= HEADER' IN BACKGROUND' INI DEĞİŞTİRME*/

const  bgHeader = () => {
    const header = document.getElementById('header');
    //scroll yükseklik değeri 50den büyükse classı ekle değilse classı kaldır
    this.scrollY >= 50 ? header.classList.add("bg-header")
                       : header.classList.remove("bg-header")
}

window.addEventListener("scroll", bgHeader);


/* ========== GSAP ANIMATION ========== */
gsap.from('.home__img-2', 1.2, {opacity: 0, y: 200, delay: .1})
gsap.from('.home__img-3', 1.2, {opacity: 0, y: 200, delay: .5})
gsap.from('.home__data', 1.2, {opacity: 0, y: 200, delay: 1})
gsap.from('.home__bird-1', 1.2, {opacity: 0, x: -80, delay: 1.1})
gsap.from('.home__bird-2', 1.2, {opacity: 0, x: 80, delay: 1.2})
gsap.from('.home__img-1', 1.2, {opacity: 0, y: -200, delay: 1.2})
gsap.from('.home__img-4', 1.2, {opacity: 0, x: 200, delay: 1.3})


