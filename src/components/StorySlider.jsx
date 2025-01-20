import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const StorySlider = ({ stories }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full mx-auto px-8">
      <Slider {...settings}>
        {stories?.map((story, index) => (
          <div key={index} className="p-4">
            <div className="max-w-3xl mx-auto border-2 border-gray-200 bg-gradient-to-b from-blue-500 via-blue-300 to-blue-100 rounded-lg p-8 h-[400px] flex flex-col items-center space-y-6 shadow-lg">
              {/* Image Section */}
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white">
                <img
                  src={story.storyImageUrl}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Text Section */}
              <blockquote className="text-center text-gray-800 px-6">
                <p className="text-lg font-medium">{story.story}</p>
              </blockquote>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default StorySlider;
