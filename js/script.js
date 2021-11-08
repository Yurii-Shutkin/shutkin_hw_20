// indexOf
const arr = [2, 5, 9];

const indexOfEmul = function(array, item, from = 0) {

    for(let i = from; i < array.length; i++) {

        if(from < 0) {
            i = from + array.length;
        }

        if(item === array[i]) return i;
    }

    return -1;
}

console.log('indexOf');

console.log(indexOfEmul(arr, 2),
            indexOfEmul(arr, 7),
            indexOfEmul(arr, 9, 2),
            indexOfEmul(arr, 2, -1),
            indexOfEmul(arr, 2, -3));

console.log(arr.indexOf(2),
            arr.indexOf(7),
            arr.indexOf(9, 2),
            arr.indexOf(2, -1),
            arr.indexOf(2, -3));

console.log('');



// lastIndexOf
const arr2 = [2, 5, 9, 2];

const lastIndexOfEmul = function(array, item, from = array.length - 1) {

    if(from < 0) {
        
        for(i = array.length + from; i >= 0; i--) {

            if(item === array[i]) return i;
        }
    }
    
    for(let i = from; i >= 0; i--) {

        if(item === array[i]) return i;
    }

    return -1;
}

console.log('lastIndexOf');

console.log(lastIndexOfEmul(arr2, 2),    
            lastIndexOfEmul(arr2, 7),  
            lastIndexOfEmul(arr2, 2, 3),  
            lastIndexOfEmul(arr2, 2, 2),  
            lastIndexOfEmul(arr2, 2, -1),
            lastIndexOfEmul(arr2, 2, -2)); 

console.log(arr2.lastIndexOf(2),    
            arr2.lastIndexOf(7),  
            arr2.lastIndexOf(2, 3),  
            arr2.lastIndexOf(2, 2),  
            arr2.lastIndexOf(2, -1),
            arr2.lastIndexOf(2, -2)); 

console.log('');


// find
const arr3 = [1, 2, 3, 4, 5, 'Yurii'];

const findEmul = function(array, callback) {

    for(i = 0; i < array.length; i++) {
        
        if(callback(array[i], i, array)) return array[i];
    }

    return undefined;
}

const cb = item => item === 'Yurii';

console.log('find');
console.log(findEmul(arr3, cb));
console.log('');



// // findIndex
const findIndexEmul = function(array, callback) {

    for(i = 0; i < array.length; i++) {

        if(callback(array[i], i, array)) return i;
    }

    return -1
}

const cb2 = item => item === 'blabla';

console.log('findIndex');
console.log(findIndexEmul(arr3, cb2));
console.log('');



// includes
const includesEmul = function (array, searchElem, startIndex = 0) {
    
    if(startIndex < 0) {
        startIndex = startIndex + array.length;
    }

    for(i = startIndex; i < array.length; i ++) {

        if(array[i] === searchElem) return true;
    }

    return false;
}

console.log('includes');
console.log(includesEmul(arr3, 3, -2));
console.log('');



// every
const arr4 = [12, 54, 18, 130, 44];

const everyEmul = function(array, callback) {

    if (array.length === 0) return true;


    for(i = 0; i < array.length; i++) {
        
        if(!callback(array[i], i, array)) return false;
    }

    return true;
}

const isBigEnoung = item => item >= 10;

console.log('every');
console.log(everyEmul(arr4, isBigEnoung));
console.log('');



// some
const arr5 = [13, 5, 8, 1, 4];

const someEmul = function(array, callback) {

    if (array === []) return false;

    for(i = 0; i < array.length; i++) {
        
        if(callback(array[i], i, array)) return true;
    }

    return false;
}

const isBiggerThat10 = item => item > 10;

console.log('some');
console.log(someEmul(arr5, isBiggerThat10));



// Хотел упростить ф-цию indexOf до такого вида: 

// const indexOf = function(array, elem, fromIndex = 0) {
//     for(let i = fromIndex; i <= array.length - 1; i++) {
//         return elem === array[i] ? i : -1;
//     }
// }

// Я честно говоря не очень понимаю почему такой вариант не работает