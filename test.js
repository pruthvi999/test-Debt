let arr = [
  { paidBy: "A", paidFor: { "B": 100, C: 50 } },
  { paidBy: "A", paidFor: { "C": 500 } },
  { paidBy: "B", paidFor: { A: 150, C: 200 } },
  { paidBy: "C", paidFor: { A: 250, B: 200 } }
];

let members = [], deductedArr = [], addedValues = [], result = [];
let mindex, index, j;
function simplifyDebts() {
  arr.forEach(element => {
    if (members.indexOf(element.paidBy) === -1) members.push(element.paidBy);   // get all members of mony transictions 
  });

  for (let i = 0; i < members.length; i++) {
    addedValues.push(0);
    deductedArr.push(0);
  }

  arr.forEach(e => {               
    let arrK = Object.keys(e.paidFor);
    let arrV = Object.values(e.paidFor);
    arrK.forEach(e => {
    index = arrK.indexOf(e);
    
    mindex = members.indexOf(e);
    addedValues[mindex] = addedValues[mindex] + arrV[index]; 
  });
     
  })
// console.log("addedValues -->",addedValues);


  arr.forEach(e => {
    j = members.indexOf(e.paidBy);
    
    let arrV = Object.values(e.paidFor);
    
    const arrSum = arr => arr.reduce((a, b) => a + b, 0);

    deductedArr[j] = deductedArr[j] - arrSum(arrV);
    
  });
  
// console.log("deductedArr -->",deductedArr);


  for(let w = 0 ; w<deductedArr.length ;w++){
    result[w] = addedValues[w] + deductedArr[w];  // got resultentent array
  }

let positiveArr = result.filter(num => num > 0);
let negativeArr = result.filter(num => num < 0);

// let res = [];
  positiveArr.forEach(e => { 
      negativeArr.forEach(e1 => {
      if(e > e1 && e !== 0){
        let i1 = result.indexOf(e) ;
        let j1 = result.indexOf(e1);
        e - e1;
        // res.push(members[i1],members[j1],-(e1));
         console.log(members[i1] + "  owes  " + members[j1] +" "+ -(e1));
      }
  })
})

// return res;

}

simplifyDebts();
