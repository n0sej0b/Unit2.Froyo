
alert("Enter a list of comma-separated froyo flavors.!");


function myFunction() {
  let flavor = prompt("Enter a list of comma-separated froyo flavors.");
  if (flavor != null) {
    document.getElementById("fill").innerHTML =
    "Flavors " + flavor + "! Ordered";
  }
}

let text = "";
const flavors = ["Vanilla", "Vanilla","Vanilla","Strawberry", "Coffee","Coffee"];
flavors.forEach(myFunction);

document.getElementById("fill").innerHTML = text;
 
function myFunction(item, index) {
  text += index + ": " + item + "<br>"; 
}

console.log(flavors);






// const flavors = {
//     vanilla: true,
//     coffee: true,
//     strawberry: true,
// };

// console.log(Object.keys(flavor));

// let flavor = 0;

// for (let i=0; i< flavor)

