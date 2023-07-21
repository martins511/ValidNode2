const myArray = [16, 64, 81];
const arrayTwo = [1,2,3,4,5]
const mylist = myArray.map((r)=>{
    return Math.sqrt(r);
});
console.log(mylist);
// const z = mylist.map((c)=>{
//     return Math.sqrt(c);
// })

// console.log(z);

// const x = mylist.map(r=>Math.sqrt(r));
// console.log(x);
 const concatArray = [...arrayTwo,...myArray];
//  concatArray.forEach(r=>console.log(Math.sqrt(r)))
console.log("...........");
//   const xy= concatArray.forEach(r=>{
//       return console.log(r);
//   }) 
  
 

