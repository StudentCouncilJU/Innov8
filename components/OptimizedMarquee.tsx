import React, { useMemo } from 'react';

interface OptimizedMarqueeProps {
  items: string[];
  className?: string;
}

const OptimizedMarquee: React.FC<OptimizedMarqueeProps> = ({ items, className }) => {
  // Memoize the repeated items to avoid recreation
  const repeatedItems = useMemo(() => {
    const duplicatedItems = [...items, ...items, ...items];
    return duplicatedItems;
  }, [items]);

  return (
    <div className={`w-full bg-[#23D3ED] p-2 sm:p-4 flex gap-2 sm:gap-3 items-center justify-between mt-6 sm:mt-10 md:mt-0 overflow-hidden ${className || ''}`}>
      <div className="flex items-center gap-3 sm:gap-5 animate-marquee whitespace-nowrap">
        {repeatedItems.map((item, index) => (
          <React.Fragment key={`${item}-${index}`}>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black" />
            <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
              {item}
            </span>
          </React.Fragment>
        ))}
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black" />
      </div>
    </div>
  );
};

export default OptimizedMarquee;
