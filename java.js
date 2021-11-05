
  const n=document.getElementById("ok");
  n.style.display="block";


const q= document.getElementById("mydiv");
q.style.display="none";

window.onload = async function(){
    document.getElementById("bt1").onclick=async function(){
        var mail=document.getElementById("email").value;

        if(mail==""){
           alert("E- Mail can not be null , Please enter mail carefully ");
           return;
        }


        const n=document.getElementById("ok");
         n.style.display="none";

         const q= document.getElementById("mydiv");
         q.style.display="block";

    
    

     console.log(mail);
     
    var url = "https://emailvalidation.abstractapi.com/v1/?api_key=7907f6eee5f643f18215265d216d1f19&email="+mail;
    const resposnse= await fetch(url);
    const data=await resposnse.json();
    
    document.getElementById("emailid").innerHTML=data.email;
    document.getElementById("d").innerHTML=data.deliverability;
    document.getElementById("free").innerHTML=data.is_free_email.text;
    document.getElementById("de").innerHTML=data.is_disposable_email.text;
    document.getElementById("smtp").innerHTML=data.is_smtp_valid.text;
 
    

    
    
    
        }
    }
      