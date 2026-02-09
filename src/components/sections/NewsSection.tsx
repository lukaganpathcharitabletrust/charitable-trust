import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import Button from '../ui/Button';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'New Clean Water Project Launched in Rural Communities',
    date: 'May 15, 2025',
    excerpt: 'Our latest initiative brings clean water to five rural communities, impacting over 2,000 people.',
    image: 'https://images.pexels.com/photos/1797393/pexels-photo-1797393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Projects',
  },
  {
    id: 2,
    title: 'Annual Fundraising Gala Raises Record Amount',
    date: 'April 28, 2025',
    excerpt: 'This year\'s gala raised over $500,000 to support our education initiatives worldwide.',
    image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Events',
  },
  {
    id: 3,
    title: 'HopeCharity Partners with Local Businesses for Job Training Program',
    date: 'March 10, 2025',
    excerpt: 'A new partnership will provide vocational training to 100 young adults from underserved communities.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Partnerships',
  },
];

const NewsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">Latest News</h2>
            <p className="text-gray-600">Stay updated with our recent activities and impact.</p>
          </div>
          <Link to="/blog" className="mt-4 md:mt-0">
            <Button variant="outline">
              View All News <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]">
              <Link to={`/blog/${item.id}`}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-teal-100 text-teal-800 mr-3">
                    {item.category}
                  </span>
                  <span className="flex items-center text-sm text-gray-500">
                    <Calendar size={14} className="mr-1" />
                    {item.date}
                  </span>
                </div>
                <Link to={`/blog/${item.id}`}>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 hover:text-teal-600 transition-colors">
                    {item.title}
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Link to={`/blog/${item.id}`} className="inline-flex items-center text-teal-600 hover:text-teal-800">
                  Read more <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;