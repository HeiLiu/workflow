const add = (a, b) => {
  // if(isNaN(a) || isNaN(b)){
  //   return NaN
  // }else{
  //   return a + b
  // }
  if(typeof a === 'number' && typeof b === 'number'){
    return a + b
  }else{
    return NaN
  }
}
// console.log(add(1, '2'))  // test case
module.exports ={
  add,
}