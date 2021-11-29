function validation()
{
     // Validation for Name

     var name = document.getElementById("name").value;
     var regx = /^[a-zA-Z]{3,25}$/;
 
     if (regx.test(name))
     {
         document.getElementById("lab1").innerHTML="valid";
         document.getElementById("lab1").style.visibility="hidden";
         document.getElementById("lab1").style.color="green";
 
     }
     else
     {
       //  text.style.border="solid 3px red";
         document.getElementById("lab1").innerHTML="invalid";
         document.getElementById("lab1").style.visibility="visible";
         document.getElementById("lab1").style.color="red";
 
     }


    // Validation for Mobile number

    var text = document.getElementById("text1").value;
    var regx = /^[7-9][0-9]{9}$/;

    if (regx.test(text))
    {
        document.getElementById("lbl").innerHTML="valid";
        document.getElementById("lbl").style.visibility="hidden";
        document.getElementById("lbl").style.color="green";

    }
    else
    {
      //  text.style.border="solid 3px red";
        document.getElementById("lbl").innerHTML="invalid";
        document.getElementById("lbl").style.visibility="visible";
        document.getElementById("lbl").style.color="red";

    }
// Validation for MailID

    var mail = document.getElementById("Email").value;
    var regx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\.-]+).([a-z]{2,8}).([a-z]{2,8})?$/;

    if (regx.test(mail))
    {
        document.getElementById("lbl1").innerHTML="valid";
        document.getElementById("lbl1").style.visibility="hidden";
        document.getElementById("lbl1").style.color="green";

    }
    else
    {
        //mail.style.border="solid 3px red";
        document.getElementById("lbl1").innerHTML="invalid";
        document.getElementById("lbl1").style.visibility="visible";
        document.getElementById("lbl1").style.color="red";

    }

// Validation for Date of Birth

    var dob=document.getElementById("dob").value;
    var regx= /^([0-2][0-9]|(3)[0-1])(-)(((0)[0-9])|((1)[0-2]))(-)\d{4}$/;

        if (regx.test(dob))
        {
            document.getElementById("lbl4").innerHTML="valid";
            document.getElementById("lbl4").style.visibility="hidden";
            document.getElementById("lbl4").style.color="green";

        }
        else
        {
            //code.style.border="solid 4px red";
            document.getElementById("lbl4").innerHTML="invalid";
            document.getElementById("lbl4").style.visibility="visible";
            document.getElementById("lbl4").style.color="red";

        }
    


//AutoFill Address when clicking the checkbox
        
        
      
    //check for Address 
            var str1=document.getElementById("address");
                if(str1.value.trim()=="")
                {
                      document.getElementById("address").innerHTML="invalid";
                      document.getElementById("address").style.visibility="visible";
                      document.getElementById("address").style.border.color="red";
              
                }
                else
                {
                  //  text.style.border="solid 3px red";
                    document.getElementById("address").innerHTML="invalid";
                    document.getElementById("address").style.visibility="visible";
                    document.getElementById("address").style.color="red";
            
                }
                var str2=document.getElementById("label1");
                if(str2.value.trim()=="")
                {
                   //  text.style.border="solid 3px red";
                   document.getElementById("label1").innerHTML="invalid";
                   document.getElementById("label1").style.visibility="visible";
                   document.getElementById("label1").style.color="red";
                }
                else
                {
                    document.getElementById("label").innerHTML="valid";
                    document.getElementById("label").style.visibility="visible";
                    document.getElementById("label").style.color="green";
            
                }
                var code=document.getElementById("Pincode").value;
var regx=/^[0-9]{6}$/;

if (regx.test(code))
{
    document.getElementById("lbl2").innerHTML="valid";
    document.getElementById("lbl2").style.visibility="hidden";
    document.getElementById("lbl2").style.color="green";

}
else
{
    //code.style.border="solid 3px red";
    document.getElementById("lbl2").innerHTML="invalid";
    document.getElementById("lbl2").style.visibility="visible";
    document.getElementById("lbl2").style.color="red";

}
// Validation for Pincode(Permanent Address)

var code=document.getElementById("Pincode").value;
var regx=/^[0-9]{6}$/

if (regx.test(code))
{
    document.getElementById("lbl3").innerHTML="valid";
    document.getElementById("lbl3").style.visibility="hidden";
    document.getElementById("lbl3").style.color="green";

}
else
{
    
    document.getElementById("lbl3").innerHTML="invalid";
    document.getElementById("lbl3").style.visibility="visible";
    document.getElementById("lbl3").style.border.color="red";          
}
}
function autofill() 
{
    document.getElementById('CurrentAddress2').value=document.getElementById('CurrentAddress').value;
    document.getElementById('Address2').value=document.getElementById('Address').value;
    document.getElementById('city2').value=document.getElementById('city').value;
    document.getElementById('State2').value = document.getElementById('State').value;
    document.getElementById('Pincode2').value = document.getElementById('Pincode').value;
}