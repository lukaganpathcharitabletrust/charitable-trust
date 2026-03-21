import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  // bio: string;
  social: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Rajshree Badgujar',
    role: 'Executive Director',
    image: 'public/resources/rajshree.png',
    // bio: 'With over 15 years of experience in humanitarian work, Emily leads our organization with passion and expertise.',
    social: {
      // facebook: '#',
      // twitter: '#',
      // linkedin: '#',
    },
  },
  {
    id: 2,
    name: 'Sudam Badgujar',
    role: 'Operations Director',
    image: '/resources/sudam.png',
    // bio: 'James oversees all our projects and ensures they are executed efficiently and effectively.',
    social: {
      // twitter: '#',
      // linkedin: '#',
    },
  },
  {
    id: 3,
    name: 'Suraj Badgujar',
    role: 'Community Outreach Manager',
    image: '/resources/suraj.jpeg',
    // bio: 'Maria builds and maintains relationships with the communities we serve, ensuring our work addresses their needs.',
    social: {
      // facebook: '#',
      // linkedin: '#',
    },
  },
  {
    id: 4,
    name: 'Himmatrao Badgujar',
    role: 'Finance Director',
    image: '/resources/aaba.jpg',
    // bio: 'LOREm',
    social: {
      // facebook: undefined,
      // twitter: undefined,
      // linkedin: undefined
    }
  },
  {
    id: 5,
    name: 'Suresh Mahale',
    role: 'Finance Director',
    image: '/resources/sureshMahale.png',
    // bio: 'David manages our financial resources with transparency and integrity to maximize our impact.',
    social: {
      // twitter: '#',
      // linkedin: '#',
    },
  },
  {
    id: 6,
    name: 'Vikas Badgujar',
    role: 'Finance Director',
    image: '/resources/VikasPundlik.png',
    // bio: 'David manages our financial resources with transparency and integrity to maximize our impact.',
    social: {
      // twitter: '#',
      // linkedin: '#',
    },
  },
  {
    id: 7,
    name: 'Pravin Badgujar',
    role: 'Finance Director',
    image: '/resources/pravinBadgujar.jpeg',
    // bio: 'David manages our financial resources with transparency and integrity to maximize our impact.',
    social: {
      // twitter: '#',
      // linkedin: '#',
    },
  },
];

const TeamOverview: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-gray-900 mb-4">Meet Our Team</h2>
        <p className="md:text-2xl text-gray-600 text-center max-w-7xl mx-auto mb-8">
          Our dedicated team of professionals works tirelessly to make a difference in the lives of those we serve.
        </p>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> */}
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="w-[250px] bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
                style={[5, 6, 7].includes(member.id) ? { objectPosition: 'center center' } : undefined}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-teal-600 font-medium mb-4">{member.role}</p>
                {/* <p className="text-gray-600 mb-4">{member.bio}</p> */}

                <div className="flex space-x-4">
                  {member.social.facebook && (
                    <a href={member.social.facebook} className="text-gray-400 hover:text-teal-600 transition-colors">
                      <Facebook size={18} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="text-gray-400 hover:text-teal-600 transition-colors">
                      <Twitter size={18} />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-teal-600 transition-colors">
                      <Linkedin size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamOverview;