function runSiput(index){
    return new Promise(resolve =>setTimeout(() => {
     return resolve( console.log("Siput "+index))
    }, 1000))
 }
  
 function runKelinci(index){
     console.log("kelinci "+index)
 }
  
 async function main(){
     for (let a = 1 ; a< 11 ;a ++){
        if (a%2 === 0){
            await runSiput(a)
            continue
        }
        
        runKelinci(a)
     }
 }
  
 main()