let btn= document.getElementById("btn");

function calc(){
    
let tip= document.getElementById("tip").value;
let bill= document.getElementById("bill").value;
let tipAmt= document.getElementById("tipAmt");
let total= document.getElementById("total");

bill=Number.parseInt(bill)
tip=Number.parseInt(tip)

    let totalTip= (bill*tip)/100;
    totalTip=Number.parseInt(totalTip)
    let totalAmt= bill+totalTip;

    total.innerHTML=totalAmt;
    tipAmt.innerHTML=totalTip;
}

btn.addEventListener("click", calc)