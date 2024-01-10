//declare variabel.
//var, let, const

// var gelas = "Wadah untuk mengisi air"
// let laptop = "Wadah untuk koding"
// const spidol = "Wadah untuk menulis"

// gelas = "Sekarang sudah di isi kopi"
// laptop = "Sekarang sudah belajar nodejs"
// spidol = "Sekarang sudah untuk makan"

// const materi = "javascript"
// if (materi === "javascript") {
    // var gelas = "HABIS KOPI NYA"
   // console.log("LIAT DATA : ",laptop)
    // laptop = "PENUH KODINGAN NYA"
   // console.log("LIAT DATA 1 : ",laptop1)
// }

// const printValue = `${gelas} \n ${laptop} \n ${spidol}`
// console.log(printValue)

//var prefixCode = "LKR"
//var seperator = "-"
//var randomAngka = "238218381238"

/*
const printValue = `${gelas} \n ${laptop} \n ${spidol}`
const logkarNo = `${prefixCode}${seperator}${randomAngka}`
console.log(logkarNo)
*/

//Data type 
//String
// var TipeDataString = "823828382382323"
//Integer
// var TipeDataInteger = 823828382382323
//+ - / * ^ %
//Boolean
// var TipeDataBoolean = false
//Float
// var TipeDataFloat = 1.5

//Object
// var name = "Jefry"
// var occupation = "BE"
// var age = 20
// var gender = "Male"
// var statusKehidupan = true
// var acc = "baju"

// var dataObjectIdentitas = []

// var identitasManusia = {
//     name : "Jefry",
//     occupation : "BE",
//     age : 20,
//     gender : "Male",
//     statusKehidupan : true,
//     acc : "Baju",
//     corporate:{
//         nameCoporate:"PT LOGKAR",
//     }
// } 
// dataObjectIdentitas.push(identitasManusia)
// identitasManusia = {}
//cara 1
// identitasManusia.name = "Zaky"
// identitasManusia.occupation = "QA"
// identitasManusia.age = 22
// identitasManusia.gender = "Male"
// identitasManusia.statusKehidupan = true
// identitasManusia.acc = "Jam"
// identitasManusia.corporate = {}
// identitasManusia.corporate.nameCoporate = "PT GAMA"
// dataObjectIdentitas.push(identitasManusia)

// console.log(dataObjectIdentitas[0],"\n")
// console.log("LENGTH : ",dataObjectIdentitas.length)
// console.log(dataObjectIdentitas[1])
//cara 2
// identitasManusia = {
//     name : "Zaky",
//     occupation : "QA",
//     age : 22,
//     gender : "Male",
//     statusKehidupan : true,
//     acc : "Baju",
//     corporate:{
//         nameCoporate:"PT LOGKAR",
//     }
// } 


// console.log(dataObjectIdentitas)

// console.log(identitasManusia.name)

// identitasManusia.namee = "Tessa"
// console.log(identitasManusia.namee)

//Array
// var dataTemporary = []
// dataTemporary.push("Jefry",identitasManusia,100,[10,20])
// console.log(dataTemporary)

//Putri AVGIF
//LIBRI COUNTIFS

// var ListTipeElement = ["Fighting","Grass","Water",
// "Electric","Water","Water","Rock","Dragon"]


// const resultCountIF = COUNTIF(ListTipeElement,"Water","Bisa di minum")
// console.log(resultCountIF)

// function COUNTIF(range,criteria, params2) {
//     var jumlahSama = 0
//     //kondisi terselubung water ini bersih
//     const waterBehaviour = "Bisa di minum"
//     //cara 1 looping
//     for (let i = 0; i < range.length; i++) {
//         if (criteria === range[i] && params2 === waterBehaviour) {
//             console.log("HELLO ADA YANG SAMA NICH : ",range[i])
//             jumlahSama = jumlahSama + 1
//             continue
//         }

//         if (criteria === range[i] || params2 === waterBehaviour) {
//             console.log("HELLO ADA YANG SAMA NICH : ",range[i])
//             jumlahSama = jumlahSama + 1
//             continue
//         }
//         console.log("ELSE PRINT ",range[i])
//     }

//     return jumlahSama 
// }


// let peserta2 = new Promise(resolve,reject => 
//   {
//     // console.log("MASOK 2")
//     // setTimeout(resolve, 40, 'Peserta 2.')
//     setTimeout(reject, 40, 'Peserta 2.')
//   })

//   peserta2.then(res => console.log(res))


// console.log('Hello');
// setTimeout(() => { console.log('Javascript')},100,"Peserta 2") // tunda selama 100 miliseconds
// console.log('Coder');

 //example
//  function calculate(param1,param2,callback){
//   //default operation
//   var result = 0
  
//   // callback is function ?
//   if (typeof callback == 'function'){
//    result = callback(param1,param2)
//   }
//   return result
//  }

// console.log(a)

//
var temporaryArr = ["Dinda", "Andy", "Yusuf", "Yosef"]
//cara 1
for(let i = 0; i < temporaryArr.length; i++){

}

//cara 2
temporaryArr.forEach((value, index, newArr)=>{
    console.log("DATA ARRAY : ",value)
    console.log("INDEX ARRAY : ",index)
    console.log("NEW ARRAY : ",newArr)
    if (value === "Dinda") {
        newArr[index] = "Dandia"
    }
})

console.log("FINAL DATA : ",temporaryArr)
