const middle = function(arr) {
  let arrayLength = arr.length;
  //console.log(arrayLength);
  let middleIndex = Math.ceil(arrayLength / 2);
  //console.log(middleIndex);
  let arrMiddle = [];
  if (arrayLength <= 2) {
    return [];
  } else if (arrayLength % 2 !== 0) {
    arrMiddle.push(arr[middleIndex - 1]);
    return arrMiddle;
  } else {
    arrMiddle.push(arr[middleIndex - 1]);
    arrMiddle.push(arr[middleIndex]);
    return arrMiddle;
  }
};

module.exports = middle