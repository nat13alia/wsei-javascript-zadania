  
document.addEventListener("DOMContentLoaded", function(){

    var cardType = document.getElementById("type");
    var cardNumberInput = document.getElementById("name");
  
    cardNumberInput.addEventListener("keyup", function(){
      var cardNumber = cardNumberInput.value;
  
      if (cardNumber[0] == "4" && (cardNumber.length >= 13 && cardNumber.length <= 16)) {
        cardType.innerHTML = "Visa";
        validate();
      } else if (cardNumber[0] == "5" && cardNumber.length == 16) {
        cardType.innerHTML = "Mastercard";
        validate();
      } else if (cardNumber[0] == "3" && (cardNumber[1] == "4" || cardNumber[1] == "7") && cardNumber.length == 15) {
        cardType.innerHTML = "American Express";
        validate();
      } else {
        cardType.innerHTML = "";
        cardNumberInput.style.borderColor = "";
      }
    });

    function validate(){
        cardNumberInput.style.borderColor = 'green';
    }
  });