const button = document.getElementById("calculate")

button.addEventListener(
  "click", ()=> {
    const billAmount = document.getElementById("bill-amount").value;
    const tipPercent = document.getElementById("tip-percent").value;
      if (tipPercent <= 15) {
        alert("That's a pretty cheap tip.. Lets try and bump that up a bit big spender..");
        return;
      }
    const billTimesTip = billAmount * tipPercent / 100;
    const total = billTimesTip.toFixed(2)

    document.getElementById('tip-total').innerHTML= total;
  }
);