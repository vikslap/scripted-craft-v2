"use client";
import React, { useEffect, useState } from 'react';

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#2F3640]">
      <div className="flex gap-4">
        {/* Blue Square */}
        <div className="w-4 h-4 bg-[#00A8FF] animate-pulse rounded-sm"></div>
        {/* Gold Square */}
        <div className="w-4 h-4 bg-[#E1B12C] animate-pulse rounded-sm [animation-delay:200ms]"></div>
        {/* White Square */}
        <div className="w-4 h-4 bg-[#F5F6FA] animate-pulse rounded-sm [animation-delay:400ms]"></div>
      </div>
    </div>
  );
}