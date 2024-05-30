import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import styles from '../../styles/PieChartComponent.module.css';

const COLORS = ['#0088FE', '#00C49F'];

const PieChartComponent = ({ target, progress }) => {
  const data = [
    { name: 'Target', value: target },
    { name: 'Progress', value: progress },
  ];

  return (
    <div className={styles.pieChartContainer}>
      <PieChart width={350} height={200}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend align="center" />
      </PieChart>
    </div>
  );
};

export default PieChartComponent;
