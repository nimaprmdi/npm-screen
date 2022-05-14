import React from "react";
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";

const IntroductionKit = () => {
    return (
        <div className="c-introduction w-full h-screen flex justify-end">
            <div className="w-3/6 h-auto flex content-center items-center">
                <div className="ml-4 w-full">
                    <Plyr
                        poster={process.env.PUBLIC_URL + "/assets/images/image.jpg"}
                        source={{
                            type: "video",
                            sources: [
                                {
                                    src: process.env.PUBLIC_URL + "/assets/videos/video.mp4",
                                    type: "video/mp4",
                                    size: 720,
                                },
                            ],
                        }}
                    />

                    <h3 className="u-white-color mt-7">You can Learn how to use perfomrance kit</h3>
                </div>
            </div>
        </div>
    );
};

export default IntroductionKit;
