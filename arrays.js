
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];



function addElementToBeginningOfArray(array, element){
  return [element, ...array];
}
function destructivelyAddElementToBeginningOfArray(array, item){
  array.unshift(item);
  return array;
}
function addElementToEndOfArray(array, item){
<<<<<<< HEAD
  return [...array, item];
}
function destructivelyAddElementToEndOfArray(array, item){
  array.push(item);
  return array;
}
function accessElementInArray(array, index){
  return array[index]; 
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}
function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}
function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1);
}
=======
  var newArray = array;
  newArray.push(item);
  return newArray;
}
function 
>>>>>>> f4ea4f605774470bfd8f377847696a4c44f08cad
