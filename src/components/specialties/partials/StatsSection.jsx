import React from 'react';
import CountUp from 'react-countup';

// Reusable component for each individual statistic
const StatItem = ({ number, isStatic = false, suffix, label }) => {
  const statStyle = {
    textAlign: 'center',
    color: 'white',
    padding: '20px',
    flex: 1,
  };

  const numberStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  };

  const labelStyle = {
    fontSize: '14px',
    letterSpacing: '1.5px',
    marginTop: '8px',
    textTransform: 'uppercase',
    fontFamily: 'sans-serif',
  };

  return (
    <div style={statStyle}>
      <div style={numberStyle}>
        {isStatic ? (
          number
        ) : (
          <CountUp end={number} duration={2.75} enableScrollSpy scrollSpyOnce />
        )}
        {suffix && <span className='opacity-75'>{suffix}</span>}
      </div>
      <div style={labelStyle}>{label}</div>
    </div>
  );
};

// Main section component that holds all the stats
const StatsSection = () => {
  return (
    <div className="stats-section">
        <div className='container'>
            <div className="stats-wrapper">
                <StatItem number={200000} suffix=" +" label="Lives Touched" />
                <StatItem number={5000} suffix=" +" label="Day Care Surgeries" />
                <StatItem number="NO.1" isStatic={true} label="Gastro & Bariatrics" />
            </div>
        </div>
    </div>
  );
};

export default StatsSection;