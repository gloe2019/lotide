const flatten = function(items) {
  let flatArr = [];
  for (item of items) {
    if (Array.isArray(item) === true) {
      for (let i = 0; i < item.length; i++) {
        flatArr.push(item[i]);
      }
    } else {
      flatArr.push(item);
    }
  }
  return flatArr;
};


module.exports = flatten