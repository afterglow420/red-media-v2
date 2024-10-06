import { RouteObject } from "react-router-dom";
import RootLayout from "../../layouts/RootLayout";
import WhateWeDoPage from "@pages/WhateWeDoPage";

export const whatWeDoRouter: RouteObject[] = [
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/what-we-do",
                element: <WhateWeDoPage />,
            },
        ],
    },
];