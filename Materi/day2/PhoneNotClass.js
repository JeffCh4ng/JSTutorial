export function getInfoPhone({brand,tipe,harga,colour}){
    const showInfoPhone = `${brand}, ${tipe}, ${harga}, ${colour}`
    return showInfoPhone
}

export function createdPhone({brand,tipe,createdBy}){
    console.log(`Success Insert Phone ${brand} ${tipe} by user : ${createdBy}`)
}

export default {
    getInfoPhone,
    createdPhone
}