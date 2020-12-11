var people = [
{name: ['Alyssa', 'P.', 'Hacker'], age: 26},
{name: ['Ben', 'L.','Bitdiddle'], age: 34},
{name: ['Eva','Lu', 'Ator'], age: 40},
{name: ['Lem', 'E.','Tweakit'], age: 45},
{name: ['Louis','M.','Reasoner'], age: 21},
{name: ['Shahan','Haig','Krakirian'], age: 26}
];

document.getElementById("all").addEventListener("click", fullNamelist);
document.getElementById("age-button").addEventListener("click", getAgefunction);

function fullNamelist(){
var text = "";
var A = 0;
var arrcount = 1;

for (A = 0; A < people.length; A++) {
	var N = 0;
	text += arrcount + "-";

	for (var N = 0; N < 3; N++) {
    text += people[A]["name"][N]+ " ";
}
	text += "<br>";
	arrcount++;
}

document.getElementById("solution").innerHTML = text;
}

function getAgefunction(){
var A = 0;
var i;
var fName = document.getElementById("name-input").value;

    for (A = 0; A < people.length; A++) {

    if (people[A]["name"][0] == fName) {
    i = A;
  	} else {
    //Just empty
  }
  }
document.getElementById("solution1").innerHTML = people[i]["age"];
}
