import React from 'react';
import '../../styles/mobile/Energy-Location.scss';
export const EnergyLocation = () => {
  return (
    <div className='energyLocation'>
      <div className='energyContainer'>
        <h2>My Energy</h2>
      </div>

      <div className='locationContainer'>
        <h2>
          Location: 1120 <a href='/'>(change)</a>{' '}
        </h2>
      </div>
    </div>
  );
};
