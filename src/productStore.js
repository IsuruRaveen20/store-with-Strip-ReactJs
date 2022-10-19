
const productsArray = [
    {
        id:"price_1LugV9LOeUUTBHq2kBFaNNJd",
        title: "Coffee",
        price: "4.99"
    },

    {
        id:"price_1LugWtLOeUUTBHq2wEwCJuKi",
        title:"Sunglasses",
        price:"9.99"
    },

    {
        id:"price_1LugXOLOeUUTBHq2UKxolzVH",
        title:"Camera",
        price:"39.99"
    }  
]
function getProductData(id){
    let productData = productsArray.find(product => product.id === id) 


    if(productData == undefined){
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }
    return productData;
}
export { productsArray, getProductData };