import React from "react";
import HomeForm from "@/components/HomeForm";
import Footer from "@/components/Footer";
import { Info } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      
      <div className="absolute top-6 left-6 z-20">
        <Link
          href="https://petite-subway-365.notion.site/project-update-302fc362224b80a1b3a0f0357b3dcdfe?source=copy_link"
          className="flex items-center gap-2 px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 bg-white/80 dark:bg-black/80 backdrop-blur-sm transition-colors"
        >
          <Info className="w-4 h-4" />
          How it Works
        </Link>
      </div>

      <HomeForm />

      <Footer />
    </div>
  );
}