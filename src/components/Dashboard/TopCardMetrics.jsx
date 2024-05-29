import React, { useContext } from 'react';
import Card from './Card';
import styles from '../../styles/Metrics.module.css';
import { MobileContext } from '../../context/MobileContext';

const TopCardMetrics = () => {
  const isMobile = useContext(MobileContext);

  return (
    <div>
    <div className="mb-2 text-2xl text-blue-400">Top Metrics</div>
        <div className={isMobile ? styles['mobile-cont'] : styles.container}>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}

export default TopCardMetrics;
