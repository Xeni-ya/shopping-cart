// 1. У нас есть элементы, в которых записаны цены айтимов из корзины. Нужно записать их все в переменные.
// 2. Взять значение из них (метод innerHTML)
const priceJacket = document.getElementById('price-jacket').innerHTML;
const priceSneakers = document.getElementById('price-sneakers').innerHTML;
const priceJeans = document.getElementById('price-jeans').innerHTML;
const priceBelt = document.getElementById('price-belt').innerHTML;

// 3. Привести значение переменных к числу (вспомним про унарный плюс)
let priceJacketNum = +priceJacket.replace(' ₽', '');
let priceSneakersNum  = +priceSneakers.replace(' ₽', '');
let priceJeansNum = +priceJeans.replace(' ₽', '');
let priceBeltNum = +priceBelt.replace(' ₽', '');

// 4. Сложить значения переменных
let sum = priceJacketNum + priceSneakersNum + priceJeansNum + priceBeltNum;

// 5. Вставить полученное значение в элемент (предварительно найти его и записать в переменную)
const totalAmount = document.querySelector('.total-amount');
totalAmount.textContent = `${sum} ₽`;

// 6. Создать функцию, которая будет вычитать 20% от общей стоимости
const couponBtn = document.querySelector('.coupon-btn');

let applyDiscount = () => {
  if (couponBtn.classList.contains('disabled')) {
    return; // Если скидка уже применена, ничего не делаем
  }

  // Вычисляем новую стоимость после скидки
  sum = sum * 0.8; 

  // Обновляем отображаемую стоимость
  totalAmount.textContent = `${sum} ₽`;

  // Отключаем кнопку, чтобы скидку нельзя было применить повторно
  couponBtn.classList.add('disabled'); 
};

// 7. Добавить метод onclick или addEventListener на кнопку ”Использовать купон на 20%”
couponBtn.addEventListener('click', applyDiscount);



