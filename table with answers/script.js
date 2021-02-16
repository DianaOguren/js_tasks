
let vopros = ['На ноль делить можно?', 'Волга впадает в Каспийское море?', 'Атмосферное давление увеличивается с высотой?', '2*2 будет 8', 'Дельфины - это рыбы', 'Мадонна - это настоящее имя певицы', 'Первая мировая война началась в 1939 году' ];
let prav_otvet = [false, true, false, false, false, false, false];
let sum = 0;
let res = new Array();

for(let i=0;i<vopros.length;i++){
    let otvet = confirm(vopros[i]);
    if(otvet == prav_otvet[i]){
        res[i] = 10;
        sum += res[i];
    }
    else{
        res[i]=0;
    }
} 

document.write("<table border='1' width='500'>");

document.write("<tr>");
document.write("<th>Вопрос</th>");
document.write("<th>Баллы</th>");
document.write("</tr>");

for(let i=0;i<vopros.length;i++){
    document.write("<tr>");
    document.write("<td>"+vopros[i]+"</td>");
    document.write("<td>"+res[i]+"</td>");
    document.write("</tr>");
}

document.write("<tr>");
document.write("<th>Итог</th>");
document.write("<th>"+sum+"</th>");
document.write("</tr>");

document.write("</table>");