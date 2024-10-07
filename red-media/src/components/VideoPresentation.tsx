// import Navigation from "./Navigation";

const VideoPresentation = () => {
    return (
        <>
            {/* <Navigation /> */}

            {/* Video Section */}
            <div className="flex-1 flex items-center justify-center w-full">
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
        </>
    );
};

export default VideoPresentation;