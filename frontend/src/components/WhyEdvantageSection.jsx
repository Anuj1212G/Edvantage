import React, { useRef, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// ====================================================================
// Dummy Data for the Blog Articles
// ====================================================================
const blogArticles = [
  {
    id: 1,
    imgSrc: "/images/blog/b1.png",
    title: "The $100 Million Algorithm: AI's True Impact on Oil & Gas Efficiency",
    date: "12 May 2025",
    link: "/blog/ai-algorithm",
  },
  {
    id: 2,
    imgSrc: "/images/blog/b2.png",
    title:
      "The Silent Revolution in Field Operations",
    date: "05 May 2025",
    link: "/blog/Field Operations",
  },
  {
    id: 3,
    imgSrc: "/images/blog/b3.png",
    title:
      "Beyond the Drill Site: The Ripple Effect",
    date: "24 Apr 2025",
    link: "/blog/Ripple Effect",
  },
  {
    id: 4,
    imgSrc: "/images/blog/b4.png",
    title:
      "The Human Element in the Digital Age",
    date: "23 Apr 2025",
    link: "/blog/Digital Age",
  },
  {
    id: 5,
    imgSrc: "/images/blog/b5.png",
    title:
      "What Comes Next? Securing Your Future in Energy",
    date: "15 Apr 2025",
    link: "/blog/Securing Your Future in Energy",
  },
  {
    id: 6,
    imgSrc: "/images/blog/b6.png",
    title: "The Rise of Machine Learning in the Oil and Gas Industry",
    date: "10 Apr 2025",
    link: "/blog/machine-learning-oil-gas",
  },
];

const MediaSpotlightSection = () => {
  const scrollRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  const scrollIntervalTime = 4000;
  const loopedArticles = [...blogArticles, ...blogArticles, ...blogArticles];
  const numOriginalArticles = blogArticles.length;

  const scrollToCard = (direction) => {
    if (scrollRef.current && scrollRef.current.children.length > 0) {
      const scrollElement = scrollRef.current;
      const firstCard = scrollElement.children[0];
      if (!firstCard) return;

      const cardWidth = firstCard.offsetWidth;
      const gap = 24;
      const scrollAmount = cardWidth + gap;
      const centerIndex = numOriginalArticles;
      const centerScrollPosition = centerIndex * scrollAmount;

      scrollElement.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });

      setTimeout(() => {
        const currentScroll = scrollElement.scrollLeft;
        if (
          currentScroll >
          centerScrollPosition +
            numOriginalArticles * scrollAmount -
            scrollElement.clientWidth
        ) {
          scrollElement.scrollLeft = centerScrollPosition;
        } else if (currentScroll < centerScrollPosition - scrollElement.clientWidth) {
          scrollElement.scrollLeft =
            centerScrollPosition +
            numOriginalArticles * scrollAmount -
            scrollElement.clientWidth;
        }
      }, 500);
    }
  };

  useEffect(() => {
    if (scrollRef.current && scrollRef.current.children.length > 0) {
      const scrollElement = scrollRef.current;
      const firstCard = scrollElement.children[0];
      const cardWidth = firstCard.offsetWidth;
      const gap = 24;
      const scrollAmount = cardWidth + gap;
      const centerIndex = numOriginalArticles;
      scrollElement.scrollLeft = centerIndex * scrollAmount;
    }
  }, []);

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        scrollToCard("right");
      }, scrollIntervalTime);
      return () => clearInterval(interval);
    }
  }, [isHovering]);

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold text-black">Learning Corner</h2>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Scrollable Content */}
          <div
            ref={scrollRef}
            className="flex overflow-x-scroll scrollbar-hide space-x-6 pb-4 md:pb-6"
          >
            {loopedArticles.map((article, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl"
              >
                {/* Article Image */}
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={article.imgSrc}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Article Details */}
                <div className="p-6 flex flex-col justify-between h-[14rem]">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 leading-normal mb-4 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">{article.date}</p>
                  </div>

                  <button
                    onClick={() => navigate(article.link)}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200"
                  >
                    Read Article →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={() => scrollToCard("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-20 bg-gray-900 text-white hover:bg-gray-700"
            aria-label="Scroll left"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => scrollToCard("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-20 bg-gray-900 text-white hover:bg-gray-700"
            aria-label="Scroll right"
          >
            <ArrowRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Hide Scrollbar */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default MediaSpotlightSection;
