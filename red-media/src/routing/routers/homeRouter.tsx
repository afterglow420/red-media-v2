import { RouteObject } from "react-router-dom";
import RootLayout from "../../layouts/RootLayout";
import Home from "@pages/Home";

export const homeRouter: RouteObject[] = [
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
];