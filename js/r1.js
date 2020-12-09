
var tab = ["2", "0", "0", "1","1"], tabR = [],msg;
//alert("tab="+tab.toString());
function saf() {
    'use strict';
    if (test()) {
        save();
       // alert(tabR.toString())
        msg=calc() * 100;
        alert(msg);
        if(msg>50) {
            alert("لقد ربحت");
         document.getElementById("h1").innerHTML="لقد تحصلت على "+msg+"% <a href='../styge2/r2.html'>المستوى التالي</a>";
        } else {
            alert("'لقد خسرت'");
          document.getElementById("h1").innerHTML="لقد تحصلت على "+msg+"%";  
        }
    } else {
        console.log("bad");
    }
    //alert("tab="+tab.toString());
 //  alert("tab="+tabR.toString());
}
function test() {
    'use strict';
    var i, j, bol;
    for (j = 0; j < tab.length; j++) {
        bol = false;
        
        for (i = 0; i < 3; i++) {
            bol = bol || document.nameFrmRadio[j].R1[i].checked;           
        }
        if (bol === false) { alert("لقد نسيت العنصر رقم" + (j + 1)); }
    }
    if (bol === true) {return true; } else {return false; }
}
function save() {
    'use strict';
    var i, j;
    for (j = 0; j < tab.length; j++) {
    
        for (i = 0; i < 3; i++) {
            if(document.nameFrmRadio[j].R1[i].checked){ 
                tabR[j] = i;
                }
        }
    }
   
}
function calc() {
    'use strict';
    var i, s = 0;
        for (i = 0; i < tab.length; i++) {
            console.log("i-->" + i);
            console.log("tabR["+i+"]-->" + tabR[i]);
            console.log("tab["+i+"]-->" + tab[i]);
           if(tab[i] == tabR[i]) {
              s += 1;  
               document.getElementById("a"+i).innerHTML="v";
           } else {
            document.getElementById(""+i).innerHTML="x";
           }
        }
    //alert("s="+s);
    return s/tab.length;
}


