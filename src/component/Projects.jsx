import { useState, useEffect } from "react";
import { CodeIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { projects } from "../data";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slideshow every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? projects.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === projects.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (!projects || projects.length === 0) {
    return null;
  }

  const currentProject = projects[currentIndex];

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Below you will find projects that I have developed during my time at General Assembly, individually and in team settings.
          </p>
        </div>

        {/* Slideshow Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Slide */}
          <div className="relative overflow-hidden rounded-lg shadow-2xl">
            <a
              href={currentProject.link}
              className="block relative group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative h-96 md:h-[500px]">
                <img
                  alt={currentProject.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  src={currentProject.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
                
                {/* Project Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-left">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-2">
                    {currentProject.subtitle}
                  </h2>
                  <h1 className="title-font text-2xl md:text-3xl font-bold text-white mb-3">
                    {currentProject.title}
                  </h1>
                  <p className="leading-relaxed text-gray-300 text-base md:text-lg">
                    {currentProject.description}
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full shadow-lg transition-colors duration-200 z-10"
            aria-label="Previous project"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full shadow-lg transition-colors duration-200 z-10"
            aria-label="Next project"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex
                    ? "bg-green-400"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4 text-gray-400">
            <span className="text-sm">
              {currentIndex + 1} of {projects.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}