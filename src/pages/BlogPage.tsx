import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Search, Tag, User } from 'lucide-react';
import Button from '../components/ui/Button';
import { blogPosts } from '../data/blogs'; // Import your data here

const categories = ['All', 'Projects', 'Events', 'Partnerships', 'Healthcare', 'Volunteer', 'Agriculture', 'Education'];

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Blog hero image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">News & Updates</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Stay updated with our latest stories, projects, and initiatives.
          </p>
        </div>
      </section>
      
      {/* Blog Content Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search & Filter */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                      placeholder="Search articles..."
                    />
                  </div>
                </div>
                <div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            
            {/* Featured Post (First item in filtered results) */}
            {filteredPosts.length > 0 && (
              <div className="mb-12">
                <Link to={`/blog/${filteredPosts[0].id}`}>
                  <div className="relative rounded-lg overflow-hidden shadow-lg group">
                    <img 
                      src={filteredPosts[0].image} 
                      alt={filteredPosts[0].title} 
                      className="w-full h-96 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 md:p-8">
                      <span className="inline-block bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                        {filteredPosts[0].category}
                      </span>
                      <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">
                        {filteredPosts[0].title}
                      </h2>
                      <p className="text-gray-200 mb-4 max-w-2xl">{filteredPosts[0].excerpt}</p>
                      <div className="flex items-center text-gray-300 text-sm">
                        <span className="flex items-center"><Calendar size={14} className="mr-1" />{filteredPosts[0].date}</span>
                        <span className="mx-3">•</span>
                        <span className="flex items-center"><User size={14} className="mr-1" />{filteredPosts[0].author}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}
            
            {/* Blog Posts Grid */}
            {filteredPosts.length > 1 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.slice(1).map((post) => (
                  <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]">
                    <Link to={`/blog/${post.id}`}>
                      <img src={post.image} alt={post.title} className="w-full h-56 object-cover object-top" />
                    </Link>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-teal-100 text-teal-800 mr-3">
                          {post.category}
                        </span>
                        <span className="flex items-center text-sm text-gray-500"><Calendar size={14} className="mr-1" />{post.date}</span>
                      </div>
                      <Link to={`/blog/${post.id}`}>
                        <h3 className="text-xl font-bold mb-2 text-gray-900 hover:text-teal-600 transition-colors">{post.title}</h3>
                      </Link>
                      <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, index) => (
                          <span key={index} className="flex items-center text-xs text-gray-500">
                            <Tag size={12} className="mr-1" />{tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between border-t pt-4">
                        <span className="text-sm flex items-center text-gray-500"><User size={14} className="mr-1" />{post.author}</span>
                        <Link to={`/blog/${post.id}`} className="text-teal-600 font-medium inline-flex items-center hover:text-teal-800">
                          Read more <ArrowRight size={16} className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : filteredPosts.length === 0 && (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <p className="text-gray-600 mb-6">No matching articles found.</p>
                <Button onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}>
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;