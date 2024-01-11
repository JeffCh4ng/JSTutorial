import {Berangkat, BerangkatKemanaAja} from '../day3/CallbackNew.js'
import {JualBeliMotor, fetchUrl} from '../day3/AsyncAwait.js'

async function main(){
    // var resultBerangkat = Berangkat("rain", false)
    // console.log("Hasil : ",resultBerangkat)

    //Callback -> Function
    // try {
    //     //callback hell
    //     var bensinLiter = 5
    //     BerangkatKemanaAja("Jakarta", bensinLiter, function(bensinLiter){
    //         BerangkatKemanaAja("Tangerang",bensinLiter,function(bensinLiter){
    //             BerangkatKemanaAja("Bekasi",bensinLiter,function(bensinLiter){
    //                 BerangkatKemanaAja("Bandung",bensinLiter,function(bensinLiter){
    //                     BerangkatKemanaAja("Bogor",bensinLiter,function(bensinLiter){
    //                         BerangkatKemanaAja("Sukabumi",bensinLiter,function(){
    //                             console.log("Sudah sampai tujuan...")
    //                         })
    //                     })
    //                 })
    //             })
    //         })
    //     })
    // } catch (error) {
    //     console.log("ERR : ",error)
    // }

    //Promises -> object yang menhasilkan value
    // const dataPromises = new Promise((resolve,reject) => {
    //     var hargaJualMotor = 2000
    //     if (hargaJualMotor > 1000){
    //         reject("Gajadi beli motor jep chang")
    //     }
    //     resolve("Jadi beli motor jep chang")
    // })
    // console.log("HASIL SEBUAH JANJI : ",dataPromises)

    // dataPromises.then(result => {
    //     console.log("RESULT : ",result)
    // }).catch(error => {
    //     console.log("ERROR : ",error)
    // })

    // console.log("JALAN PERTAMA")
   
    // console.log("KELUAR ")

    //cara 1
    // JualBeliMotor().then((res)=>{
    //     console.log("DATA : ",res)
    // })   

    // var resultJanjiUsingAsync = await JualBeliMotor()
    // console.log("DATA 2 : ",resultJanjiUsingAsync)
    
    const url1 = 'https://jsonplaceholder.typicode.com/posts/1'
    const url2 = 'https://jsonplaceholder.typicode.com/users/'

    //muncul di ES 5
    fetch(url1)
    .then(response => response.json()
        .then(result => {
            console.log("Response Post Promise : ", result)
            fetch(url2+result.userId)
            .then(responseAuthor => responseAuthor.json()
                .then(result => console.log("Response Auhtor Promise : ", result)))
        })
        .catch(error => {
            console.log(console.log("ERR DALAM : ",error))
        })
    ).catch(error => {
        console.log(console.log("ERR LUAR : ",error))
    })

    //muncul di ES 6
    try {
        const postUrl = await fetchUrl(url1)
        var postResponse = await postUrl.json()
        console.log("ASYNC await post response : ", postResponse)
        const authorUrl = await fetchUrl(url2+postResponse.userId)
        const authorResponse = await authorUrl.json()
        console.log("ASYNC await author response : ", authorResponse)
    } catch (error) {
        console.log("ERROR : ", error)
    }


}

main();