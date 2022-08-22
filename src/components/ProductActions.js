import { useProductDetail } from "../states/product/hooks"

export function ProductActions (){
    const productDetail = useProductDetail()

    return <form>

        <button type='submit'>Add To Cart</button>
    </form>
}