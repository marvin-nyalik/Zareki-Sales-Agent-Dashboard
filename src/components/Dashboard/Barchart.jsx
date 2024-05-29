import React, { useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import styles from '../../styles/PieChartComponent.module.css';
import { MobileContext } from '../../context/MobileContext';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
];

const BarChartComponent = () => {
  const isMobile = useContext(MobileContext);

  return (
    <div className={styles.barChartContainer}>
      <BarChart width={isMobile ? 500 : 300} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="uv" fill="#8884d8" />
        <Bar dataKey="pv" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default BarChartComponent;
