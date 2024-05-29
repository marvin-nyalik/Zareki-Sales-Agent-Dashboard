import React, { useContext } from 'react';
import PieChartComponent from './PieChart';
import styles from '../../styles/Targets.module.css';
import { MobileContext } from '../../context/MobileContext';

const Targets = () => {
  const isMobile = useContext(MobileContext);

  return (
    <>
    <div className="mb-2 text-2xl text-blue-400">Targets</div>

    <div className={isMobile ? styles['mobile-cont'] : styles.container}>
      <div className="pie-div flex flex-col justify-center">
        <p className='text-center font-semibold'>Analytics</p>
        <PieChartComponent />
      </div>
      <div className="pie-div flex flex-col justify-center">
        <p className='text-center font-semibold'>Finance</p>
        <PieChartComponent />
      </div>
      <div className="pie-div flex flex-col justify-center">
        <p className='text-center font-semibold'>Timetable</p>
        <PieChartComponent />
      </div>
    </div>
    </>
  )
}

export default Targets;
