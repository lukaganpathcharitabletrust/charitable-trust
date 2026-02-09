import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="\resources\hero_bg.jpg"
          alt="Children smiling"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-35"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-36 lg:py-48">
        <div className="max-w-5xl bg-black bg-opacity-5 p-2 rounded-xl backdrop-blur">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight ">
            Creating a better future through compassion and action
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Kai. Luka Ganpatsheth Charitable Trust is a non-profit organization dedicated to uplifting underprivileged communities through education, healthcare, women empowerment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/donate">
              <Button size="lg">
                Donate Now
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" size="lg" className="bg-white bg-opacity-10 text-white border-white hover:bg-white hover:bg-opacity-20">
                Our Projects <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;