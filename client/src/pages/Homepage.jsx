import {
  FiBookOpen,
  FiBookmark,
  FiHome,
  FiMonitor,
  FiSearch,
  FiShoppingBag,
  FiMessageSquare,
} from "react-icons/fi";
import Testimonials from "../components/Testimonials";

import Hero from "../components/Hero";
import Marketplace from "../components/Marketplace";
import Work from "../components/Work";
import CTA from "../components/CTA";

export default function Homepage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2D3748]">
                Browse Categories
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Find exactly what you need for your campus life
              </p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
            <a href="/categories/textbooks">
              <div className="group relative overflow-hidden rounded-lg transition-all hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-[#4F6BED]/80 to-[#4F6BED]/60 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex aspect-square flex-col items-center justify-center p-6">
                  <FiBookOpen className="h-12 w-12 text-[#4F6BED] transition-transform group-hover:scale-110 group-hover:text-white" />
                  <h3 className="mt-4 text-xl font-bold text-[#2D3748] group-hover:text-white">
                    Textbooks
                  </h3>
                </div>
              </div>
            </a>
            <a href="/categories/furniture">
              <div className="group relative overflow-hidden rounded-lg transition-all hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-[#38B2AC]/80 to-[#38B2AC]/60 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex aspect-square flex-col items-center justify-center p-6">
                  <FiHome className="h-12 w-12 text-[#38B2AC] transition-transform group-hover:scale-110 group-hover:text-white" />
                  <h3 className="mt-4 text-xl font-bold text-[#2D3748] group-hover:text-white">
                    Furniture
                  </h3>
                </div>
              </div>
            </a>
            <a href="/categories/electronics">
              <div className="group relative overflow-hidden rounded-lg transition-all hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-[#F6AD55]/80 to-[#F6AD55]/60 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex aspect-square flex-col items-center justify-center p-6">
                  <FiMonitor className="h-12 w-12 text-[#F6AD55] transition-transform group-hover:scale-110 group-hover:text-white" />
                  <h3 className="mt-4 text-xl font-bold text-[#2D3748] group-hover:text-white">
                    Electronics
                  </h3>
                </div>
              </div>
            </a>
            <a href="/categories/other">
              <div className="group relative overflow-hidden rounded-lg transition-all hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500/80 to-gray-500/60 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex aspect-square flex-col items-center justify-center p-6">
                  <FiShoppingBag className="h-12 w-12 text-gray-500 transition-transform group-hover:scale-110 group-hover:text-white" />
                  <h3 className="mt-4 text-xl font-bold text-[#2D3748] group-hover:text-white">
                    Other Items
                  </h3>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <Marketplace />

      {/* How It Works Section */}
      <Work />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <CTA />
    </div>
  );
}
