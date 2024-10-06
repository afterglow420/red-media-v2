import { RouteObject } from "react-router-dom";
import RootLayout from "../../layouts/RootLayout";
import WhoWeArePage from "@pages/WhoWeArePage";

export const whoWeAreRouter: RouteObject[] = [
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/who-we-are",
                element: <WhoWeArePage />,
            },
        ],
    },
];