import React, { useState, useEffect } from 'react';
import { Check, ChevronLeft, ChevronRight, Filter, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';
import { projects } from '../data/projects';
import { PROJECT_CATEGORIES, PROJECT_LOCATIONS } from '../constants/projectConstants';

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const openProject = (project: any) => {
    setSelectedProject(project);
    setCarouselIndex(0);
  };

  // Auto-advance carousel every 15 seconds; resets whenever carouselIndex changes
  useEffect(() => {
    if (!selectedProject?.images || selectedProject.images.length <= 1) return;
    const timer = setInterval(() => {
      setCarouselIndex(i => (i + 1) % selectedProject.images.length);
    }, 15000);
    return () => clearInterval(timer);
  }, [selectedProject, carouselIndex]);


  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.selectedProjectId) {
      const projectToOpen = projects.find(p => p.id === location.state.selectedProjectId);
      if (projectToOpen) {
        setSelectedProject(projectToOpen);
        window.scrollTo(0, 0);
      }
    }
  }, [location]);

  const filteredProjects = projects.filter((project) => {
    const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
    const locationMatch = selectedLocation === 'All' || project.location === selectedLocation;
    return categoryMatch && locationMatch;
  });

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Project work in progress"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">Our Projects</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Explore the initiatives we're leading around the world to create positive, lasting change.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Mobile Filter Toggle */}
          <div className="md:hidden mb-6">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter size={18} className="mr-2" />
              Filter Projects
            </Button>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className={`md:w-1/4 bg-gray-50 p-6 rounded-lg ${isFilterOpen ? 'block' : 'hidden md:block'}`}>

              {/* Categories - Using Constant */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4 text-gray-900">Categories</h3>
                <div className="space-y-2">
                  {PROJECT_CATEGORIES.map((category) => (
                    <button
                      key={category}
                      className={`flex items-center w-full text-left px-3 py-2 rounded-md transition-colors ${selectedCategory === category
                        ? 'bg-teal-100 text-teal-800'
                        : 'hover:bg-gray-100 text-gray-700'
                        }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {selectedCategory === category && <Check size={16} className="mr-2 text-teal-600" />}
                      <span className={selectedCategory === category ? 'ml-0' : 'ml-6'}>{category}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Locations - Using Constant */}
              <div>
                <h3 className="text-lg font-bold mb-4 text-gray-900">Locations</h3>
                <div className="space-y-2">
                  {PROJECT_LOCATIONS.map((loc) => (
                    <button
                      key={loc}
                      className={`flex items-center w-full text-left px-3 py-2 rounded-md transition-colors ${selectedLocation === loc
                        ? 'bg-teal-100 text-teal-800'
                        : 'hover:bg-gray-100 text-gray-700'
                        }`}
                      onClick={() => setSelectedLocation(loc)}
                    >
                      {selectedLocation === loc && <Check size={16} className="mr-2 text-teal-600" />}
                      <span className={selectedLocation === loc ? 'ml-0' : 'ml-6'}>{loc}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="md:w-3/4">
              <p className="text-gray-600 mb-6">
                Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:translate-y-[-5px] transition">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover object-top" />
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-teal-100 text-teal-800">{project.category}</span>
                        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-amber-100 text-amber-800">{project.location}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span className="font-medium">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-teal-600 h-2 rounded-full" style={{ width: `${project.progress}%` }}></div>
                        </div>
                        <div className="flex justify-between text-sm mt-1">
                          <span>Raised: {project.raised}</span>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Impact:</span> {project.impact}
                        </p>
                        <Button onClick={() => openProject(project)}>Learn More</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center overflow-y-auto p-4">
          <div className="bg-white rounded-3xl p-6 w-full max-w-4xl relative shadow-xl max-h-[90vh] overflow-y-auto border border-gray-200">
            <button onClick={() => setSelectedProject(null)} className="absolute top-3 right-4 text-gray-600 hover:text-gray-900">
              <X size={24} />
            </button>
            {/* Image Carousel */}
            {selectedProject.images && selectedProject.images.length > 1 ? (
              <div className="relative w-full h-72 rounded-xl mb-4 overflow-hidden">
                {/* Keyframe injected once */}
                <style>{`
                  @keyframes carouselFade {
                    from { opacity: 0; transform: scale(1.04); }
                    to   { opacity: 1; transform: scale(1); }
                  }
                  .carousel-img {
                    animation: carouselFade 0.7s cubic-bezier(0.4,0,0.2,1) both;
                  }
                `}</style>
                <img
                  key={carouselIndex}
                  src={selectedProject.images[carouselIndex]}
                  alt={`${selectedProject.title} - ${carouselIndex + 1}`}
                  className="carousel-img w-full h-full object-cover object-top"
                />
                {/* Prev */}
                <button
                  onClick={() => setCarouselIndex(i => (i - 1 + selectedProject.images.length) % selectedProject.images.length)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition"
                >
                  <ChevronLeft size={20} />
                </button>
                {/* Next */}
                <button
                  onClick={() => setCarouselIndex(i => (i + 1) % selectedProject.images.length)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition"
                >
                  <ChevronRight size={20} />
                </button>
                {/* Dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {selectedProject.images.map((_: string, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setCarouselIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${idx === carouselIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
                        }`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-72 object-cover object-top rounded-xl mb-4" />
            )}
            <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
            <p className="text-sm text-gray-500 mb-4">{selectedProject.category} • {selectedProject.location}</p>
            <div className="text-gray-700 whitespace-pre-line leading-relaxed mb-4">{selectedProject.description}</div>
            <div className="text-sm text-gray-700 space-y-1">
              <p><strong>Impact:</strong> {selectedProject.impact}</p>
              <p><strong>Raised:</strong> {selectedProject.raised}</p>
              <p><strong>Progress:</strong> {selectedProject.progress}%</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;