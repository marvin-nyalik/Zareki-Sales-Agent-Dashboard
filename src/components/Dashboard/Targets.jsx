import React, { useContext } from "react";
import PieChartComponent from "./PieChart";
import styles from "../../styles/Targets.module.css";
import { MobileContext } from "../../context/MobileContext";
import {
  analytics_target,
  finance_target,
  timetable_target,
} from "./helpers/constants";
import { countProductOccurrences } from "./helpers/helpers";

const Targets = ({ schools }) => {
  const isMobile = useContext(MobileContext);
  const achieved_targets = countProductOccurrences(schools);

  return (
    <>
      <div className="mb-2 text-2xl text-blue-400">Targets Progress</div>
      <div className={isMobile ? styles["mobile-cont"] : styles.container}>
        <div className="pie-div flex flex-col justify-center">
          <p className="text-center font-semibold">Zeraki Analytics</p>
          <PieChartComponent
            target={analytics_target}
            progress={achieved_targets["Zeraki Analytics"] || 0}
          />
        </div>

        <div className="pie-div flex flex-col justify-center">
          <p className="text-center font-semibold">Zeraki Finance</p>
          <PieChartComponent
            target={finance_target}
            progress={achieved_targets["Zeraki Finance"] || 0}
          />
        </div>

        <div className="pie-div flex flex-col justify-center">
          <p className="text-center font-semibold">Zeraki Timetable</p>
          <PieChartComponent
            target={timetable_target}
            progress={achieved_targets["Zeraki Timetable"] || 0}
          />
        </div>
      </div>
    </>
  );
};

export default Targets;
