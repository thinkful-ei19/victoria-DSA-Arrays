function replace(str){
  return str.replace(/\s/g, '%20')
}

console.log(replace('tauhida parveen'))

////

function filtering(arr, num){
const ans = [];

arr.forEach(n => {
   if(n > num) {
     ans.push(n)
   }
 })
  return ans
}

console.log(filtering([1, 4, 7, 8, 9, 45, 60], 6))

///

function findMax(arr){
 let min = 0;
 let ans = 0;
 let sum = 0;

 for (i = 0; i < arr.length; ++i){
   sum += arr[i];
   min = Math.min(sum, min);
   ans = Math.max(ans, sum - min);
 console.log(min, ans, sum)
 }
 return ans;
}

console.log(findMax([-6,6,-3,5,-2,1]))

///

function merge(arr1, arr2){
  let i = 0;
  let j = 0;
  const ans = []

  while(ans.length < arr1.concat(arr2).length){
    if (arr1[i] < arr2[j]){
      ans.push(arr1[i])
      i++
    } else if (arr2[j] < arr1[i]) {
      ans.push(arr2[j])
      j++
    } else if (arr2[j] === arr1[i]) {
      ans.push(arr1[i], arr2[j])
      i++
      j++
    } else if (!arr1[i]){
      ans.push(arr2[j])
      j++
    } else if (!arr2[j]){
      ans.push(arr1[i])
      i++
    }
  }

  return ans
}

console.log(merge([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]))

///

function removeChar(str, char){
  for (let i = 0; i < str.length; i++) {
    if (char.includes(str[i])){
      str =str.slice(0, i) + str.slice(i + 1, str.length)
      i--
    }
  }
  return str
}

console.log(removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))

//
function Products(arr){
  let ans = [];
  for (let i = 0; i <= arr.length-1; i++){
    let num = 1;
    for (let j = 0; j < arr.length; j++){
      if (arr[i] != arr[j]){
        num *= arr[j]
      }
    }
    ans.push(num)
  }
  return ans
}

console.log(Products([1, 3, 9, 4]))

//

function dimentionalArr(arrays){
  let indxs = []
  arrays = arrays.map(array => {
    let hasZero = false;

    for (let i = 0; i <= array.length; i++) {
      if (array[i] === 0) {
        indxs.push(i)
        hasZero = true
      }
    }

    if (hasZero) return Array(array.length).fill(0)
    return array
  })
  indxs.forEach(i => {
    arrays = changeCol(arrays, i)
  })
return arrays
}

function changeCol(arrays, indx){
  return arrays.map(array => {
    array[indx] = 0;
    return array;
  })
}

console.log(dimentionalArr([[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,1]]))
