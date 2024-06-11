import React from 'react';

const Graph = () => {
  return (
    <div className="graph-dashboard-container" style={{ overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f5f7fa' }}>
      <iframe
        src="http://54.84.119.128:3000/public/dashboard/8e9ae68b-140e-4f7e-97b9-f02af96e0c61?category=&testname="
        style={{ width: '200%', height: '90%', border: 'none', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'white' }}
        title="Graph Dashboard"
      ></iframe>
    </div>
  );
};

export default Graph;
