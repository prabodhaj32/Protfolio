import React from 'react';

const educationData = [
  {
    title: 'Higher Diploma in Software Engineering',
    institution: 'National Institute of Business Management (NIBM)',
    duration: '2023 - Present',
    location: 'Kandy, Sri Lanka',
    side: 'left',
  },
  {
    title: ' Diploma in Software Engineering',
    institution: 'National Institute of Business Management (NIBM)',
    duration: '2022 - 2023',
    location: 'Kandy, Sri Lanka',
    side: 'right',
  },
  {
    title: '  Diploma in Information Technology',
    institution: 'ESOFT METRO CAMPUS,Kandy',
    duration: '2017 - 2018',
    location: 'Kandy, Sri Lanka',
    side: 'left',
  },
  {
    title: '  Diploma in English',
    institution: 'ESOFT METRO CAMPUS,Kandy',
    duration: '2017 - 2018',
    location: 'Kandy, Sri Lanka',
    side: 'right',
  },
  {
    title: 'Advanced Level',
    institution: 'K/Jinaraja Boys College',
    duration: '2017 - 2019',
    location: 'Gampola, Sri Lanka',
    side: 'left',
  },
  
];

const Education = () => {
  return (
    <div className="bg-[#0f0c29] text-white py-16 px-6">
      <h2 className="text-4xl font-bold mb-12 relative">
        Education
        <div className="w-24 h-1 bg-white mt-2 rounded-full" />
      </h2>

      <div className="relative max-w-3xl mx-auto min-h-[400px]">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-white z-0 top-0 bottom-0"></div>

        <div className="space-y-5">
          {educationData.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center w-full ${
                item.side === 'left' ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Content on one side */}
              <div className="w-1/2 p-6">
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.institution}</p>
                <p className="text-sm text-gray-400">{item.duration}</p>
                <p className="text-sm text-gray-400">{item.location}</p>
              </div>

              {/* Empty spacer for layout balance */}
              <div className="w-1/2"></div>

              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;