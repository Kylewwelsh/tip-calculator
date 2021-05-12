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



// const button = document.getElementById('submit')

// button.addEventListener(
//   "click", () => {
//     var meal = document.getElementById('mCost').value;
//     var mealCalc = meal * .2;
//     var total=mealCalc.toFixed(2);
    
//     document.getElementById('total').innerHTML= "Total Bill: $" +total;
//   }
// )