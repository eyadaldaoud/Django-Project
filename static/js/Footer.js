let clickFun = document.getElementById('click');


clickFun.addEventListener('click', () => scrollTo({
    top: '0',
    behavior: 'smooth',
}))