import React from 'react';
import { useParams } from 'react-router-dom';
import projects from './projectData'; // Your data file

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <div className="text-white">Project not found</div>;

  return (
    <div className="max-w-[900px] mx-auto mt-20 text-white px-4">
      <h1 className="text-4xl text-cyan">{project.name}</h1>
      <p className="text-orange mt-2">{project.year}</p>
      
      {/* Displaying all images */}
      {project.images && project.images.length > 0 && (
        <div className="grid grid-cols sm:grid-cols- gap-4 mt-6">
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
