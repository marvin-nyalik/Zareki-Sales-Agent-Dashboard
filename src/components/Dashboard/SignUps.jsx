import React, { useContext } from 'react';
import BarChartComponent from './Barchart';
import styles from '../../styles/Targets.module.css';
import { MobileContext } from '../../context/MobileContext';

const SignUps = () => {
  const isMobile = useContext(MobileContext);

  return (
    <>
      <div className="mb-2 text-2xl text-blue-400">Sign Ups</div>

      <div className={isMobile ? styles.mobileCont : styles.container}>
        <div className="pie-div">
          <p className='text-center font-semibold'>Analytics</p>
          <BarChartComponent />
        </div>
        <div className="pie-div">
          <p className='text-center font-semibold'>Finance</p>
          <BarChartComponent />
        </div>
        <div className="pie-div">
          <p className='text-center font-semibold'>Timetable</p>
          <BarChartComponent />
        </div>
      </div>
    </>
  );
}

export default SignUps;
