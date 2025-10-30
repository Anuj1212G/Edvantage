import React, { useRef, useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react'; 

// ====================================================================
// Dummy Data for the Media Spotlight Cards
// ====================================================================
const mediaArticles = [
  {
    logoSrc: 'ET-CIO-Logo', 
    sourceName: 'ET CIO',
    title: 'Agentic AI Explained: Autonomy That’s Reshaping How We Work',
    date: '12 May 2025',
    link: '#',
  },
  {
    logoSrc: 'India-Today-Logo', 
    sourceName: 'INDIA TODAY',
    title: 'Adapting to AI revolution: Top 5 skills techies need to maximize appraisals this season',
    date: '05 May 2025',
    link: '#',
  },
  {
    logoSrc: 'Express-Computer-Logo', 
    sourceName: 'EXPRESS & COMPUTER',
    title: 'Vibe Coding: How Relying on Intuition Can Undermine the Development Process',
    date: '24 Apr 2025',
    link: '#',
  },
  {
    logoSrc: 'All-Things-Talent-Logo', 
    sourceName: 'ALL THINGS TALENT',
    title: 'Freshers, Forward March: Navigating In-Demand Skills in India\'s Surging GCC Ecosystem',
    date: '23 Apr 2025',
    link: '#',
  },
  {
    logoSrc: 'Forbes-Logo', 
    sourceName: 'FORBES',
    title: 'The Future of Work: Embracing Hybrid Models and Digital Transformation Strategies',
    date: '15 Apr 2025',
    link: '#',
  },
  {
    logoSrc: 'Tech-Crunch-Logo', 
    sourceName: 'TECH CRUNCH',
    title: 'Decoding the Latest Trends in Global Software Development Outsourcing',
    date: '10 Apr 2025',
    link: '#',
  },
];

const MediaSpotlightSection = () => {
  const scrollRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false); // New state for pause on hover
  
  const purpleColor = '#800080';
  const scrollIntervalTime = 4000; // Time in ms before auto-scrolling (4 seconds)

  // Combine the articles array with itself to create a loopable list (triplicated)
  const loopedArticles = [...mediaArticles, ...mediaArticles, ...mediaArticles];
  const numOriginalArticles = mediaArticles.length;

  // Function to perform smooth scrolling and jump for the loop effect
  const scrollToCard = (direction) => {
    if (scrollRef.current && scrollRef.current.children.length > 0) {
      const scrollElement = scrollRef.current;
      const firstCard = scrollElement.children[0];
      if (!firstCard) return;

      const cardWidth = firstCard.offsetWidth;
      const gap = 24; // space-x-6 is 1.5rem = 24px
      const scrollAmount = cardWidth + gap;
      
      const centerIndex = numOriginalArticles; 
      const centerScrollPosition = centerIndex * scrollAmount;

      // 1. Perform the scroll
      scrollElement.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      
      // 2. Teleport (jump) to maintain the illusion of continuity
      // We wait for the smooth scroll animation to finish.
      setTimeout(() => {
        const currentScroll = scrollElement.scrollLeft;
        
        // If scrolling right and passed the end of the center section
        if (currentScroll > (centerScrollPosition + (numOriginalArticles * scrollAmount) - scrollElement.clientWidth)) {
          // Jump back to the start of the center set
          scrollElement.scrollLeft = centerScrollPosition;
        } 
        
        // If scrolling left and passed the start of the center section
        else if (currentScroll < centerScrollPosition - scrollElement.clientWidth) {
          // Jump forward to the equivalent position in the last set 
          scrollElement.scrollLeft = centerScrollPosition + (numOriginalArticles * scrollAmount) - scrollElement.clientWidth;
        }
      }, 500); 
    }
  };

  // 1. Initial scroll to the center section on mount
  useEffect(() => {
    if (scrollRef.current && scrollRef.current.children.length > 0) {
      const scrollElement = scrollRef.current;
      const firstCard = scrollElement.children[0];
      
      const cardWidth = firstCard.offsetWidth;
      const gap = 24; 
      const scrollAmount = cardWidth + gap;
      const centerIndex = numOriginalArticles; 
      
      // Immediately set the scroll position to the start of the second (center) set of articles
      scrollElement.scrollLeft = centerIndex * scrollAmount;
    }
  }, []);

  // 2. Auto-Rotation Logic (New useEffect)
  useEffect(() => {
    // Only set the interval if the user is not hovering
    if (!isHovering) {
      const interval = setInterval(() => {
        scrollToCard('right');
      }, scrollIntervalTime);

      // Cleanup function to clear the interval when the component unmounts or state changes
      return () => clearInterval(interval);
    }
    // If hovering, do nothing (interval is cleared by the return function when isHovering changes)
  }, [isHovering]); // Re-run effect when hovering state changes


  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-semibold text-black">
Learning Corner 
</h2>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovering(true)} // Pause auto-scroll on hover
          onMouseLeave={() => setIsHovering(false)} // Resume auto-scroll on mouse leave
        >
          
          {/* Scrollable Content */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-scroll scrollbar-hide space-x-6 pb-4 md:pb-6"
          >
            {/* Map over the triplicated array */}
            {loopedArticles.map((article, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl"
              >
                <div className="p-6 h-full flex flex-col justify-between">
                  <div>
                    {/* Logo/Source */}
                    <div className="mb-4 h-12 flex items-center">
                      <span className="text-lg font-semibold text-gray-800">
                        {article.sourceName}
                      </span>
                    </div>

                    {/* Article Title */}
                    <h3 className="text-lg font-bold text-gray-900 leading-normal mb-6 min-h-[5rem]">
                      {article.title}
                    </h3>
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-100">
                    {/* Date */}
                    <p className="text-sm text-gray-500 mb-4">
                      {article.date}
                    </p>

                    {/* Read Article Link */}
                    <a
                      href={article.link}
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200"
                    >
                      Read Article
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={() => scrollToCard('left')}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-20 bg-gray-900 text-white hover:bg-gray-700`}
            aria-label="Scroll left"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => scrollToCard('right')}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-20 bg-gray-900 text-white hover:bg-gray-700`}
            aria-label="Scroll right"
          >
            <ArrowRight className="h-6 w-6" />
          </button>

        </div>
      </div>
      
      {/* Tailwind utility to hide the default scrollbar */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
};

export default MediaSpotlightSection;