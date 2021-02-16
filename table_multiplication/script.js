function color(){
    var x = document.getElementsByTagName('td');
        for(let i=0;i<x.length;i++) {
            if (i%2!=0){
                x[i].style.backgroundColor ="pink";
            }
        }
    }
    
 document.write('<table border="1"  cellspacing="1"style="margin-left: 100px" ');
 for(let i=1;i<11;i++){
    document.write('<tr bgcolor="yellow">');
        for(let j=1;j<11;j++){
            document.write('<td class="red_num" align="center">'+i*j+'</td>');
            color();
        } 
        
    document.write("</tr>");
 }
 document.write("</table>");



