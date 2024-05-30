import React, { useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import styles from '../../styles/PieChartComponent.module.css';
import { MobileContext } from '../../context/MobileContext';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

const BarChartComponent = ({ product }) => {
  const isMobile = useContext(MobileContext);

  if (!product) {
    return <div>No data available</div>;
  }

  const data = Object.keys(product).map((schoolType, index) => ({
    schoolType,
    count: product[schoolType],
    fill: COLORS[index % COLORS.length],
  }));

  return (
    <div className={styles.barChartContainer}>
      <BarChart width={isMobile ? 400 : 300} height={300} data={data} barSize={30}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="schoolType" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default BarChartComponent;
