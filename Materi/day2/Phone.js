export default class Phone {
    // constructor(data){
    //     this.brand = data.brand
    //     this.tipe = data.tipe
    //     this.harga = data.harga
    //     this.colour = data.colour
    // }

    // constructor(brand,tipe,harga,colour){
    //     this.brand = brand
    //     this.tipe = tipe
    //     this.harga = harga
    //     this.colour = colour
    // }

    constructor({brand,tipe,harga,colour}){
        this.brand = brand
        this.tipe = tipe
        this.harga = harga
        this.colour = colour
    }

    getInfoPhone() {
        const showInfoPhone = `${this.brand}, ${this.tipe}, ${this.harga}, ${this.colour}`
        return showInfoPhone
    }

    createPhone(createdBy) {
        console.log(`Success Insert Phone ${this.brand} ${this.tipe} by user : ${createdBy}`)
    }

}

export class PhoneSpecification extends Phone {
    constructor({brand,tipe,harga,colour,ram,memori, baterai, os}) {
        super({brand,tipe,harga,colour})
        this.ram = ram 
        this.memori = memori
        this.baterai = baterai
        this.os = os
    }

    getInfoSpec(){
        const response = {
            infoPhone : this.getInfoPhone(),
            specPhone : `${this.ram}, ${this.memori}, ${this.baterai}, ${this.os}`
        }
        return response
    }
}