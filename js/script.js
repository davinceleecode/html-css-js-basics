//davinceleecode

const ACTIVE_CLASS = "active";
const IMAGES = document.querySelectorAll('.slider');


IMAGES[0].classList.add(ACTIVE_CLASS);


function removeActiveClass(){
    const elm = document.querySelector(`.${ACTIVE_CLASS}`);    
    if(elm){
        elm.classList.remove(ACTIVE_CLASS);
    }
}


function addClass($event){
    $event.stopPropagation();
    removeActiveClass();
    const target = $event.target;
    target.classList.add(ACTIVE_CLASS);
}

IMAGES.forEach(image => {
    image.addEventListener('click', addClass);
});