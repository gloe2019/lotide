const assertEqual = require('../assertEqual')
const head = require('../head')
assertEqual(head([1,2,3]), 1);
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Lighthouse');
assertEqual(head([101]), 101);
assertEqual(head([]), undefined);