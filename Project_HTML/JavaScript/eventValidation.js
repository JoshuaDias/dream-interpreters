function validateEvent(){
    var title=document.getElementById('title').value;
    var subject=document.getElementById('subject').value;
    var todate=document.getElementById('todate').value;
    var fromdate=document.getElementById('fromdate').value;
    
    var datediff=todate-fromdate;
    
    var pattern=/^[a-z\d\-_\s]+$/i;
    
    var d1,d2,d3,d4=0;
    
    if (title == "")
    {
        document.getElementById('errtitle').innerHTML="Please Enter a Title";
    }
    else if(pattern.test(title)){
        document.getElementById('errtitle').innerHTML="";
        d1=1;
    }

    else
        document.getElementById('errtitle').innerHTML="Enter a valid title"

   
    if (subject == "")
     {
         document.getElementById('errsubject').innerHTML="Please Enter a description for your event";
     }
    else {
        document.getElementById('errsubject').innerHTML="";
         d2=1;
    }
    
    if (fromdate == "")
    {
        document.getElementById('errfromdate').innerHTML="Please enter a start date"
    }
    else
        {
            document.getElementById('errfromdate').innerHTML="";
            d4=1;
        }

    if (todate < fromdate ) {
       document.getElementById('errdate').innerHTML = "End Date cannot be before Start Date";
     }
    else {
        document.getElementById('errdate').innerHTML = "";
        d3=1;
     }
    

     if (d1==1 && d2==1 && d3==1){
        return true;
        
     }

     else{
        window.scrollTo(200, 200) ;
        return false;
        
     }

   
    
}



