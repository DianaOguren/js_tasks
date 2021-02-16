function year_february(year){
    let year_type;
    if((year%4!=0) || ((year%100==0) && (year%400!=0))){
        year_type = 1; // Год не високосный
    }
    else{
        year_type = 2; // Год високосный
    }
    return year_type;
}
let month = +prompt('Введите номер месяца: \n 1 - Январь, 2 - Февраль, 3 - Март, 4 - Апрель, 5 - Май, 6 - Июнь, 7 - Июль, 8 - Август, 9 - Сентябрь, 10 - Октябрь, 11 - Ноябрь, 12 - Декабрь');

switch(month){
    case 1: 
    alert('В Январе 31 день');
    break;
    case 2: 
    let year = +prompt('Введите год');
    year_type = year_february(year);
    if(year_type==1){
        alert('В Феврале 28 дней');
    }
    else if(year_type==2){
        alert('В Феврале 29 дней');
    }
    break;
    case 3: 
    alert('В Марте 31 день');
    break;
    case 4: 
    alert('В Апреле 30 дней');
    break;
    case 5: 
    alert('В Мае 31 день');
    break;
    case 6: 
    alert('В Июне 30 дней');
    break;
    case 7: 
    alert('В Июле 31 день');
    break;
    case 8: 
    alert('В Августе 31 день');
    break;
    case 9: 
    alert('В Сентябре 30 дней');
    break;
    case 10: 
    alert('В Октябре 31 день');
    break;
    case 11: 
    alert('В Ноябре 30 дней');
    break;
    case 12: 
    alert('В Декабре 31 день');
    break;
    default:
    alert('Нет такого месяца');
}



