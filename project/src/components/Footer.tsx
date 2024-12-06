import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-gray-600">
          <p className="text-sm">
            © {currentYear} Can Akar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
