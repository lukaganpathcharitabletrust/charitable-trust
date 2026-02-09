import React from 'react';
import { IndianRupee } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

interface DonationOption {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const donationOptions: DonationOption[] = [
  {
    id: 1,
    title: 'One-Time Donation',
    description: 'Make an immediate impact with a single contribution of any amount.',
    icon: <IndianRupee className="w-10 h-10 text-teal-600" />,
  }
];

const DonateSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Support Our Cause
          </h2>
          <p className="text-lg text-gray-700">
            Your generosity makes our work possible. Every donation, no matter the size, helps us create lasting positive change in the communities we serve.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          {donationOptions.map((option) => (
            <div
              key={option.id}
              className="bg-white w-full max-w-2xl md:w-[70%] rounded-2xl shadow-lg p-10 flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-xl"
            >
              <div className="mb-6">{option.icon}</div>
              <h3 className="text-3xl font-bold mb-3 text-gray-900">{option.title}</h3>
              <p className="text-gray-600 mb-8 text-lg">{option.description}</p>
              <Link to="/donate" className="w-full">
                <Button variant="primary" fullWidth className="text-lg py-4">
                  Donate Now
                </Button>
              </Link>
            </div>
          ))}
        </div>


        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Where Your Money Goes</h3>
              <p className="text-gray-600 mb-6">
                We are committed to transparency and accountability. Here's how your donation makes an impact:
              </p>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">Program Services</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-teal-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">Administration</span>
                    <span>10%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-teal-600 h-2 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">Fundraising</span>
                    <span>5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-teal-600 h-2 rounded-full" style={{ width: '5%' }}></div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link to="/donate">
                  <Button size="lg">Make a Donation</Button>
                </Link>
              </div>
            </div>

            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Children benefiting from donations"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;