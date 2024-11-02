// const priceDiv = document.querySelectorAll('.price');
const priceJacket = document.getElementById('price-jacket').innerHTML;
const priceSneakers = document.getElementById('price-sneakers').innerHTML;
const priceJeans = document.getElementById('price-jeans').innerHTML;
const priceBelt = document.getElementById('price-belt').innerHTML;

let priceJacketNum = +priceJacket.replace(' ₽', '');
let priceSneakersNum  = +priceSneakers.replace(' ₽', '');
let priceJeansNum = +priceJeans.replace(' ₽', '');
let priceBeltNum = +priceBelt.replace(' ₽', '');

let sum = priceJacketNum + priceSneakersNum + priceJeansNum + priceBeltNum

const totalAmount = document.querySelector('.total-amount');

let applyDiscount = () => {
  const couponBtn = document.querySelector('.coupon-btn');
}