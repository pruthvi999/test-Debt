let arr1 = [
  { paidBy: "A", paidFor: { "B": 100, C: 50 } },
  { paidBy: "A", paidFor: { "C":500} },
  { paidBy: "B", paidFor: { A: 150, C: 200 } },
  { paidBy: "C", paidFor: { A: 250, B: 200 } }
];

let arr2 = [ { 'paidBy': 'A', 'paidFor': { 'C': 300, 'E': 35, 'F': 35 } }, 
              { 'paidBy': 'B', 'paidFor': { 'D': 40, 'G': 10 } } ]

let arr =  [ { 'paidBy': 'A', 'paidFor': { 'C': 300, 'E': 40, 'F': 30 } },
             { 'paidBy': 'B', 'paidFor': { 'D': 50 } } ]; 

let members = [],extraMembers = [], deductedArr = [], addedValues = [], result = [];
let mindex, index, j; var paidForKey, paidForValues;;
function simplifyDebts() {
  arr.forEach(transection => {
    if (members.indexOf(transection.paidBy) === -1) members.push(transection.paidBy);   // get all members of mony transictions 
  });
  arr.forEach(transection => {
    paidForKey = Object.keys(transection.paidFor);
    paidForValues = Object.values(transection.paidFor);
    let k =0
    paidForKey.forEach(e2 => {
      if(transection.paidBy !== e2){
      if (extraMembers.indexOf(e2) === -1 && members.indexOf(e2) == -1) {extraMembers.push(e2,transection.paidBy,paidForValues[k]), k++};}  // by this got hte extra members in transection who have not paid for any one. 
    })
  })

  let z ;
  for(z = 0; z < extraMembers.length; z += 3){
    console.log(extraMembers[z] + " owes " + extraMembers[z+1] + " " + extraMembers[z+2]); // priented the extra members transections
  }
  
  for (let i = 0; i < members.length; i++) {    // created 0 valued array of size members 
    addedValues.push(0);                     
    deductedArr.push(0);
  }
  
  let arrK
  let arrV
  arr.forEach(e => {         
     if (members.indexOf(e) === -1 ){ arrK =Object.keys(e.paidFor);
    arrV = Object.values(e.paidFor);}
    arrK.forEach(e => {
    index = arrK.indexOf(e);              // got index of members array
    
    mindex = members.indexOf(e);
    addedValues[mindex] = addedValues[mindex] + arrV[index];    // get paidfor values 
  });
     
  })



  arr.forEach(e => {
    j = members.indexOf(e.paidBy);       
    
    let arrV = Object.values(e.paidFor);       // got paidFor values 
    
    const arrSum = arr => arr.reduce((a, b) => a + b, 0);    // got sum of array values 

    deductedArr[j] = deductedArr[j] - arrSum(arrV);     // get paid by values
    
  });
  



  for(let w = 0 ; w<deductedArr.length ;w++){
    result[w] = addedValues[w] + deductedArr[w];  // got resultentent array
  }
  
let r =[];
result.forEach(e => {      
        if(e == 0){             // checked if resultentent array is zero 
          r.push(e);
        }
})
 if(r.length == result.length)                // checkes resultentent array if they no need to transections 
 console.log("Node Need To Transection") ; 
 
let positiveArr = result.filter(num => num > 0);         // got paid for values from resultentent array
let negativeArr = result.filter(num => num < 0);         // got paid by values from resultentent array 

// let res = [];
  positiveArr.forEach(e => { 
      negativeArr.forEach(e1 => {
      if(e > e1 && e !== 0){
        let i1 = result.indexOf(e) ;                    // got index of paid for values
        let j1 = result.indexOf(e1);                    // got index of paid by values 
        e - e1;
         console.log(members[i1] + "  owes  " + members[j1] +" "+ -(e1));         // priented the transections 
      }
  })
})
}

simplifyDebts();




