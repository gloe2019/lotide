# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @gloedem/lotide`

**Require it:**

`const _ = require('@gloedem/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual` : function checks if two given arrays are equal and logs a failure/success messages to the console
* `assertEqual` : function checks if two given values are equal, and logs a failure/success message to the console.
* `assertObjectsEqual`: function to check that two given objects are equal
* `countLetters`: function counts the letters in a given sentence and returns the letter counts as an object.
* `countOnly`: function that takes in an object collection and returns counts for a specified subset of the object.
* `eqArrays`: function takes in two arrays and returns true if they are a perfects match, or false otherwise.
* `eqObjects`: function takes in two objects and returns true if they are a perfect match, or false otherwise.
* `findKey`: function takes in an object and a callback, and returns the first key for which the callback is true.
* `findKeyByValue`: function takes in an object scans it for the first occurence of a provided value, and returns the first key with the value.
* `flatten`: function flattens a multi-level array* into a single-level array. *This handles just one level of nesting*.
* `head`: function retrieves the first element from an array
* `letterPositions`: function returns all the indices in a provided string where each character is found.
* `map`: function takes in two arguments - an array, and a callback function and returns a new array based on the results of the callback.
* `middle`: function returns the 
* `tail`: function returns every element except the first element of an array.
* `takeUntil`: function returns a slice of a provided array with elements taken from the beginning until the condition provided by the callback.
* `without`: function takes in a source array and an itemstoRemove array and returns a new array with unwanted items removed.