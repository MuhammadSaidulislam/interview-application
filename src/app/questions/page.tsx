"use client";
import QuestionCard from '@/components/QuestionCard';
import { Filter, Search } from 'lucide-react'
import React, { useMemo, useState } from 'react'


const sampleCards = [
  {
    id: 1,
    title: "Modern Web Development",
    description: "Learn the latest technologies in web development including React, Node.js, and modern CSS frameworks.",
    category: "Technology",
    rating: 4.8,
    duration: "8 weeks",
    location: "Online",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop",
    price: "$299"
  },
  {
    id: 2,
    title: "Digital Marketing Mastery",
    description: "Master the art of digital marketing with hands-on experience in SEO, social media, and content marketing.",
    category: "Marketing",
    rating: 4.6,
    duration: "6 weeks",
    location: "New York",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
    price: "$199"
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    description: "Discover the principles of user interface and user experience design with practical projects.",
    category: "Design",
    rating: 4.9,
    duration: "10 weeks",
    location: "Online",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop",
    price: "$399"
  },
  {
    id: 4,
    title: "Financial Planning Basics",
    description: "Learn essential financial planning strategies for personal and business success.",
    category: "Finance",
    rating: 4.7,
    duration: "4 weeks",
    location: "Chicago",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop",
    price: "$149"
  },
  {
    id: 5,
    title: "Advanced JavaScript",
    description: "Deep dive into advanced JavaScript concepts including async programming and design patterns.",
    category: "Technology",
    rating: 4.5,
    duration: "12 weeks",
    location: "Online",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=300&h=200&fit=crop",
    price: "$449"
  },
  {
    id: 6,
    title: "Brand Strategy Workshop",
    description: "Build compelling brand strategies that resonate with your target audience and drive growth.",
    category: "Marketing",
    rating: 4.4,
    duration: "3 weeks",
    location: "Los Angeles",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop",
    price: "$249"
  }
];
const categories = ["All", "Technology", "Marketing", "Design", "Finance"];

const page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCards = useMemo(() => {
    return sampleCards.filter(card => {
      const matchesSearch = card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || card.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);


  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Search and Filter Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-slate-200">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent block">
                Boost Your Skills
              </h1>
              <p className="text-slate-600 text-xl md:text-2xl">Practice. Learn. Improve your knowledge.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Input */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <input  type="text"  placeholder="Search question..."  value={searchTerm}  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-slate-700 placeholder-slate-400"
                />
              </div>

              {/* Category Dropdown */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-slate-700 bg-white min-w-48 appearance-none cursor-pointer"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 pt-4 border-t border-slate-100">
              <p className="text-slate-500 text-sm">
                {filteredCards.length} question{filteredCards.length !== 1 ? 's' : ''} found
                {selectedCategory !== "All" && ` in ${selectedCategory}`}
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCards.map((card,key) => (
              <QuestionCard key={key} />
            ))}
          </div>
        </div>
      </div>


    </div>
  )
}

export default page