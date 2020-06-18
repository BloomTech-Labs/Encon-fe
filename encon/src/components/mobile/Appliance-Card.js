import React from 'react';
import '../../styles/mobile/Appliance-Card.scss';
export const ApplianceCard = (props) => {
  return (
    <div className='applianceContainer'>
      <div className='imageContainer'>
        <img
          src={require('../../assets/ElectronicsFolder/Computer Desktop.png')}
          alt='an appliance'
        />
      </div>
      <div className='applianceInfo'>
        <h2 className='applianceTitle'>Computer</h2>
        <div className='outputContainer'>
          <div className='estCost'>
            <h4>Estimated Cost</h4>
            <p>$100</p>
          </div>

          <div className='energyOutput'>
            <h4>Avg.Energy Output</h4>
            <p>100kwh</p>
          </div>
        </div>
      </div>
    </div>
  );
};
