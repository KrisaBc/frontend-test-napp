import { ProductDetails } from "../views/productDetails/ProductDetails"
import { ProductList } from "../views/productList/ProductList"

const routes = [
    {
        path: "/",
        element: < ProductList />,
        breadcrumb: "Product List / "
    },
    {
        path: "/:id",
        element: < ProductDetails />,
        breadcrumb: "Product Detail"
    }
]

export default routes



