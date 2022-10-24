let btnBack = document.querySelector('.button-back ');
let firstList = document.querySelector('.festivals-names__container');
let storiesContainer = document.querySelectorAll('.story__container');
let footerBox = document.querySelector('.form-footer__container');

let fone = document.querySelector('body');

function foneStyle() {
    fone.style.backgroundRepeat = 'no-repeat';
    fone.style.backgroundSize = 'cover';
    fone.style.backgroundPosition = "center";
}

btnBack.addEventListener('click', function (elem) {
    elem.preventDefault(elem);
    firstList.classList.add('active');
    firstList.classList.remove('disactive');
    footerBox.classList.add('invisible');
    footerBox.classList.remove('visible');

    fone.style.background = 'url(./images/photo1.jpg)';
    foneStyle();

    storiesContainer.forEach(function (story) {
        story.classList.remove('active');
        story.classList.add('disactive');
    });

});






