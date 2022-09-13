let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');
let darkImg = document.querySelector('.dark-mode');
let lightImg = document.querySelector('.light-mode');
let contact = document.getElementById('contactClick');
let services = document.getElementById('serviceClick');
const openNav = document.getElementsByClassName('phones-nav-open')[0]
const closeNav = document.getElementsByClassName('phones-nav-close')[0]
const navItems = document.getElementsByClassName('navbar')[0]

openNav.addEventListener('click', () => {
    navItems.classList.toggle('active');
    
})



window.addEventListener('load', () => {
    lightImg.style.display = 'block';
    
  });

const enableDarkMode = () => {

    document.body.classList.add('darkMode');
    localStorage.setItem('darkMode', 'enabled');

}

const disableDarkMode = () => {

    document.body.classList.remove('darkMode');
    localStorage.setItem('darkMode', null);

}

if (darkMode === 'enabled') {

    enableDarkMode();
}


darkModeToggle.addEventListener("click", () => {

    darkMode = localStorage.getItem("darkMode");
    

    if (darkMode !== 'enabled'){



        enableDarkMode();
    }
    else {

        disableDarkMode();
    }
});


contact.addEventListener('click', () => document.querySelector(".contact-box").scrollIntoView({
    behavior: 'smooth',
}));

services.addEventListener('click', () => document.querySelector(".whyus-header").scrollIntoView({
    behavior: 'smooth',
}));

