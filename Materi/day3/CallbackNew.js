// Berangkat kantor -> sampai kantor
// Hujan tiba2 -> gua pake jas ujan -> lanjut jalan kantor
// Hujan tiba2 -> gua basah kuyup -> pulang rumah

export function Berangkat(cuaca, bawaJasHujan) {
    var finalAction = "Sampai Kantor"

    if (cuaca  === "rain") {
      finalAction = ActionGoesToOffice(bawaJasHujan)
    }

    return finalAction
}

export function ActionGoesToOffice(isHasRainCoat) {
    if (isHasRainCoat){
        return "Lanjut jalan ke kantor"
    }
    return "Pulang Rumah"
}

//lokasi ?
//bensin = 5L
// lokasi = Jakarta -> Bekasi -> Tangerang
// condition = selama bensin ada, dia bakal tiba di tujuan tersebut
// jika habis, maka akan return error "Bensin habis woii, isi dulu !"
export function BerangkatKemanaAja(lokasiTujuan, bensinBerapaLiter, callback) {
    if (bensinBerapaLiter === 0){
        throw "Bensin habis woii, isi dulu !"
    }
    console.log(`Berangkat menuju : ${lokasiTujuan} ...`)
    bensinBerapaLiter = bensinBerapaLiter - 1;
    if (typeof callback === 'function'){
        callback(bensinBerapaLiter);
    }
}


export default {
    Berangkat,
    ActionGoesToOffice,
    BerangkatKemanaAja
}