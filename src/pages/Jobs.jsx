import React from 'react';

const Jobs = () => {
  const jobList = [
{id :1, title: 'internship program', location: 'Dhaka', type: 'Internship'}
  ];

  return (
    <div className="pt-28 pb-20 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-blue-600 font-bold mb-2">Jobs</h3>
        <h2 className="text-4xl font-extrabold text-black mb-6">Our Jobs for You</h2>
        
        {jobList.length > 0 ? (
          <div className="grid gap-4 mt-10">
            {jobList.map((job) => (
              <div key={job.id} className="bg-white p-6 shadow-md flex justify-between items-center border-l-4 border-blue-600">
                <div className="text-left">
                  <h4 className="text-xl font-bold">{job.title}</h4>
                  <p className="text-gray-500">{job.location} | {job.type}</p>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Apply Now</button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xl text-gray-500 mt-10 italic">No jobs available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Jobs;