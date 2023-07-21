const vehicle ={
    brand:"ford",
    model:"mustang",
    type:"car",
    year:"2021",
    color:"red"
}
const num =[1,2,3,4,5,6,7]
const cars = ["sienna","hummer","307","mecedez","toyota"]
myVehicle(vehicle);
function myVehicle({type,model,brand}){
    const message= "my "+type+" is "+model+" "+brand
    console.log(message);
}

 //const{color}= vehicle;
// console.log(color);
// const[x1,x5,...x2] = cars
console.log([...cars,"Volkswagen"]);
const typeOfCars = num.filter(c=>(c>=3))
console.log(typeOfCars);
    