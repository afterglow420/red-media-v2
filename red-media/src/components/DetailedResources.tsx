const DetailedResources = () => {
    return (
        <div className="relative flex flex-col justify-center items-center h-full w-full pt-5 lg:pt-8">
            <div className="absolute z-10 top-0 left-1/2 transform -translate-x-1/2 bg-[#212121] h-10 flex items-center gap-2 lg:gap-5 justify-center px-5 translate-y-[5%] lg:translate-y-[25%] w-1/2 mt-1 lg:mt-2">
                <img src="/images/logos/white-bracket-red-logo.png" alt="White brackets logo" className="h-8 lg:h-12 w-auto" />
                <p className="text-stroke-1 md:text-stroke-2 text-stroke-customRed text-transparent font-bold text-[24px] md:text-[40px] lg:text-[44px] xl:text-[56px] text-shadow-md text-start lg:tracking-extra-wider">
                    RESOURCES
                </p>
            </div>
            <div
                className="relative border-4 border-t-white border-r-white border-l-white border-b-0 w-full h-full flex flex-col items-center justify-center bg-transparent p-5 gap-3 pt-7 lg:pt-10"
                style={{
                    backgroundImage: `url('/images/bg/who-we-are-page-warehouse.jpg')`,
                    backgroundSize: "cover",
                }}
            >
                {/* Top Gradient */}
                <div
                    className="absolute top-0 left-0 w-full h-[45%] pointer-events-none"
                    style={{
                        background: 'linear-gradient(to bottom, #212121, rgba(45, 45, 45, 0))',
                    }}
                />
                <div
                    className="absolute top-0 left-0 w-full h-[60%] pointer-events-none"
                    style={{
                        background: 'linear-gradient(to bottom, #212121, rgba(45, 45, 45, 0))',
                    }}
                />
                <div
                    className="absolute top-0 left-0 w-full h-[75%] pointer-events-none"
                    style={{
                        background: 'linear-gradient(to bottom, #212121, rgba(45, 45, 45, 0))',
                    }}
                />

                {/* Bottom Gradient */}
                <div
                    className="absolute bottom-0 left-0 w-full h-[45%] pointer-events-none"
                    style={{
                        background: 'linear-gradient(to top, #212121, rgba(45, 45, 45, 0))',
                    }}
                />
                <div
                    className="absolute bottom-0 left-0 w-full h-[60%] pointer-events-none"
                    style={{
                        background: 'linear-gradient(to top, #212121, rgba(45, 45, 45, 0))',
                    }}
                />
                <div
                    className="absolute bottom-0 left-0 w-full h-[75%] pointer-events-none"
                    style={{
                        background: 'linear-gradient(to top, #212121, rgba(45, 45, 45, 0))',
                    }}
                />
                <div className="relative w-full h-full flex flex-col justify-between items-center z-50 text-white py-20">
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-row gap-2 items-center justify-center">
                            <div className="flex flex-col items-center justify-center">
                                <img src="/images/brackets/solid-white-bracket.png" alt="Solid white bracket" className="h-16 lg:h-36 w-auto" />
                            </div>
                            <div className="flex flex-col gap-2 items-center leading-none">
                                <p className="text-customRed text-stroke-3 text-bold text-shadow-customRed-md lg:text-[40px] tracking-extra-wide">4200</p>
                                <p className="text-customRed text-bold text-shadow-customRed-md lg:text-[32px]">SQM</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img
                                    src="/images/brackets/solid-white-bracket.png"
                                    alt="Solid white bracket"
                                    className="h-16 lg:h-32 w-auto rotate-180"
                                />
                            </div>
                        </div>
                        <p className="text-white font-bold text-shadow-white text-[12px] lg:text-[24px]">OF OFFICES, PRODUCTION HALL AND STORAGE</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-row gap-2 items-center justify-center">
                            <div className="flex flex-col items-center justify-center">
                                <img src="/images/brackets/solid-white-bracket.png" alt="Solid white bracket" className="h-16 lg:h-36 w-auto" />
                            </div>
                            <div className="flex flex-col gap-2 items-center leading-none">
                                <p className="text-customRed text-stroke-3 text-bold text-shadow-customRed-md lg:text-[40px] tracking-extra-wide">1420</p>
                                <div className="flex flex-col items-center justify-center gap-2">
                                    <p className="text-customRed text-bold text-shadow-customRed-md lg:text-[32px]">EURO</p>
                                    <p className="text-customRed text-bold text-shadow-customRed-md lg:text-[32px]">PALLETS</p>

                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img
                                    src="/images/brackets/solid-white-bracket.png"
                                    alt="Solid white bracket"
                                    className="h-16 lg:h-32 w-auto rotate-180"
                                />
                            </div>
                        </div>
                        <p className="text-white font-bold text-shadow-white text-[12px] lg:text-[24px] text-center">TO ENSURE THE PROPER STORAGE AND DISTRIBUTION OF PRODUCTS</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailedResources;