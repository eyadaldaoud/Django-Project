let clickFun = document.getElementById('click');

onscroll = () =>{


    if (scrollY >= 150) {

        localStorage.setItem('arrow', 'block');

        clickFun.style.display = localStorage.arrow;
        
         
    } else {

        localStorage.setItem('arrow', 'none');

        clickFun.style.display = localStorage.arrow;
    }

    clickFun.addEventListener('click', () => scrollTo({
        top: '0',
        behavior: 'smooth',
    }))

}


clickFun.style.display =  'none';


