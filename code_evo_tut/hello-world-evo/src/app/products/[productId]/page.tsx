export default function ProductDetails({ params }:{params:{productId: number};}){
    return <h1>Details about Product {params.productId}!</h1>
}