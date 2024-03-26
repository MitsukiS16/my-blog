// HeaderSubPages.js

import React from "react";

interface HeaderSubPagesProps {
  text: string;
  idpage: number;
}

const HeaderSubPages: React.FC<HeaderSubPagesProps> = ({ text, idpage }) => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold">{text}</h1>
      <p className="text-sm">Page ID: {idpage}</p>
    </header>
  );
};


export default HeaderSubPages;
