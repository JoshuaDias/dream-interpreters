function validate(){
    var fname=document.getElementById('fname').value;
    var lname=document.getElementById('lname').value;
    var email=document.getElementById('email').value;
    var pattern=/^[a-zA-Z]{2,30}$/;
    var emailpattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var d1,d2,d3=0;
    
    if (fname == "")
    {
        document.getElementById('errfname').innerHTML="Please Enter First Name";
    }
    else if(pattern.test(fname)){
        document.getElementById('errfname').innerHTML="";
        d1=1;
    }
    else {
        document.getElementById('errfname').innerHTML="Please enter alphabets only"
    }
    if (lname =="")
    {
        document.getElementById('errlname').innerHTML="Please Enter Last Name";
    }
    else if(pattern.test(lname)){
        document.getElementById('errlname').innerHTML="";
        d2=1;
    }
    else {
        document.getElementById('errlname').innerHTML="Please enter alphabets only"
    }

    if (email == "") {
        document.getElementById('erremail').innerHTML = "Please enter email";
    }
    else if (emailpattern.test(email)) {
        document.getElementById('erremail').innerHTML = "";
        d3=1;
    }
    else {
        document.getElementById('erremail').innerHTML = "Invalid Email"
    }

     if (d1==1 && d2==1 && d3==1){
        return true;
     }

     else{
        window.scrollTo(200, 700) ;
        return false;
        
     }

   
    
}
