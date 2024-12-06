import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ExpandableTextProps {
  text: string;
  maxLength?: number;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({
  text,
  maxLength = 150,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState<number | undefined>(undefined);
  const contentRef = useRef<HTMLDivElement>(null);
  const shouldShowButton = text.length > maxLength;
  const displayText = isExpanded ? text : text.slice(0, maxLength) + "...";

  useEffect(() => {
    if (contentRef.current) {
      const scrollHeight = contentRef.current.scrollHeight;
      setHeight(isExpanded ? scrollHeight : 80);
    }
  }, [isExpanded]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative">
      <div
        ref={contentRef}
        style={{ height: height ? `${height}px` : "auto" }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
          {displayText}
        </p>
      </div>
      {shouldShowButton && (
        <button
          onClick={toggleExpand}
          className="mt-2 flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors group"
        >
          <span className="text-sm font-medium">
            {isExpanded ? "Show Less" : "Read More"}
          </span>
          <span className="transition-transform duration-300 group-hover:translate-y-0.5">
            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </span>
        </button>
      )}
    </div>
  );
};

export default ExpandableText;
