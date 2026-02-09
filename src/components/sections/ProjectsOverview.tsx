import { projects } from '../../data/projects';
import React from 'react';
import { ArrowRight, MapPin, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate

// We can make the prop optional since we are handling navigation internally now
interface ProjectsOverviewProps {
  openProject?: (project: any) => void; 
}

const ProjectsOverview: React.FC<ProjectsOverviewProps> = () => {
  const navigate = useNavigate(); // 2. Initialize the hook

  const handleLearnMore = (projectId: number) => {
    // 3. Navigate to /projects and pass the projectId in the state
    navigate('/projects', { state: { selectedProjectId: projectId } });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
          />

          <div className="p-6">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-semibold px-2 py-1 rounded-full bg-teal-100 text-teal-800">
                {project.category}
              </span>
            </div>

            <h3 className="text-xl font-bold mb-2 text-gray-900">
              {project.title}
            </h3>

            <p className="text-gray-600 mb-4 line-clamp-3">
              {project.shortDescription}
            </p>

            <div className="flex gap-4 text-sm text-gray-500 mb-4">
              <span className="inline-flex items-center gap-1">
                <MapPin size={14} className="text-teal-600" />
                {project.location}
              </span>

              <span className="inline-flex items-center gap-1">
                <Users size={14} className="text-teal-600" />
                {project.impact}&nbsp;impacted
              </span>
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Progress</span>
                <span className="font-medium">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-teal-600 h-2 rounded-full"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            <button
              onClick={() => handleLearnMore(project.id)} // 4. Use the new handler
              className="inline-flex items-center text-teal-600 hover:text-teal-800"
            >
              Learn more <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsOverview;