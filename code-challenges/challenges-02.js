"use strict";
// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the reversed array.
//  Without using built-in methods.
//  Input: ['C#', 'JS', 'Ruby','Python']
//  Output: ['Python','Ruby','JS','C#']

const reverseArray = (arr) => {
  let j=0;
  let array=[];
  for (let i = (arr.length-1); i>=0; i--) 
  
  {  
   array[j]=arr[i];
    j++;
}
  // write your c
  return array;
};

// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------

//  Challenge 2:
// Required:

//  Write a function that takes an array of numbers and increases its values by 10
//
//  Input: [20, 54, 89, 41]
//  Output: [30, 64, 99, 51]

const arrInc = (arr) => {
  const result = [];
  // write your code here
  for (let i = 0; i < arr.length; i++) {
    result[i]=arr[i]+10;
    
  }
  return result;
};

// -------------------------------------------------------------------------------------------------------

module.exports = { reverseArray, arrInc };
