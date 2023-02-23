// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

//Parameters: Is it always going to be integers? Are we going to be given special characters? Or an empty arr ever?
//R: Return a new arr with each value doubled
//E: If given [2,3,4], should return [4,6,8]
//  If given [5,6,7], should return [10,12,14]
//  If given [10,20,30], should return [20,40,60]
//P:
//  Make a function that takes in an array 
function doubleArray (arr){
    if(arr.length === 0 || arr === undefined){
        console.log('Array is invalid')
    }else{
        return arr.map(element=> element*2)
    }

}

//  map through the array and multiply each element by 2.
//  return the array 
doubleArray([1,2,3])
console.log(doubleArray([1,2,3]),[4,6,8])
console.log(doubleArray([]))