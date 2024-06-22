import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/root";
import Home from "../App";
import NotFound from "../pages/404";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />
            },
        ]
    }
])