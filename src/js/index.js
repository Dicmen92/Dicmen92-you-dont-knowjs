'use strict';

const book = document.querySelectorAll('.book');
book[0].before(book[1]);
book[2].before(book[4]);
book[3].before(book[5]);
book[2].before(book[3]);
book[2].before(book[5]);

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

const aLink = document.querySelectorAll('a');
aLink[2].textContent = "Книга 3. this и Прототипы Объектов";

const adv = document.querySelector('.adv');
adv.classList.remove('adv');

const spanAdv = document.querySelectorAll('span');
spanAdv[0].remove();

const ulListBookTwo = document.querySelectorAll('ul')[1],
      liItemBookTwo = ulListBookTwo.querySelectorAll('li');
      liItemBookTwo[4].before(liItemBookTwo[6]);
      liItemBookTwo[4].before(liItemBookTwo[8]);
      liItemBookTwo[10].before(liItemBookTwo[2]);

const ulListBookFour = document.querySelectorAll('ul')[4],
      liItemBookFour = ulListBookFour.querySelectorAll('li');
      liItemBookFour[2].before(liItemBookFour[9]);
      liItemBookFour[2].before(liItemBookFour[3]);
      liItemBookFour[2].before(liItemBookFour[4]);
      liItemBookFour[8].before(liItemBookFour[5]);

const ulListBookSix = document.querySelectorAll('ul')[5],
      liItemBookSix = ulListBookSix.querySelectorAll('li');
      liItemBookSix[9].insertAdjacentHTML("afterbegin", '<li>Глава 8: За пределами ES6</li>');