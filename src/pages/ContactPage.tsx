import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, MapPin, Phone, MessageSquare, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import { SocialIcon } from 'react-social-icons';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full">
      <Helmet>
        <title>Contact Us | Kai Luka Ganpathsheth Badgujar Charitable Trust</title>
        <meta name="description" content="Get in touch with Kai Luka Ganpathsheth Badgujar Charitable Trust. Contact us for donation inquiries, volunteering, partnerships, or general questions. Located in Dhanori, Pune, Maharashtra." />
        <link rel="canonical" href="https://lukaganpathcharitabletrust.in/contact" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Contact us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            We'd love to hear from you. Reach out with questions, partnership inquiries, or to learn more about our work.
          </p>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Get In Touch</h2>

                  <div className="space-y-6">
                    {/* Office */}
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-teal-100 p-3 rounded-lg">
                        <MapPin className="w-6 h-6 text-teal-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Our Office</h3>
                        <p className="text-gray-600 mt-1">
                          Bramha Sky City<br />
                          Dhanori, Pune-411015<br />
                          Maharashtra, India
                        </p>
                      </div>
                    </div>

                    {/* Email - FIXED SECTION */}
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-teal-100 p-3 rounded-lg">
                        <Mail className="w-6 h-6 text-teal-600" />
                      </div>
                      <div className="ml-4 min-w-0 flex-1">
                        <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                        <p className="text-gray-600 mt-1 break-all md:break-words text-sm sm:text-base">
                          lukaganpathcharitabletrust@gmail.com
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-teal-100 p-3 rounded-lg">
                        <Phone className="w-6 h-6 text-teal-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Call Us</h3>
                        <p className="text-gray-600 mt-1">
                          +91 8600899909<br />
                          Mon-Fri, 9am-5pm IST
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social Icons */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Follow Us</h3>
                    <div className="flex flex-wrap gap-4 mt-5 pb-4">
                      <div className="transition-transform transform hover:scale-110">
                        <SocialIcon url="https://facebook.com" target="_blank" style={{ height: 40, width: 40 }} />
                      </div>
                      <div className="transition-transform transform hover:scale-110">
                        <SocialIcon url="https://twitter.com" target="_blank" style={{ height: 40, width: 40 }} />
                      </div>
                      <div className="transition-transform transform hover:scale-110">
                        <SocialIcon url="https://instagram.com" target="_blank" style={{ height: 40, width: 40 }} />
                      </div>
                      <div className="transition-transform transform hover:scale-110">
                        <SocialIcon url="https://linkedin.com" target="_blank" style={{ height: 40, width: 40 }} />
                      </div>
                      <div className="transition-transform transform hover:scale-110">
                        <SocialIcon url="https://youtube.com" target="_blank" style={{ height: 40, width: 40 }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md p-8">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Message Sent!</h2>
                      <p className="text-gray-600 mb-6">
                        Thank you for reaching out. We've received your message and will get back to you as soon as possible.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)}>
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center mb-6">
                        <MessageSquare className="w-6 h-6 text-teal-600 mr-3" />
                        <h2 className="text-2xl font-serif font-bold text-gray-900">Send Us a Message</h2>
                      </div>

                      <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                              Your Name *
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                              required
                            />
                          </div>

                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                              Your Email *
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                              required
                            />
                          </div>
                        </div>

                        <div className="mb-6">
                          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                            Subject *
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                            required
                          >
                            <option value="">Please select a subject</option>
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Donation Question">Donation Question</option>
                            <option value="Volunteer Opportunity">Volunteer Opportunity</option>
                            <option value="Partnership Proposal">Partnership Proposal</option>
                            <option value="Media Inquiry">Media Inquiry</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        <div className="mb-6">
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                            Your Message *
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={6}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                            required
                          ></textarea>
                        </div>

                        <Button type="submit" size="lg" className="w-full md:w-auto">
                          Send Message
                        </Button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white">
        <div className="h-96 w-full">
          <iframe
            title="Our Location"
            className="w-full h-full border-0 grayscale contrast-125"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.442801452144!2d73.8961730752178!3d18.5991191825102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c111053160a9%3A0x7f43697f48096c4!2sDhanori%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;