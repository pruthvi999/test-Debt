let arr4 = [                                      // first EX of transection
  { paidBy: "A", paidFor: { "B": 100, C: 50 } },
  { paidBy: "A", paidFor: { "C":500} },
  { paidBy: "B", paidFor: { A: 150, C: 200 } },
  { paidBy: "C", paidFor: { A: 250, B: 200 } }
];

let arr2 = [ { 'paidBy': 'A', 'paidFor': { 'C': 300, 'E': 35, 'F': 35 } }, // second EX of transection
              { 'paidBy': 'B', 'paidFor': { 'D': 40, 'G': 10 } } ]

let arr3 =  [ { 'paidBy': 'A', 'paidFor': { 'C': 300, 'E': 40, 'F': 30 } },   // thired EX of transection
             { 'paidBy': 'B', 'paidFor': { 'D': 50 } } ]; 

let arr = [ { 'paidBy': 'A', 'paidFor': { 'C': 300, 'E': 35, 'F': 35 } }, // forth EX of transection
             { 'paidBy': 'A', 'paidFor': { 'B': 40 } } ,
             { 'paidBy': 'B', 'paidFor': { 'C': 40 } } ,
             { 'paidBy': 'C', 'paidFor': { 'A': 40 } } ,
             { 'paidBy': 'B', 'paidFor': { 'D': 40, 'G': 10 } } ]

let members = [],extraMembers = [], deductedArr = [], addedValues = [], result = [], finalExtraMembers = [];
let mindex, index, j; 
var paidForKey, paidForValues;


function simplifyDebts() {                      

  arr.forEach(transection => {
    if (members.indexOf(transection.paidBy) === -1) members.push(transection.paidBy);   // get all members of mony transictions 
  });
  arr.forEach(transection => {
    paidForKey = Object.keys(transection.paidFor);                              // got keys of paid for members   
    paidForValues = Object.values(transection.paidFor);                         // got values of paid for members
    let k =0
    paidForKey.forEach(e2 => {
      if(transection.paidBy !== e2){
      if (extraMembers.indexOf(e2) === -1 && members.indexOf(e2) == -1) {extraMembers.push(e2,transection.paidBy,paidForValues[paidForKey.indexOf(e2)]), k++,finalExtraMembers.push(e2)}}  // by this got hte extra members in transection who have not paid for any one. 
    })
  })
  let z ;
  for(z = 0; z < extraMembers.length; z += 3){
    console.log(extraMembers[z] + " owes " + extraMembers[z+1] + " " + extraMembers[z+2],"---->>>1"); // priented the extra members transections
  }
  var arrV = [], arrVsub = [];
  for (let i = 0; i < members.length; i++) {    
    addedValues.push(0);          // created 0 valued array of size members  to paid for values            
    deductedArr.push(0);         // // created 0 valued array of size members to paid by values 
    arrV.push(0);
    arrVsub.push(0);
  }

  let arrK = [] , arrK1 =[];
  arr.forEach(e => {         
    { arrK =Object.keys(e.paidFor);
   }
   arrK.forEach(e2 =>{
    if (members.indexOf(e2) !== -1 && finalExtraMembers.indexOf(e2) == -1 ){ arrK1.push(e2)
   
      let g = members.indexOf(e2)
     arrV[g] += (e.paidFor[e2]);}
     
   })
   addedValues = arrV;
  })

  arr.forEach(e => {
    j = members.indexOf(e.paidBy);       
    { arrK =Object.keys(e.paidFor);
    }
    arrK.forEach(e2 =>{
     if (members.indexOf(e2) !== -1 && finalExtraMembers.indexOf(e2) == -1 ){ 
     arrVsub[j] -= (e.paidFor[e2])}
      
    })
    deductedArr = arrVsub;
  });
  for(let w = 0 ; w<deductedArr.length ;w++){
    result[w] = addedValues[w] + deductedArr[w];  // got resultentent array
  }
  
let r =[];
result.forEach(e => {      
        if(e === 0){             // checked if resultentent array is zero 
          r.push(e);
        }
})
 if(r.length == result.length)                // checkes resultentent array if they no need to transections 
 console.log("No Need To Transection") ; 
 
let positiveArr = result.filter(num => num > 0);         // got paid for values from resultentent array
let negativeArr = result.filter(num => num < 0);         // got paid by values from resultentent array 

  positiveArr.forEach(e => { 
      negativeArr.forEach(e1 => {
      if(e > e1 && e !== 0){
        let i1 = result.indexOf(e) ;                    // got index of paid for values
        let j1 = result.indexOf(e1);                    // got index of paid by values 
        e - e1;
         console.log(members[i1] + "  owes  " + members[j1] +" "+ -(e1),"---->>>2");         // priented the transections 
      }
  })
})
}

simplifyDebts();                      // function call 


