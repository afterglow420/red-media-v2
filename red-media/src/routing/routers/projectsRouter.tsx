import { RouteObject } from "react-router-dom";
import RootLayout from "../../layouts/RootLayout";
import Projects from "@pages/Projects";

export const projectsRouter: RouteObject[] = [
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/projects',
                element: <Projects />
            }
        ]
    }
];