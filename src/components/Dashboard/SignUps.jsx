import React, { useContext } from "react";
import BarChartComponent from "./Barchart";
import styles from "../../styles/Targets.module.css";
import { MobileContext } from "../../context/MobileContext";
import { schoolsByTypePerProduct } from "./helpers/helpers";

const SignUps = ({ schools }) => {
  const isMobile = useContext(MobileContext);
  const productBySchoolTypeCount = schoolsByTypePerProduct(schools);

  return (
    <>
      <div className="mb-2 text-2xl text-blue-400">Sign Ups</div>

      <div className={isMobile ? styles.mobileCont : styles.container}>
        <div className="pie-div">
          <p className="text-center font-semibold">Analytics</p>
          <BarChartComponent
            product={productBySchoolTypeCount["Zeraki Analytics"]}
          />
        </div>
        <div className="pie-div">
          <p className="text-center font-semibold">Finance</p>
          <BarChartComponent
            product={productBySchoolTypeCount["Zeraki Finance"]}
          />
        </div>
        <div className="pie-div">
          <p className="text-center font-semibold">Timetable</p>
          <BarChartComponent
            product={productBySchoolTypeCount["Zeraki Timetable"]}
          />
        </div>
      </div>
    </>
  );
};

export default SignUps;
