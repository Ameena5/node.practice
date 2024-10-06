// 

function alpotp(){
    var CAPITAL="abcdefghijklmnopqrstuvwxyz"

var SMALL="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var NUM="1234567890"

var SYMBOL= "@#!$%^&*"

var A1=CAPITAL+SMALL+NUM+SYMBOL

 var f=""

    for(i=0;i<6;i++){

         f += A1[Math.floor(Math.random()*A1.length)];
        

    }
    return f

}
//console.log(alpotp())
   module.exports={
    alpotp
   }

