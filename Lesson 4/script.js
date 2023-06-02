// 1. զանգվածը prompt-ով լցնել 5 հատ տարբեր թվերով
//  2. տպել զանգվածի բոլոր անդամները

// var Array = [ ];

// var num1 = prompt("Type a number");
// var num2 = prompt("Type a number");
// var num3 = prompt("Type a number");
// var num4 = prompt("Type a number");
// var num5 = prompt("Type a number");

// Array.unshift( num1, num2, num3, num4, num5)
// console.log(Array);




// //  3. տպել զանգվածի անդամների գումարը

// var arr = [ 2, 6, 8, 5];
// var arrSum = 0;

// for (var i = 0; i < arr.length; i++) {
//     arrSum += arr[i];
// }
// console.log(arrSum);

// //  4. տպել զանգվածի զույգ ինդեքսով անդամների գումարը
 
// var arrSum1 = 0

// for (var z = 0; z < arr.length; z++) {
//     if( z % 2 === 0){
//         arrSum1 += arr[z];
//     }
// }
// console.log(arrSum1);




// // 2. 1. ներմուծել 2 թիվ 
// //    2. ավելացնել այդ թվերը զանգվածի վերջում 
// //    3. արտածել բոլոր անդամները 
// //    4. արտածել գումարը


// var y = prompt("Type a number");
// var x = prompt("Type a number");
// var Arr = [ 2, 31, 20];

// Arr.push( y, x );
// console.log(Arr);

// var ArrSum = 0;
// for (var i = 0; i < Arr.length; i++) {
//     ArrSum += Arr[i];
// }

// console.log(ArrSum);


// // 3. 1. ներմուծել ևս 1 թիվ 
// //    2․ ավելացնել այդ թիվը զանգվածի սկզբում 
// //    3. տպել զանգվածը

// var z = prompt("Type a number");
// Arr.unshift( z )

// console.log(Arr);



// //4. 1.Սահմանել զանգված 
// //   2.Փրոմփթով լցնել զանգվածը 
// //   3.Դասվորել զանգվածը աճման կարգով 
// //   4.Արտածել բոլոր անդամները


// var Array = [ ];

// var x = prompt("Type a number");
// var y = prompt("Type a number");
// var z = prompt("Type a number");

// Array.unshift( x, y, z );
// console.log(Array);

// var i = 0;
// for(var m = 0; m < Array.length; m++) {
//     for( var n = m; n < Array.length; n++) {
//         if( Array[m] > Array[n]) {
//             i = Array[n];
//             Array[n] = Array[m];
//             Array[m] = i;
//         }
//     }
// }

// console.log(Array);




// // Գրել ֆունկցիա, որը կվերադարձնի տրված թիվը հակառակ կարգով։

// alert( +prompt("Enter a value").split("").reverse().join("") )




