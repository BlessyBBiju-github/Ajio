function cont(){

        let arr = JSON.parse(localStorage.getItem("num_local"))||[] ;

        let obj = {
            number : document.getElementById("search").value,
        };

        arr.push(obj);
        
        localStorage.setItem("num_local", JSON.stringify(arr));



        window.location.href="registration.html";
    }
