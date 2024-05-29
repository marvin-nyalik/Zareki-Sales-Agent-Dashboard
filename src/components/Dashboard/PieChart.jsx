import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import styles from '../../styles/PieChartComponent.module.css';

const data = [
  { name: 'Target', value: 400 },
  { name: 'Progress', value: 300 },
];

const COLORS = ['#0088FE', '#00C49F'];

const PieChartComponent = () => {
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
