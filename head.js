const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

/* Assert Equal Test Cases
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);
assertEqual(1, 4);
assertEqual('Sweet', 'Bitter');
assertEqual('Sweet', 'Sweet');
*/
const head = function(arr) {
	return arr[0]
}
assertEqual(head([1,2,3]), 1);
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Lighthouse');
assertEqual(head([101]), 101);
assertEqual(head([]), undefined);
