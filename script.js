const convertButton = document.getElementById('convert-btn');
const inputOne = document.getElementById('currencyinput1');
const inputTwo = document.getElementById('currencyinput2');
const swapButton = document.getElementById('swap-btn');
const selectCurrencyOne = document.getElementById('selectCurrency1');
const selectCurrencyTwo = document.getElementById('selectCurrency2');

function selectCurrency(){
      let url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_p5ShIP4QNBmwDRlssYKTEX2QuwssAAxxJthCmKwe`
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url, true); 
      xhr.onload = function(){
          console.log(this.responseText); 
      }
      xhr.send();
}

convertButton.addEventListener('click',selectCurrency);