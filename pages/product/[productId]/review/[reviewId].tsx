import { useRouter } from "next/router"
const ReviewId=()=>{
    const router=useRouter();
    // console.log(router)
const{productId,reviewId}=router.query
    return<>
    <h1>Hello ReviewId Page..... {reviewId} of product id {productId}</h1>
    </>
}

export default ReviewId