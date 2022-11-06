import { useRouter } from "next/router"
const ProductId=()=>{
    const router=useRouter();
    // console.log(router)
const id =router.query.productId
    return<>
    <h1>Hello ProductId Page..... {id}</h1>
    </>
}

export default ProductId