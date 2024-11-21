import { useSectionStore } from "@store/useSectionStore";

const Clients = () => {
    // Store
    const { setCurrentSection } = useSectionStore();

    // Handlers and Functions
    const handleBackToTop = () => {
        setCurrentSection(1);
    };

    return (
        <div className="relative flex flex-col bg-white w-full h-full">
            <div className="flex flex-row gap-2 h-[10%] w-full justify-between items-center">
                <div className="bg-black h-12 w-1/5 lg:w-[30%]" />
                <div className="flex flex-row items-center justify-center gap-1 lg:gap-2 text-end">
                    <img src="/images/logos/gray-brackets-r.png" alt="Gray brackets logo" className="w-8 h-8 md:h-12 md:w-12 lg:w-16 lg:h-16" />
                    <p className="text-transparent text-stroke-3 text-stroke-customRed tracking-extra-wide font-bold text-[32px] md:text-[40px] lg:text-[56px]">CLIENTS</p>
                </div>
                <div className="bg-white border-l-2 border-t-2 border-b-2 border-customRed h-12 w-1/5 lg:w-[30%]" />
            </div>
            {/* Back to Top Button */}
            <button
                onClick={handleBackToTop}
                className="absolute bottom-5 left-0 z-30 bg-customRed text-white p-3 rounded-full shadow-lg hover:bg-white hover:text-customRed transition-colors duration-300"
                aria-label="Back to Top"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 lg:h-6 lg:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
            </button>
        </div>
    );
};

export default Clients;