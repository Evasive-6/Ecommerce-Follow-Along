import React from "react";
import { motion } from "framer-motion";

const fashionTrends = [
  {
    title: "Meat Dress",
    description: "Lady Gaga famously wore a dress made entirely of raw meat at the 2010 MTV Video Music Awards. It was a bold, bizarre statement that sparked global conversations.",
    image: "https://www.jacksonville.com/gcdn/authoring/2011/06/16/NFTU/ghows-LK-c2a441a8-e733-41b2-b91e-26570c1b8d49-077c0f03.jpeg?width=1200&disable=upscale&format=pjpg&auto=webp",
  },
  {
    title: "Bubble Wrap Dresses",
    description: "Taking recycling to a whole new level, bubble wrap dresses became a short-lived trend that combined fashion with a playful touch.",
    image: "https://preview.redd.it/if-dresses-were-made-only-of-bubble-wrap-v0-kqj6sx5kh2ib1.jpg?width=640&crop=smart&auto=webp&s=fb4d380d04e36986aa931bce87d935bf4477cf25",
  },
  {
    title: "Extreme Platform Shoes",
    description: "Shoes with absurdly high platforms have been seen on runways, making the wearer appear as though they are walking on stilts.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWqdvC7ZPop7ZWFBOM0cDGR20RItz-it3c0Q&ss",
  },
  {
    title: "LED Light Clothing",
    description: "Clothing embedded with LED lights gained popularity at music festivals, turning wearers into walking light shows.",
    image: "https://cdn.shopify.com/s/files/1/1429/5802/files/201507211840451814.jpg?v=1498083498https://via.placeholder.com/300x200?text=LED+Light+Clothing",
  },
  {
    title: "Grass Skirts (Made of Real Grass)",
    description: "Designers have used real grass to create eco-friendly skirts, blending fashion with nature in a truly bizarre way.",
    image: "https://s.alicdn.com/@sc04/kf/HTB1DUNsa5_1gK0jSZFqq6ApaXXag.jpg_300x300.jpg",
  },
];

export default function LandingPage() {
  return (
    <div className="bg-gradient-to-r from-pink-50 to-blue-50 min-h-screen text-gray-800 font-serif">
      {/* Header Section */}
      <header className="text-center py-16 bg-gradient-to-b from-blue-100 to-pink-100">
        <motion.h1
          className="text-6xl font-bold mb-4 text-gray-900"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to the World of Weird Fashion
        </motion.h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Discover the quirkiest, most unconventional fashion trends that have ever graced the runway. Dive into a realm where creativity knows no bounds, and style takes a wild turn.
        </p>
      </header>

      {/* Introduction Section */}
      <section className="py-16 px-10 lg:px-20">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">About the Project</h2>
        <p className="text-center text-gray-700 max-w-4xl mx-auto">
          Our project, "List of Most Weird Fashion Trends," highlights the strange and humorous fashion statements that have captured the imagination of designers and enthusiasts. From raw meat dresses to LED-infused clothing, explore how bold ideas redefine fashion. Join us in celebrating the eccentric side of style by liking, sharing, and commenting on your favorite bizarre trends!
        </p>
      </section>

      {/* Fashion Trends Section */}
      <section className="py-12 bg-white">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">Featured Trends</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 lg:px-20">
          {fashionTrends.map((trend, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gradient-to-r from-pink-100 to-blue-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200"
            >
              <img
                src={trend.image}
                alt={trend.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">{trend.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{trend.description}</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md w-full">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center py-8 bg-gradient-to-t from-blue-100 to-pink-100">
        <p className="text-gray-600">© 2025 Weird Fashion Trends. All rights reserved.</p>
      </footer>
    </div>
  );
}
