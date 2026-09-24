import React from 'react';


interface ProgressBarProps {
  count: string;
  description: string;
}


const ProgressBar: React.FC<ProgressBarProps> = ({ count, description }) => {
  return (
    <div className='text-center'>
      <h3 className='text-orange-400 heading3' data-count>{count}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProgressBar;