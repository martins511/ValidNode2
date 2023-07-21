const basic4 = [
  { Name: "Gift", CA: 23, Exam: 52, Total: 75 },
  { Name: "Blessing", CA: 19, Exam: 48, Total: 67 },
  { Name: "GodGift", CA: 20, Exam: 50, Total: 70 },
  { Name: "Maridiyat", CA: 27, Exam: 55, Total: 82 },
  { Name: "Aisha", CA: 28, Exam: 54, Total: 82 },
  { Name: "Sumaiya", CA: 12, Exam: 38, Total: 50 },
  { Name: "Saida", CA: 15, Exam: 39, Total: 54 },
  { Name: "Haruna", CA: 11, Exam: 49, Total: 60 },
  { Name: "Zainab", CA: 26, Exam: 52, Total: 78 },
];

const basic5 = [
  { Name: "arafat", CA: 21 },
  { Name: "caleb", CA: 25 },
  { Name: "aliyu", CA: 20 },
  { Name: "adamu", CA: 12 },
  { Name: "jamiu", CA: 23 },
];

const records = [
  "Gift",
  "Blessing",
  "GodGift",
  "Maridiyat",
  "Aisha",
  "Sumaiya",
  "Saida",
  "Haruna",
  "Zainab",
];

const age = [12, 21, 16, 32, 36, 47, 49, 60];

 const student1 = { Name: "Zainab", CA: 26 };
 const student2 ={ Exam: 52, Total: 75 };
 const combineStudent = {...student1, ...student2};
// console.log(add);
// console.log("Array sort");
// basic4.sort((a, b) => {
//   return b.CA - a.CA;
// });
// console.log(basic4);
// for (const i of basic4) {
//   console.log(i);
// }

// records.sort();
// console.log(basic4);
// console.log(records);
// for(let i =0; i< basic4.length; i++){
//   console.log(basic4[i]);
// }
console.log("--------------");
basic4.forEach((itrate) => {
  console.log(itrate);
});

// var add = records.filter((x)=>{
//   if(x.endsWith("t")){
//   return true
//   }
// })

//  console.log(add)
// const school = basic4.map((x)=>{
//    return x.CA
// })
//  console.log(school);
// const add = age.filter(x=>(x>40 && x<60));
// console.log(add);
//  const school = basic4.map((x)=>x.CA)

//  console.log(school);
console.log('For each ----');
age.forEach((x,i)=>{
   console.log(i+" - "+x*5);
  //console.log(x);
})
//const x = records.filter(y=>y.endsWith("a"))
// const x = records.filter((y)=>{
//   return y.endsWith("t");
// })
//console.log(x);

// const schl = basic4.filter((x)=>{
//   if(x.Name=="GodGift"){
//     return true
//   }
// })
// console.log(schl);
console.log("filter array");
const w = basic4.filter(x=>x.Total==70);
console.log(w);

// const s = basic4.map(x=>x.Exam).map(x=>Math.sqrt(x));
// console.log(s);
// const sumAge = age.reduce((total,age)=>{
//   return total+age
// },0);
// console.log(sumAge);
// const sum =age.reduce((a,b)=>a+b,0);
// console.log(sum);

// const sumSchool = basic4.reduce((total,x)=>total+(x.CA+x.Exam),0);
// console.log(sumSchool);

// const combine = age
//   .map(a => a * 2)
//   .filter(x => x > 21)
//   .sort((a, b) => a.Exam - b.Exam)
//   .reduce((total, s) => total + s, 0);
// console.log(combine);

// const add = basic4
//   .filter(x => x.Exam - x.CA >= 30)
//   .reduce((y,z)=>y+(z.Exam-z.CA),0)
// console.log(add);
// const add = age.filter((x) => x > 30).reduce((y, z) => y + z,0);
// console.log(add);
console.log("sort name");
const sortname = basic4.sort((a,b)=>(a.Name>b.Name)?1:-1);
console.log(sortname);
// console.log(Object.values(basic4));
// const name = 'mariam';
// const changeName = [...name];
// changeName.forEach(x=>console.log(x))
 const combineClass = {...basic4, ...basic5};
// const addNumber = (n1, n2, n3) => {
//   return n1 + n2 + n3;
// };
// const number = [6, 5, 7];
// const add = addNumber(...number);
// console.log(add);
// console.log(...number);
 console.log(combineStudent);
// console.log(JSON.stringify(combineClass,null,2));
// const getValueAndIndex = age.map((x,i)=>x+" "+i);
// console.log(getValueAndIndex);

// const square = age.map((x,i)=>Math.pow(x,i));
// console.log(square);