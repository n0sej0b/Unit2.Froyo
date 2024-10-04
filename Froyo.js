
// alert("Enter a list of comma-separated froyo flavors.!");



  let flavor = prompt("Enter a list of comma-separated froyo flavors.","Vanilla,Strawberry,Coffee");
  




let flavorArr = flavor.split(",")

 console.log(flavorArr) 
let flavorObj = {}
 flavorArr.forEach ((flavor) => {
  flavorObj[flavor] = (flavorObj[flavor] || 0) + 1; 

 })


console.log(flavorObj)



//Function option

const populateObject = function(arr){
  let returnObj = {}; 

  arr.forEach((flavor) =>{

  returnObj[flavor] = (returnObj[flavor] || 0) + 1; 

  })
  return returnObj; 
}

populateObject(flavorArr)


// const flavorObj = {
//   "Vanilla": 1,
//   "Strawberry": 1,
//   "Coffee": 1
// }

// someArr.forEach((flavor) =>{
// do something to add the title as a key to the object and make its value go up by 1
// })