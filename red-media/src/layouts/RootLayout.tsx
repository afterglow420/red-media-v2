import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <div className="w-full h-full">
            <div className="flex-grow h-full w-full overflow-y-auto">
                <div className="flex flex-col w-full min-h-full">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default RootLayout;
