import { RouteObject } from "react-router-dom";
import RootLayout from "../../layouts/RootLayout";
import Contact from "@pages/Contact";

export const contactRouter: RouteObject[] = [
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    }
];