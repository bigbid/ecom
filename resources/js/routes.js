import Index from "./Index"
import Home from "./pages/home"
import Product from "./pages/product"

let routes = [];

export default  routes = [
    {
        path: "/product/:id/:name",
        component: Product,
        exact: true
    },
    {
        IndexRoute: "/",
        exact: true,
        component: Home
    }
];