window.onload = function() {
//mine    
  var check=document.querySelector("input[type=checkbox]");
  var comissionRange = document.querySelector(".comission");
  //mine 
  
  var range = document.querySelector("input[type=range]");
  var input = document.querySelector("input[type=number]");
  var result = document.querySelector("#result");
  var status = document.querySelector(".status");
  var status_per = document.querySelector(".status_per");
  
  range.oninput = function() {
      input.value = this.value;
      calc();
  }

  input.oninput = function() {
     range.value = this.value;
     calc();
  }
    
     

    function calc() {
        var total = +input.value;
        
        var proc;

     if (check.checked) {
        proc = comissionRange.value;  
     } else {
        if (total < 20 ) {
            proc = 2;
        } else if (total>=20 && total < 50) {
            proc = 4;
        } else if(total >= 50 && total <= 100) {
            proc = 6;
        }
     }
       
        var temp = (total*proc)/100;

        status.style.height = total+"px";

        status_per.style.height = temp+"px";
        status_per.style.bottom = status.style.height;
        result.innerHTML = total + temp;
    }
  
  check.onchange = function() {
      var comissionRange = document.querySelector(".comission");
        //switcher
         if (this.checked) {
            comissionRange.removeAttribute("disabled");
          }
         else
          {
            comissionRange.setAttribute("disabled", "disabled");
          }
        calc();
  };
  
  comissionRange.oninput = function() {
    calc();
  }
      
}