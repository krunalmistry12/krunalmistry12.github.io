
function jfun1(){
    var name= document.getElementById("name").value;
    var email= document.getElementById("email").value;
    

    if (name=="" || email==""){
        alert("enter name or Email")
        frm1.text.focus();
        return false;
    }
    else{
        alert("thank you "+name + " "+email)
        
    }
 }
 function validation(){
    var math= document.getElementById("math").value;
    var sci= document.getElementById("sci").value;
    var chem= document.getElementById("chem").value;
    var a=Number(math);
    var b=Number(sci);
    var c=Number(chem);

    var a1=(a+b+c);
    var a2=(a1*100)/300;
    document.getElementById("total").innerHTML=a1;
    document.getElementById("percentage").innerHTML=a2;
    // alert("Total marks"+a1);

 }
function jfun2(){
    // alert("testing");

    var salary=document.getElementById("sal").value;
    var s=Number(salary);
    var performance=document.getElementById("performance").value;
    
    
    if(performance=='a'){
        var b1=(s*30)/100;
        var t1=(b1+s);
        document.getElementById("total").innerHTML=t1;
        document.getElementById("bonus").innerHTML=b1;

    }
    else if(performance=='b'){
        var b2=(s*10)/100;
        var t2=(b2+s);
        document.getElementById("total").innerHTML=t2;
        document.getElementById("bonus").innerHTML=b2;

    }else{
        var b3=0;
        document.getElementById("bonus").innerHTML=b3;
        document.getElementById("total").innerHTML=s;
    }
    

}
function quiz(event){
    
    event.preventDefault();
    let op1=document.getElementsByClassName( 'op1');
    let op2=document.getElementsByClassName( 'op2');
    let r1=document.getElementById('inlineRadio11').checked;
    let r2=document.getElementById('inlineRadio22').checked;
    let score=0;
    if(r1 && r2){
       score+=4;
       alert(score);
    }
    else if (r1 || r2) {
        score+=2;
        alert(score);
    }
    else{
        alert("Wrong")
    }

}
