const Clients = () => {
    return (
        <div className="flex flex-col bg-white w-full h-full">
            <div className="flex flex-row gap-2 h-[10%] w-full justify-between items-center">
                <div className="bg-black h-12 w-1/5 lg:w-[30%]" />
                <div className="flex flex-row items-center justify-center gap-1 lg:gap-2 text-end">
                    <img src="/images/logos/gray-brackets-r.png" alt="Gray brackets logo" className="w-8 h-8 md:h-12 md:w-12 lg:w-16 lg:h-16" />
                    <p className="text-transparent text-stroke-3 text-stroke-customRed tracking-extra-wide font-bold text-[32px] md:text-[40px] lg:text-[56px]">CLIENTS</p>
                </div>
                <div className="bg-white border-l-2 border-t-2 border-b-2 border-customRed h-12 w-1/5 lg:w-[30%]" />
            </div>
        </div>
    );
};

export default Clients;