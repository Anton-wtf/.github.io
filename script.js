document.addEventListener('DOMContentLoaded', () => {
    const priceSection = document.getElementById('price');
    const btnLeft = document.querySelector('.button_left');   
    const btnRight = document.querySelector('.button_right'); 

    if (priceSection && btnLeft && btnRight) {
        
        btnLeft.addEventListener('click', () => {
            btnLeft.classList.add('extra');
            btnRight.classList.remove('extra');
            priceSection.classList.add('view_yearly');    
        });

        btnRight.addEventListener('click', () => {
            btnRight.classList.add('extra');
            btnLeft.classList.remove('extra');
            priceSection.classList.remove('view_yearly'); 
        });
    }
});