const assertArraysEqual = require('../assertArraysEqual')

//assertArraysEqual([101, 23, 35, 49], [101, 23, 35, 49]); //shoud pass
//assertArraysEqual(["alpha", "tango", "foxtrot"], ["alpha", "echo", "foxtrot"]); //should fail
//assertArraysEqual(["alpha", "tango", "foxtrot"], ["alpha", "tango", "foxtrot"]); //should pass
//assertArraysEqual([1, 2, 3], [1, 2, "3"]); //should fail
