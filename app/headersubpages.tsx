// HeaderSubPages.js

import React from "react";

interface HeaderSubPagesProps {
  text: string;
  idpage: number;
}

const HeaderSubPages: React.FC<HeaderSubPagesProps> = ({ text, idpage }) => {
  return (
    <header className="text-2xl font-bold text-black p-4 flex justify-start items-center">
      <a href="/">
        <img
          src="https://cdn-icons-png.flaticon.com/128/1946/1946436.png"
          alt="Home Icon"
          className="w-6 h-6"
        />
      </a>
    </header>
  );
};


export default HeaderSubPages;
