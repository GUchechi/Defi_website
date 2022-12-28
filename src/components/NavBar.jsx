import React from "react";

const NavBar = () => {
  return (
    <div className="w-full h-[90px] bg-black">
      <div className="max-w-[1240px] mx-auto px-4 flex items-center justify-between h-full">
        <div>
          <h1 className="text-[#00d8ff]">DEFI</h1>
        </div>
        <div>
          <ul className="flex text-white items-center">
            <li>Platform</li>
            <li>Developers</li>
            <li>Community</li>
            <li>About</li>
            <button>Use Defi</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
