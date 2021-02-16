let price = +prompt('Введите стоимость покупки в грн.');
let final_price = 0;
let sale = 0;
if ((price > 500) && (price <= 1000)){
    sale = 3
    final_price = price - (price * sale/100);
}

else if(price > 1000){
    sale = 5
    final_price = price - (price * sale/100);
}
else{
    final_price = price;
}
alert(`Стоимость покупки без скидки: ${price}грн\nСкидка: ${sale}%\nИтоговая стоимость: ${final_price}грн.`);
