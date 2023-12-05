export default function ReviewDetail({ params, }: { params :  {productId : number; reviewId : number;};}){
    return <h1> Review {params.reviewId} for product {params.productId}</h1>;
}