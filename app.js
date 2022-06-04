const book1 = {
    name: "Book11",
    writer: "writer2",
    price: 0,
    rating: 4.5
}
const book2 = {
    name: "Book22",
    writer: "writer2",
    price: 00,
    rating: 4.5
}
const book3 = {
    name: "Book22",
    writer: "writer2",
    price: 1275,
    rating: 4.5
}

const cart = [book1 , book2 , book3]
let bookPrice = 0;
const shipping = 50;

cart.forEach(function(product){
        bookPrice += product.price
    })

let discounts = bookPrice*0.05
let discount = Math.ceil(discounts);
let discountedPrice = bookPrice - discount

if(bookPrice>=500){

    if(bookPrice>2400){
        discount = 120
        discountedPrice = bookPrice - discount
    }

}else{
    discount = 0
    discountedPrice = bookPrice
}

console.log(`Shopping Amount        - ${bookPrice} Taka,`)
console.log(`Cashback               - ${discount} Taka,`)
console.log(`Total Payable Amount   - ${discountedPrice} Taka,`)
console.log(`Home Delevery          - ${discountedPrice+shipping} Taka.`)
