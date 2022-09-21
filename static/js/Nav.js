
const contact = document.getElementById('contactClick');
const services = document.getElementById('serviceClick');
const openNav = document.getElementsByClassName('phones-nav-open')[0]
const closeNav = document.getElementsByClassName('phones-nav-close')[0]
const navItems = document.getElementsByClassName('navbar')[0]

let toggleTheme = document.getElementById('modeToggle');
let getImgs = document.images;


openNav.addEventListener('click', () => {
    
    navItems.classList.toggle('active');
    
})




/// Toggle theme 


if (localStorage.mode == 'lightTheme') {
    getImgs[1].src = 'http://127.0.0.1:8000/static/images/nighttheme.png';

    
} else {

    getImgs[1].src = 'http://127.0.0.1:8000/static/images/daytheme.png';

}


toggleTheme.addEventListener('click', () => {



    if (localStorage.mode === 'darkTheme') {

        localStorage.setItem('mode', 'lightTheme');

        document.body.setAttribute('class', 'lightTheme');

        getImgs[1].src = 'http://127.0.0.1:8000/static/images/nighttheme.png';

        getImgs[1].style.cssText = `animation-name: nighttheme; animation-duration: 1s;`;
        

        
    } else {

        localStorage.setItem('mode', 'darkTheme');

   
        document.body.setAttribute('class', 'darkTheme');

       
        getImgs[1].src = 'http://127.0.0.1:8000/static/images/daytheme.png'

        getImgs[1].style.cssText = `animation-name: daytheme; animation-duration: 1s;`;

        

    }
    console.log(getImgs.src)

});

document.body.setAttribute('class', localStorage.mode);


if (location.href === 'http://127.0.0.1:8000/') {

    contact.addEventListener('click', () => document.querySelector(".contact-box").scrollIntoView({
        behavior: 'smooth',
    }));
    
    services.addEventListener('click', () => document.querySelector(".whyus-header").scrollIntoView({
        behavior: 'smooth',
    }));

} else {

    contact.addEventListener('click', () => {
        
        window.location.replace('');
        document.querySelector(".whyus-header").scrollIntoView({
            behavior: 'smooth',
        })

    })
    
    services.addEventListener('click', () => {
        
        window.location.replace('/');
        document.querySelector(".contact-box").scrollIntoView({
            behavior: 'smooth',
        })

    })
}


