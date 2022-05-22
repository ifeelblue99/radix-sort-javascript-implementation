let data = [55, 333, 888, 1, 0, 99]

// only works with positive numbers
function radixSort(arr) {
  let iterCount = getBiggestNumber(data)
  
  for (let indx = 0; indx < iterCount; indx++) {
    let bucket = Array.from({length: 10}, () => [])
    for (let j = 0; j < arr.length; j++) {
      digit = getDigit(arr[j], indx)
      bucket[digit].push(arr[j])
    }
    arr = bucket.flat()
  }
  return arr
}

function getDigit(num, indx) {
  const numAsString = String(num)
  const end = numAsString.length - 1;
  
  return parseInt(numAsString[end-indx]) || 0
}

function getBiggestNumber(arr) {
  let biggestNum = 0
  arr.forEach(el => biggestNum = Math.max(biggestNum, el))
  return biggestNum.toString().length
}

// driver code
console.log(radixSort(data))
