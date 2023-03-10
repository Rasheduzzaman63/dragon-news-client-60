import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Categories from "../pages/Categories/Categories/Categories";
import Home from "../pages/Home/Home/Home";
import News from "../pages/News/News/News";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/category/:id',
                element:<Categories></Categories>
            },
            {
                path:'/news/:id',
                element:<News></News>
            }
        ]
    }
])