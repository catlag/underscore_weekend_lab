var myFunctions = {

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  first: function(array, n) {
        if (n === undefined) {
          return array[0];
        } 
        else if (n > array.length){
          return array;
        }
        else {
          return array.splice(0,n);
        }


  },

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  last: function(array, n) {
          if (n === undefined) {
          return array[array.length-1];
        } else if (n === 0 ){
          return ;
        } else if (n > array.length){
          return array;
        } else {
          return array.splice(array.length-n, n);
        }


  },

  // Produce a duplicate-free version of the array.
  uniq: function(array) {
    var arr2 = [];
    for (var i = 0; i < array.length; i++) {
      if (arr2.indexOf(array[i]) === -1){
        arr2.push(array[i]);
      }
    }
    return arr2;
  },

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people objects
  // (which have a name and an age) and return an array of just their ages
  pluck: function(array, key) {
      arr2 = [];
      for (var i = 0; i < array.length; i++) {
        arr2.push(array[i][key]);
      }
      return arr2;

  },

 // Determine if the array contains a given value (using `===`).
 // TIP: There are multiple solutions to this problem, ranging from one line to using reduce();
  contains: function(array, target) {
  if (array.indexOf(target) !== -1){
    return true;
    }
    else {
      return false;
    }
  },

  // Turns a multidimensional array into a single array
  // flatten([1,2,[3,4,[5,6]]]) returns [1,2,3,4,5,6]
  // Hint: Use Array.isArray to check if something is an array
  // Also, you will need to use recursion
  // when you find an array inside of an array
  flatten: function(array) {
    // Array.isArray(arr[i]) 
//    arr[i] constructor.name === Array
  arr2 = [];

  for( i = 0 ; i < array.length; array ++) {
    if (array[i].constructor.name === Array){
      array = array.concat(myFunctions.flatten(array[i]));
      console.log(array);
    } else {
      arr2.push(array[i]);
    }
  }
  }
};

module.exports = myFunctions;



// creat new array
//  if is array 
//   array[i].constructor.name === "Arrya" {
//     flat Arr = flarArr.conccat(myFunctions.flatten(arr[i]))
//   } else push into new array

// object.name of method
