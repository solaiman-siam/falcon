import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import ProductPage from "../pages/ProductDetailsPage";
import MyCartPage from "../pages/MyCartPage";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <ProductPage/>
            },
            {
                path : '/cart',
                element: <MyCartPage/>
            },

        ]
    }
])