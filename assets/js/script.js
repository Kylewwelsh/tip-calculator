const button = document.getElementById("calculate")

button.addEventListener(
  "click", ()=> {
    const billAmount = document.getElementById("bill-amount").value;
    const tipRating = document.getElementById("tip-rating").value;
    const billTimesTip = billAmount * tipRating;
    const total = billTimesTip.toFixed(2)

    document.getElementById('tip-total').innerHTML= total;

  }
);