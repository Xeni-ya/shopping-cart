# shopping-cart

Корзина покупок, найти общую стоимость и применить скидку 20%

## Реализация:

- заголовок «Корзина».
- В корзине должно быть от 4 товара с описанием и ценой (это может быть одежда, продукты, техника, всё, что хотите).
- Под списком товаров должна быть итоговая цена и кнопка «Использовать купон 20%».
- При клике на кнопку «Использовать купон на 20%» вызывается функция, которая должна применить скидку 20% к каждому товару в корзине и изменить итоговую стоимость заказа.
- Скидка должна примениться только один раз.

#### Пример реализации:

<img
  src=".\assets\img\Скриншот 16-10-2024 025143.png"
  alt="Пример реализации"
  title="Пример реализации" />

### Пример реализации:

1. У нас есть элементы, в которых записаны цены айтимов из корзины. Нужно записать их все в переменные.
2. Взять значение из них (метод innerHTML)
3. Привести значение переменных к числу (вспомним про унарный плюс)
4. Сложить значения переменных
5. Вставить полученное значение в элемент (предварительно найти его и записать в переменную)
6. Создать функцию, которая будет вычитать 20% от общей стоимости
7. Добавить метод onclick или addEventListener на кнопку ”Использовать купон на 20%”
