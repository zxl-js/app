import Home from "../pages/Home"
import ProductList from "../pages/ProductList"
import Maniac from "../pages/Maniac"
import ShoppingList from "../pages/ShoppingList"
import Personal from "../pages/Personal"
export default [{
        path: "/",
        component: Home
    },
    {
        path: "/productlist",
        component: ProductList
    },
    {
        path: "/maniac",
        component: Maniac
    },
    {
        path: "/shoppinglist",
        component: ShoppingList
    },
    {
        path: "/personal",
        component: Personal
    },
    {
        path: "/",
        // 路由重定向
        redirect: "/home"
    }
]