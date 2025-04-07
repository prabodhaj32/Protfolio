import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs'; // Import GitHub icon from react-icons
import projects from './projectData'; // Your data file

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook for navigation
  const project = projects.find((p) => p.id === id);

  if (!project) return <div className="text-white">Project not found</div>;

  // Function to navigate back
  const handleGoBack = () => {
    navigate(-1); // Goes back to the previous page
  };

  return (
    <div className="max-w-[900px] mx-auto mt-20 text-white px-4">
      {/* Back Button */}
      <button 
        onClick={handleGoBack} 
        className="text-cyan mb-4 hover:text-orange transition-all duration-300">
        &larr; Back
      </button>

      {/* GitHub link and icon */}
      {project.githubLink && (
        <a 
          href={project.githubLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white flex items-center gap-2 hover:text-orange transition-all duration-300 mb-4"
        >
          <BsGithub size={30} />
          GitHub Repository
        </a>
      )}

      <h1 className="text-4xl text-cyan">{project.name}</h1>
      <p className="text-orange mt-2">{project.year}</p>
      
      {/* Displaying all images */}
      {project.images && project.images.length > 0 && (
        <div className="grid sm:grid-cols-1 gap-4 mt-6">
          {project.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${project.name} image ${index + 1}`}
              className="rounded-xl w-full"
            />
          ))}
        </div>
      )}

      <p className="mt-6">{project.description}</p>
    </div>
  );
};

export default ProjectDetail;
