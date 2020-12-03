document.getElementById("kira").addEventListener("click", calloan);

function calloan() {
  var principal = +document.getElementById("principal").value;
  var deposit = +document.getElementById("deposit").value;
  var interest = +document.getElementById("interest").value;
  var years = +document.getElementById("years").value;

  var totalPrincipal = principal + deposit;
  var totalInterest = (interest/100)*(totalPrincipal*years);
  var totalToPay = totalInterest + totalPrincipal;
  var monthlyToPay = (totalToPay/years)/12;

  document.getElementById("payment").innerHTML = monthlyToPay;
}
