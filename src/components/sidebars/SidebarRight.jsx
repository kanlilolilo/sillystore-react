import React from 'react';
import { useNavigate } from 'react-router-dom';

function SidebarRight() {
  return (
    <div className="relative">
      <div className="hidden -m-6 lg:flex flex-col items-center w-56 h-[calc(100vh-94px)] bg-[#ffffff] p-4 text-center sticky top-[92px] border-solid border-l-8 border-[#3D58BA]">
        <p className="text-lg">Right Sidebar Content</p>
      </div>
    </div>
  );
}

export default SidebarRight;