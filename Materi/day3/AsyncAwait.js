export async function JualBeliMotor() {
    console.log("MASOK KE FUNC ASYNC !")
    return janjiA()
}

async function janjiA(){
    var hargaMotor = 1000
    if (hargaMotor > 1000){
        throw "Gajadi beli"
    }
    return "Jadi Beli motor"
}

export async function fetchUrl (url){
    try {
        var responseUrl = await fetch(url)
        if (responseUrl.status != 200){
            const customeErrmsg = `Invalid URL ${responseUrl.status}`
            throw customeErrmsg
        }
        return responseUrl
    } catch (error) {
        throw error   
    }
}


export default {
    JualBeliMotor,
    fetchUrl
}