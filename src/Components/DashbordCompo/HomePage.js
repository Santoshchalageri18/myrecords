import React from 'react';

const HomePage = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <img
        src="https://i.postimg.cc/rpDbSP7q/Oracle-Brand-Voice-SAS-Sees-The-Next-Tests-For-Data-Driven-Problem-Solvers-Speed-And-Cloud.jpg"
        alt="Background"
        style={{ position: 'absolute', top: 0, left: '-30%', width: '150%', height: '100%', objectFit: 'cover' }}
      />
      <div style={{ position: 'fixed', zIndex: 1, textAlign: 'center', color: 'black', padding: '20px' }}>
        <h1>Welcome to MyMediRecords</h1>
      </div>
    </div>
  );
};

export default HomePage;
