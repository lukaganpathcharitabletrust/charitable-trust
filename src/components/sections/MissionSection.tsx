import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const MissionSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-teal-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              At HopeCharity, we believe in creating sustainable change through compassionate action. Our mission is to empower communities, provide educational opportunities, and deliver humanitarian aid to those most vulnerable.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Since our founding, we've worked tirelessly to address the root causes of poverty and inequality. We partner with local communities to develop solutions that are sustainable, culturally appropriate, and driven by the people we serve.
            </p>
            <Link to="/about">
              <Button variant="outline" size="lg">
                Learn More About Us <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
          <div className="lg:w-1/2 rounded-xl overflow-hidden shadow-lg relative">
            <img
              src="/resources/hands.jpg"
              alt="Charity volunteers working together"
              className="w-full h-80 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent py-8 px-6">
              <p className="text-white font-medium">Together, we can make a difference.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;