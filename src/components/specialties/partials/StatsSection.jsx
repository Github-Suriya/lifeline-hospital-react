import React from 'react';
import CountUp from 'react-countup';

const StatItem = ({ number, isStatic = false, suffix, label, style = {}, ...rest }) => {
  const statStyle = {
    textAlign: 'center',
    color: 'white',
    padding: '40px 20px',
    flex: 1,
    ...style,
  };

  const numberStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  };

  const labelStyle = {
    fontSize: '20px',
    color: '#000',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    fontFamily: 'sans-serif',
  };

  return (
    <div style={statStyle} {...rest}>
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

const StatsSection = () => {
  return (
    <div className="stats-section">
        <div className='container'>
            <div className="stats-wrapper">
                <StatItem data-sal="fade" data-sal-duration="1000" number={200000} suffix=" +" label="Lives Touched" />
                <StatItem data-sal="fade" data-sal-duration="1000" data-sal-delay="200" number={5000} suffix=" +" label="Day Care Surgeries" style={{ backgroundColor: 'var(--primary-dark-color)' }} />
                <StatItem data-sal="fade" data-sal-duration="1000" data-sal-delay="400" number="NO.1" isStatic={true} label="Gastro & Bariatrics" />
            </div>
        </div>
    </div>
  );
};

export default StatsSection;