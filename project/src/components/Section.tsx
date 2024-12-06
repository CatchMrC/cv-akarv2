import React from "react";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-16 scroll-mt-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-12 w-full text-center">
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {children}
    </section>
  );
};

export default Section;
