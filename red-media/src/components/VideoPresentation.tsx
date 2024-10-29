import Navigation from "./Navigation";

const VideoPresentation = () => {
    return (
        <div className="relative h-full w-full flex flex-col">
            <Navigation />

            {/* Video Section */}
            <div className="absolute flex-1 flex items-center justify-center w-full h-full">
                <video
                    src="/videos/process-creation-1.mp4"
                    controls
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover filter brightness-75 grayscale"
                >
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default VideoPresentation;