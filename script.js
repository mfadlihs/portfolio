// Hamburger Navigasi
const hamburgerButton = document.querySelector('.hamburgerMenu');
hamburgerButton.addEventListener('click',function(){
  hamburgerButton.classList.toggle('openHamburger');
  if(checkOpenNav()){
    openNav();
  }else{
    closeNav();
  }
})


const listNav = document.querySelector('.list');
function checkOpenNav(){
  return hamburgerButton.classList.contains('openHamburger');
}
function openNav(){
  listNav.style.top = '0';
}

function closeNav(){
  listNav.style.top = '-100vh';
}

// CSS Light atw Dark Mode
const navMode = document.head.querySelector('[href *= "navigasi"]');
const welcomeMode = document.head.querySelector('[href *= "welcome"]');
const aboutMode = document.head.querySelector('[href *= "about"]');
const contactMode = document.head.querySelector('[href *= "contact"]');
const footerMode = document.head.querySelector('[href *= "footer"]');

const cssMode = document.querySelector('.cssMode');
cssMode.addEventListener('click',function(){
  navMode.classList.toggle('darkMode');
  if(navMode.classList.contains('darkMode')){
    navMode.setAttribute('href','style/navigasi/dark.css');
    welcomeMode.setAttribute('href','style/welcome/dark.css');
    aboutMode.setAttribute('href','style/about/dark.css');
    contactMode.setAttribute('href','style/contact/dark.css');
    footerMode.setAttribute('href','style/footer/dark.css');
  }else{
    navMode.setAttribute('href','style/navigasi/light.css');
    welcomeMode.setAttribute('href','style/welcome/light.css');
    aboutMode.setAttribute('href','style/about/light.css');
    contactMode.setAttribute('href','style/contact/light.css');
    footerMode.setAttribute('href','style/footer/light.css');
  }
})