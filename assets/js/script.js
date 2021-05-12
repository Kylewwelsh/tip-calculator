const button = document.getElementById("calculate")

button.addEventListener(
  "click", ()=> {
    const billAmount = document.getElementById("bill-amount").value;
    const tipPercent = document.getElementById("tip-percent").value;
    const billTimesTip = billAmount * tipPercent / 100;
    const total = billTimesTip.toFixed(2)

    document.getElementById('tip-total').innerHTML= total;

  }
);