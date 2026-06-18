'use client'
import { Bell, CheckSquare, Search, ChevronDown } from "lucide-react";
import { useState } from "react";

export function Header() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="bg-slate-100 rounded-md px-3 py-1.5 flex items-center gap-2 border border-slate-200 cursor-pointer">
          <span className="text-sm font-semibold text-slate-700">Igreja Sede - São Paulo</span>
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button className="relative">
          <Bell className="w-5 h-5 text-slate-400" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full">3</span>
        </button>
        <button className="relative">
          <CheckSquare className="w-5 h-5 text-slate-400" />
        </button>
        <div className="h-8 w-8 rounded-full bg-slate-300 cursor-pointer border border-slate-200"></div>
      </div>
    </header>
  );
}
