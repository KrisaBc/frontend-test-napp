import { ProductDetails } from "../views/productDetails/ProductDetails"
import { ProductList } from "../views/productList/ProductList"
import { useProductDetail } from "../states/product/hooks"

const ProductDetailsBreadcrumb = () => {
    const productDetail = useProductDetail()
    return productDetail ? <span>
        {`${productDetail.brand} ${productDetail.model}`}
    </span> : ''
}

const routes = [
    {
        path: "/",
        element: < ProductList />,
        breadcrumb: "Product List / "
    },
    {
        path: "/:id",
        element: < ProductDetails />,
        breadcrumb: ProductDetailsBreadcrumb
    }
]

export default routes



