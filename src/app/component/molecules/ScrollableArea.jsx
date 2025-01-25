import React, { useRef } from "react";

const ScrollableArea = ({ handleLoadMore, className, children }) => {
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    const threshold = 100;
    if (
      container.scrollHeight - container.scrollTop - container.clientHeight <=
      threshold
    ) {
      handleLoadMore();
    }
  };

  return (
    <div className={className} ref={scrollContainerRef} onScroll={handleScroll}>
      {children}
    </div>
  );
};

export default ScrollableArea;
