// console.log("running")



//  Q1 odd and even number
// let arr = [22,44,11,55,66,10,3,5,7,41]

// for(let i =0; i < arr.length;i++){

//     if(arr[i] % 2 == 0){
//         console.log(arr[i],"even numbers")
//     }

//     if(arr[i] % 2 !== 0){
//         console.log(arr[i], "odd numbers")
//     }
// }





// //Q2 password

// let password = prompt("write a paasword")

// let alphebet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// let numbers = "1234567890"

// let minring = false
// let letter = false
// let num = false

// // let fristletter = false
// if( password.length >= 6 ){
//     minring = true
// }

// for(let i = 0; i < password.length;i++){

//      console.log(alphebet.indexOf(password[i]) !== -1 )
//     if(alphebet.indexOf(password[i]) !== -1){
//         letter = true
//         // console.log(alphebet)
//     }

//     if(numbers.indexOf(password[i] !== -1)){
//         num = true
//     }
    
    
// }

// if(minring && letter && num){
//     alert("password is valid")
// }else{
//     alert("code is invalid")
// }



// Q3 finding the same number

// let arr1 = [11,22,33,44,55,66,77,99,87,98,90]
// let arr2 = [12,22,33,54,75,66,17,93,88,18,90]
// let arr3 = []
// for(let i=0;i < arr1.length;i++){

//     for(let j=0 ; j < arr2.length; j++){

//         if(arr1[i] == arr2[j]){
//          arr3.push(arr2[j])   
//          console.log(arr3)
//         }
//     }

// }




// Q4 Prime numbers

// let user6 = Number(prompt("write any number"))
// let primeNumbers = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]
// let falge = false
// for(let i =0; i < primeNumbers.length;i++){

//     if(user6 == primeNumbers[i]){
//         falge = true
//         alert(`${user6} is a prime number`)
//     }
// }

// if(falge === false){
//     alert(`${user6} is not a prime number`)
// }




//Q5 nested arrays 

// let arr5 = [[1,2],[2,4],[5,6]]
// let emptyArray = arr5.join()
// let result = emptyArray.split()

// console.log(result)