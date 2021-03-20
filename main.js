let navBar = document.querySelector('.navbar');

let scrollPosistion = window.scrollY; 
window.addEventListener('scroll', () =>{

    if(window.scrollY < scrollPosistion)
        navBar.style.display = 'flex';
    else
        if(window.scrollY > 80)
         navBar.style.display = 'none';
    
    scrollPosistion = window.scrollY;
        
    
})