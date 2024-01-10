import Phone, { PhoneSpecification } from '../day2/Phone.js'
import {getInfoPhone, createdPhone} from '../day2/PhoneNotClass.js'
import {functionBiasa,functionCallback} from '../day2/Callback.js'
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

// identitasManusia.name = "Zaky"
// identitasManusia.occupation = "QA"


function main(){
    // var phoneData = new Phone({
    //     tipe : "15 Promek",
    //     harga : 12000,
    //     colour : "Red",
    //     brand : "Iphone",
    // })
    // phoneData.createPhone("Jack Ma")

    // var dataPhoneNotUsingClass = getInfoPhone({
    //     tipe : "15 Promek",
    //     harga : 12000,
    //     colour : "Red",
    //     brand : "Iphone",
    // })

    // console.log(dataPhoneNotUsingClass)


    // createdPhone({
    //     tipe : "15 Promek",
    //     createdBy:"Jack Ma",
    //     brand : "Iphone",
    // })
    // var phoneSpecification = new PhoneSpecification(
    //     {
    //             tipe : "15 Promek",
    //             harga : 12000,
    //             colour : "Red",
    //             brand : "Iphone",
    //             ram : 12,
    //             memori : 128,
    //             baterai : 6600,
    //             os : "Nubia OS"
    //     }
    // )
    // console.log(phoneSpecification.getInfoSpec())
    
    //ES 5
    // var tempFuncA = function(a,b) {
    //     return a + b
    // }
    // console.log("FUNC A : ",tempFuncA(1,2))

    //ES 6 
    // var tempFuncB = (a,b)=>{
    //     return a * b
    // }
    // console.log("FUNC B : ",tempFuncB(1,2))

    const result = functionBiasa(10,2)
    console.log("DATA Func Biasa : ",result)

    var resultFuncCallback = functionCallback(10,2,"asdasd")
    console.log("DATA CALLBACK : ",resultFuncCallback)

    resultFuncCallback = functionCallback(10,2, asd)
    console.log("DATA CALLBACK 2: ",resultFuncCallback)
    // DATA CALLBACK 2:  20
}   

function asd(x,y) {
    return x * y
}

main()