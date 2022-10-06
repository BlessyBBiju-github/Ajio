function gotoOtp(){
    setTimeout(() => {
            alert ("OTP sent to your mobile number");


            window.location.href="otp_new.html";
        },1000);
     }
 let num = JSON.parse(localStorage.getItem("num_local"));
    
    console.log(num);


    num.forEach(function(el){

        console.log(el);
        console.log(el.number);

        let p_tag = document.getElementById("otp");
    p_tag.innerText = el.number ; 
    })

    
