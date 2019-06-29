//************for time pick*****
var myvar;
function clock(){
var c=new Date();
var h=c.getHours();
var m=c.getMinutes();
var s=c.getSeconds();
var day=c.getDate();
var month=c.getMonth()+1;
var year=c.getFullYear();
var pm=h%12;
if(h>12 && h<25)
$("#clock").html(pm+":"+m+":"+s+"pm");
else
$("#clock").html(h+":"+m+":"+s+"am");

$("#dat").html(day+"/"+month+"/"+year);

//-------for change color--------
/*function changecolor(x){
$("#clock").css("background-color",""+x+"");
}*/
//---for change color end-----

//*time check to change color ****
if(m==00||m==1||m==2||m==3||m==4||m==5||m==6||m==7||m==8||m==9){
changecolor("#ffc4a3");

}
if(m==10||m==11||m==12||m==13||m==14
||m==15||m==16||m==17||m==18||m==19){
changecolor("green");

}
if(m==20||m==21||m==22||m==23||m==25||m==24||m==26||m==27||m==28||m==29){
changecolor("blue");

}
if(m==30||m==31||m==32||m==33||m==34||m==35||m==36||m==37||m==38||m==39){
changecolor("pink");

}
if(m==40||m==41||m==42||m==43||m==44||m==45||m==46||m==47||m==48||m==49){
changecolor("purple");
changebgimage("p.jpeg");
}
if(m==50||m==51||m==52||m==53||m==54||m==55||m==56||m==57||m==58||m==59){
changecolor("#ff7577");
}
//******* time check end********
}
//************ time pick end*****

//*******for second counting ****
$(document).ready(function(){ myvar=setInterval("clock()",1000);
});
//******counting end********

//*****change bg color*****
/*function changebgimage(y){
$("#bd").css("background-image","url('"+y+"')");
}*/
//***** end*****************
