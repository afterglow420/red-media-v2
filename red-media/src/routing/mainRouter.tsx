import { createBrowserRouter } from "react-router-dom";
import { homeRouter, whoWeAreRouter, whatWeDoRouter, careersRouter, contactRouter } from "./routers";
import { projectsRouter } from "./routers/projectsRouter";

export const router = createBrowserRouter([
        ...homeRouter,
        ...whoWeAreRouter,
        ...whatWeDoRouter,
        ...projectsRouter,
        ...contactRouter,
        ...careersRouter
]);