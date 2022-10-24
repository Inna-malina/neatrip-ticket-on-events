import storyname from './storyname.js';

//Формируем страницу выбранного события
let fone = document.querySelector('body');
let listFestivals = document.querySelector('.festivals-names__container');
let footerContainer = document.querySelector('.form-footer__container');
let storyContainer = document.querySelector('.story__container');
let festivals = document.querySelectorAll('.festival-element');
let dataAttrs = document.querySelectorAll('[data-story]');

let radioOne = document.querySelector('.inp-radio-one');
let radiotwo = document.querySelector('.inp-radio-two');
let radioThree = document.querySelector('.inp-radio-three');
let radioFour = document.querySelector('.inp-radio-four');

festivals.forEach(function (festival) {
    festival.addEventListener('click', function (event) {
        let action = event.target.dataset.name;

        //включаем выбранное событие и выключаем окно выбора
        listFestivals.classList.remove('active');
        listFestivals.classList.add('disactive');
        storyContainer.classList.remove('disactive');
        storyContainer.classList.add('active');
        footerContainer.classList.remove('invisible');
        footerContainer.classList.add('visible');
        fone.style.background = `url('./images/${action}.jpg`;
        fone.style.backgroundRepeat = 'no-repeat';
        fone.style.backgroundSize = 'cover';
        fone.style.backgroundPosition = 'center';

        //перебираем и находим все элементы с атрибутом data-story
        dataAttrs.forEach(function (elem) {
            if (action == 'wood-story') {
                for (let key in storyname['wood-story']) {
                    if (elem.dataset.story === key) {
                        elem.textContent = storyname['wood-story'][key];
                        radioOne.value = storyname['wood-story']['radio-one'];
                        radiotwo.value = storyname['wood-story']['radio-two'];
                        radioThree.value = storyname['wood-story']['radio-three'];
                        radioFour.value = storyname['wood-story']['radio-four'];
                    }
                }
                totalResalt(800, 450);
            }
            if (action == 'gifts-of-the-forest') {
                for (let key in storyname['gifts-of-the-forest']) {
                    if (elem.dataset.story === key) {
                        elem.textContent = storyname['gifts-of-the-forest'][key];
                        radioOne.value = storyname['gifts-of-the-forest']['radio-one'];
                        radiotwo.value = storyname['gifts-of-the-forest']['radio-two'];
                        radioThree.value = storyname['gifts-of-the-forest']['radio-three'];
                        radioFour.value = storyname['gifts-of-the-forest']['radio-four'];
                    }
                }
                totalResalt(500, 150);
            }
            if (action == 'river-trip') {
                for (let key in storyname['river-trip']) {
                    if (elem.dataset.story === key) {
                        elem.textContent = storyname['river-trip'][key];
                        radioOne.value = storyname['river-trip']['radio-one'];
                        radiotwo.value = storyname['river-trip']['radio-two'];
                        radioThree.value = storyname['river-trip']['radio-three'];
                        radioFour.value = storyname['river-trip']['radio-four'];
                    }
                }
                totalResalt(1000, 500);
            }
            if (action == 'halloween') {
                for (let key in storyname['halloween']) {
                    if (elem.dataset.story === key) {
                        elem.textContent = storyname['halloween'][key];
                        radioOne.value = storyname['halloween']['radio-one'];
                        radiotwo.value = storyname['halloween']['radio-two'];
                        radioThree.value = storyname['halloween']['radio-three'];
                        radioFour.value = storyname['halloween']['radio-four'];
                    }
                }
                totalResalt(1300, 300);
            }
        });

    });
});


// Добавляем дату к форме
let nowDate = new Date();
let date = document.querySelector('.date');
let month = document.querySelector('.month');
let hours = document.querySelector('.hours');

date.innerHTML = nowDate.getDate();
month.innerHTML = nowDate.getMonth();
hours.innerHTML = `${nowDate.getHours()} : ${nowDate.getMinutes()}`;

if (nowDate.getMonth() == 9) {
    month.innerHTML = 'октября';
}
if (nowDate.getMonth() == 10) {
    month.innerHTML = 'ноября';
}


// Прибавка-удаление количества билетов для взрослых
let plasAdult = document.querySelector('.plas-adult');
let minusAdult = document.querySelector('.minus-adult');
let ticketAdult = document.querySelector('.adult_quantity');

let quantityAdalt = 0;
plasAdult.addEventListener('click', function (e) {
    e.preventDefault();
    ticketAdult.value = quantityAdalt + 1;
    quantityAdalt++;
});

minusAdult.addEventListener('click', function (e) {
    e.preventDefault();
    ticketAdult.value = quantityAdalt;
    quantityAdalt--;
    if (quantityAdalt <= 0) {
        quantityAdalt = 0;
    }
});

//Прибавка-удаление количества билетов для детей
let plasKid = document.querySelector('.plas-kid');
let minusKid = document.querySelector('.minus-kid');
let ticketKid = document.getElementById('ticket_kid_quantity');


let quantityKid = 0;
plasKid.addEventListener('click', function (e) {
    e.preventDefault();
    ticketKid.value = quantityKid + 1;
    quantityKid++;
});

minusKid.addEventListener('click', function (e) {
    e.preventDefault();
    ticketKid.value = quantityKid;
    quantityKid--;
    if (quantityKid <= 0) {
        quantityKid = 0;
    }

});

//Выводим сумму заказа
let totalCost = document.querySelector('.total-cost-number');
let buttonTotalCost = document.querySelector('.total-cost-button');

function totalResalt(adalt, kid) {
    buttonTotalCost.addEventListener('click', function (elem) {
        elem.preventDefault();
        totalCost.innerHTML = (ticketAdult.value * adalt) + (ticketKid.value * kid);
    });
}

//Кликаем по кнопке "Выбрать другое событие"
let btnBack = document.querySelector('.button-back ');
let firstList = document.querySelector('.festivals-names__container');
let footerBox = document.querySelector('.form-footer__container');
let storiesContainer = document.querySelectorAll('.story__container');

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

//Заполнение таблицы заказа
let buttonSubmit = document.querySelector('.form-button');
let storyTitle = document.querySelector('.story__title');
let inpRadio = document.querySelectorAll('.inp-radio');
let tableTitleRow = document.querySelector('.table-title__row');
let container = document.querySelector('.container');
let form = document.querySelector('form'); 
let table = document.querySelector('.table-div-container'); 

buttonSubmit.addEventListener('click', function (elem) {
    elem.preventDefault();
    container.classList.add('disactive');
    container.classList.remove('active');

    form.classList.add('disactive');
    form.classList.remove('active'); 

    listFestivals.classList.add('disactive');
    listFestivals.classList.remove('active'); 
    
    storyContainer.classList.add('disactive');
    storyContainer.classList.remove('active');

    table.classList.add('table-active');
    table.classList.remove('table-disactive');

    fone.style.background = 'none';






    // формируем блоки таблицы
    let newTR = document.createElement('tr');
    newTR.className = 'table-info__row';
    tableTitleRow.after(newTR);

    for (let i = 0; i < 11; i++) {
        let newTD = document.createElement('td');
        newTD.className = 'info-element';
        newTR.append(newTD);
    }

    let infoElements = document.querySelectorAll('.info-element');
    let countTR = document.querySelectorAll('tr');

    // заполняем ячейки таблицы информацией
    for (let i = 0; i < infoElements.length; i++) {

        //id-события
        infoElements[1].innerHTML = storyTitle.textContent;

        //нумерация id
        for (let i = 1; i < countTR.length; i++) {
            infoElements[0].innerHTML = [i];
        }

        //дата события и время
        for (let i = 0; i < inpRadio.length; i++) {
            if (inpRadio[i].checked == true) {
                infoElements[2].innerHTML = inpRadio[i].value;
            }
        }

        //ячейки с ценой
        if (infoElements[1].textContent == 'Фестиваль "Лесная сказка"') {
            infoElements[3].innerHTML = 800;
            infoElements[5].innerHTML = 450;
        }
        if (infoElements[1].textContent == 'Встреча-экскурсия "Дары леса"') {
            infoElements[3].innerHTML = 500;
            infoElements[5].innerHTML = 150;
        }
        if (infoElements[1].textContent == 'Экскурсия "Речное приключение"') {
            infoElements[3].innerHTML = 1000;
            infoElements[5].innerHTML = 500;
        }
        if (infoElements[1].textContent == 'Фестиваль "Хэллуин"') {
            infoElements[3].innerHTML = 1300;
            infoElements[5].innerHTML = 300;
        }

        infoElements[4].innerHTML = ticketAdult.value;
        infoElements[6].innerHTML = ticketKid.value;
        infoElements[7].innerHTML =  Math.floor(Math.random() * (999999 - 0 + 1)) + 0;
        infoElements[8].innerHTML =  Math.floor(Math.random() * (999 - 0 + 1)) + 0;
        infoElements[9].innerHTML = totalCost.textContent + 'p.';
        infoElements[10].innerHTML = date.textContent + ' ' + month.textContent + ' ' + hours.textContent;

    }

});

let buttonTable = document.querySelector('.return-main-box');

buttonTable.addEventListener('click', function(){
    container.classList.remove('disactive');
    container.classList.add('active');

    form.classList.remove('disactive');
    form.classList.add('active'); 

    listFestivals.classList.remove('disactive');
    listFestivals.classList.add('active'); 
    
    storyContainer.classList.add('disactive');

    table.classList.remove('table-active');
    table.classList.add('table-disactive');

    footerBox.classList.add('invisible');
    footerBox.classList.remove('visible');

    fone.style.background = 'url(./images/photo1.jpg)';
    foneStyle();
});



