const input = document.getElementById('input');
const mybtn = document.getElementById("mybtn");
const result = document.getElementById("result");

let age;

mybtn.onclick = function() {
    age=input.value;
    age= Number(age);
    if (age >= 100){
        result.textContent = "Wow! You are really old!";
    }
    else if(age >= 45){
        result.textContent = "You are Uncle or Aunty.";
    }
     else if(age >= 35){
        result.textContent = "You are middle-aged.";
    }
    else if (age >= 18){
        result.textContent = "You are an adult.";
    }
    else if (age == 0){
        result.textContent = "You are not born yet!";
    }
    else if (age < 0){
        result.textContent = "You are from the future!";
    }
   
    
    else {
        result.textContent = "You are a minor.";
    }
}