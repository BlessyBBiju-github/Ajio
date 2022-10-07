function home() {
    window.location.href = "Ajio.html";
  }

  let num = JSON.parse(localStorage.getItem("num_local"));

  console.log(num);

  num.forEach(function (el) {
    console.log(el);
    console.log(el.number);

    let p_tag = document.getElementById("otp");
    p_tag.innerText = el.number;
  });

 