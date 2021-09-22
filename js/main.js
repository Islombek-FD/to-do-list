// Forma elementlarini tanlab olamiz
var elForm = document.querySelector('.form');
var elInput = document.querySelector('.form__input');

// Tartiblangan ro'yxat yaratish
var elList = document.createElement('ol');
elList.setAttribute('class', 'list');

elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    
    // Input qiymatini tanlab olish
    var elInputValue = elInput.value.trim();

    // Input qiymatini tozalab tashlash
    elInput.value = null;
    
    // Ro'yxat elementini yaratish va unga JavaScriptdan turib attribute lar qo'shish
    var elItem = document.createElement('li');
    elItem.setAttribute('class', 'list__item');
    elItem.textContent = elInputValue;
    
    // Button element yaratish va unga JavaSciptdan turib attribute lar qo'shamiz
    var elButton = document.createElement('button');
    elButton.textContent = 'Submit';
    elButton.setAttribute('type', 'submit');
    elButton.setAttribute('class', 'list__item-button');
    
    // Elementlarni html documentimizda chiqaramiz
    elItem.appendChild(elButton);
    elList.appendChild(elItem);
    document.body.appendChild(elList);
})