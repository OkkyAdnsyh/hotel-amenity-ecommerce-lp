let scrollPos;

const formPopup = document.querySelector('.popup-custom');
const openFormPopup = document.querySelectorAll('.open-popup');
const closeFormPopup = document.querySelector('.close-popup');


const toggleFormPopup = () => {
    formPopup.classList.toggle('isActive');
};

window.addEventListener('scroll', () => {
    scrollPos = window.scrollY;
});

window.addEventListener('load', () => {
    setTimeout(() => {
        if(formPopup.classList.contains('isActive')){
            return
        }else if(formPopup.classList.contains('timed--popup')){
            formPopup.style.top = `${scrollPos}px`;
            toggleFormPopup() 
        }else{
            return
        }
    }, 30000);
});

openFormPopup.forEach(el => {
    el.addEventListener('click', () => {
        formPopup.style.top = `${scrollPos}px`;
        formPopup.classList.toggle('isActive');
    });
});

closeFormPopup.addEventListener('click', () => {
    formPopup.style.top = `${scrollPos}px`;
    formPopup.classList.toggle('isActive');
});