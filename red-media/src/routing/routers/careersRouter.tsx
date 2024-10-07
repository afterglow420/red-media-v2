import { RouteObject } from "react-router-dom";
import RootLayout from "../../layouts/RootLayout";
import Careers from "@pages/Careers";

export const careersRouter: RouteObject[] = [
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/careers',
                element: <Careers />
            }
        ]
    }
];