import React, { useContext } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import styles from "../../styles/PieChartComponent.module.css";
import { MobileContext } from "../../context/MobileContext";

const COLORS = ["#14b8b8", "#1460b8"];

const PieChartComponent = ({ target, progress }) => {
  const isMobile = useContext(MobileContext);
  const data = [
    { name: "Target", value: target },
    { name: "Progress", value: progress },
  ];

  return (
    <div className={styles.pieChartContainer}>
      <PieChart width={isMobile ? 500 : 350} height={isMobile ? 230 : 200} className="rounded-xl shadow-lg mb-3">
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
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
