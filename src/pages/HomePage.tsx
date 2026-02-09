import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import type { Project } from '../data/projects';

import Button from '../components/ui/Button';
import HeroSection from '../components/sections/HeroSection';
import ImpactStats from '../components/sections/ImpactStats';
import ProjectsOverview from '../components/sections/ProjectsOverview';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import MissionSection from '../components/sections/MissionSection';
import TeamOverview from '../components/sections/TeamOverview';
import NewsSection from '../components/sections/NewsSection';
import DonateSection from '../components/sections/DonateSection';
// import ProjectModal from '../components/ProjectModal'; // adjust path if needed

const HomePage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openProject = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <MissionSection />
      <ImpactStats />

      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 text-center">
            Our Recent Projects
          </h2>

          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            See how your support is making a difference through our initiatives.
          </p>

          <ProjectsOverview openProject={openProject} />

          <div className="mt-12 text-center">
            <Link to="/projects">
              <Button variant="outline" size="lg">
                View All Projects <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ Same modal reused
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={closeProject}
        />
      )} */}

      <TestimonialsSection />
      <TeamOverview />
      <NewsSection />
      <DonateSection />
    </div>
  );
};

export default HomePage;
