import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Award, Calendar, Eye, Heart, Leaf, Shield, Users } from 'lucide-react';
import TeamOverview from '../components/sections/TeamOverview';

interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Milestone {
  year: string;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: <Heart className="w-12 h-12 text-teal-600" />,
    title: 'Compassion',
    description: 'We approach our work with empathy and understanding, recognizing the dignity of every individual we serve.',
  },
  {
    icon: <Shield className="w-12 h-12 text-teal-600" />,
    title: 'Integrity',
    description: 'We uphold the highest ethical standards in all our operations, ensuring transparency and accountability.',
  },
  {
    icon: <Users className="w-12 h-12 text-teal-600" />,
    title: 'Community',
    description: 'We believe in the power of community-led initiatives and partner with local stakeholders to create sustainable change.',
  },
  {
    icon: <Leaf className="w-12 h-12 text-teal-600" />,
    title: 'Sustainability',
    description: 'We design our programs to create lasting impact that continues beyond our direct involvement.',
  },
  {
    icon: <Award className="w-12 h-12 text-teal-600" />,
    title: 'Excellence',
    description: 'We strive for excellence in all our work, continuously learning and improving our approach.',
  },
  {
    icon: <Eye className="w-12 h-12 text-teal-600" />,
    title: 'Vision',
    description: 'We work towards a world where all people have the opportunity to thrive and realize their full potential.',
  },
];

const milestones: Milestone[] = [
  {
    year: 'June, 2025',
    title: 'Foundation',
    description: 'Kai. Luka Ganpatsheth Charitable Trust was founded with a vision to create sustainable change in underserved communities.',
  },
  //syntax for further referance
  // {
  //   year: '2012',
  //   title: 'First Major Project',
  //   description: 'Launched our first major initiative, bringing clean water to five communities in East Africa.',
  // },
];

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <Helmet>
        <title>About Us | Kai Luka Ganpathsheth Badgujar Charitable Trust</title>
        <meta name="description" content="Learn about the mission, values, team, and history of Kai Luka Ganpathsheth Badgujar Charitable Trust. A registered NGO dedicated to social welfare in India." />
        <link rel="canonical" href="https://lukaganpathcharitabletrust.in/about" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Team working together"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">About Our Charity</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Learn about our mission, our team, and the impact we're making together.
          </p>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2025, Kai. Luka Ganpatsheth Charitable Trust began with a simple mission: to create positive, sustainable change in communities facing poverty and limited education opportunities.
                </p>
                <p>
                  Our approach has always been guided by the belief that lasting change comes from within communities. We work alongside local partners, listening to their needs and supporting community-driven solutions rather than imposing external ideas.
                </p>
                <p>
                  Kai. Luka Ganpatsheth Charitable Trust is a non-profit organization dedicated to uplifting underprivileged communities through education, healthcare, women empowerment. Founded in 2025 by a group of compassionate individuals, the trust is registered under the Indian Trusts Act and recognized under sections 12A and 80G of the Income Tax Act.
                </p>
                <p>
                  We believe that real change begins at the grassroots level. Our mission is to bring dignity, opportunity, and support to those who need it the most—irrespective of caste, religion, or background. With transparency, community participation, and compassion at our core, we strive to create a more inclusive and equitable society.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.pexels.com/photos/6647029/pexels-photo-6647029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Children smiling" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 md:py-24 bg-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-700">
              These core principles guide everything we do and inform how we approach our mission.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-700">
              Key milestones in our history that have shaped who we are today.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal-200 hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-teal-600 z-10 hidden md:block">
                    <div className="absolute inset-1 rounded-full bg-teal-100"></div>
                  </div>
                  
                  <div className={`md:flex items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    <div className="md:w-1/2 p-4"></div>
                    <div className="md:w-1/2 p-4">
                      <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center mb-4">
                          <Calendar className="w-5 h-5 text-teal-600 mr-2" />
                          <span className="font-bold text-teal-600">{milestone.year}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <TeamOverview />
    </div>
  );
};

export default AboutPage;