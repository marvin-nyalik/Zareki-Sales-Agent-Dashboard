import React, { useContext } from "react";
import Card from "./Card";
import styles from "../../styles/Metrics.module.css";
import { MobileContext } from "../../context/MobileContext";
import {
  calculateRevenuePerInvoiceItem,
  countProductOccurrences,
} from "./helpers/helpers";

const TopCardMetrics = ({ invoices, collections, schools }) => {
  const isMobile = useContext(MobileContext);
  const totalSignUps = schools.reduce(
    (sum, school) => sum + school.products.length,
    0
  );

  const totalRevenue = invoices.reduce((sum, invoice) => {
    return sum + invoice.amount;
  }, 0);
  const revenuePerInvoiceItem = calculateRevenuePerInvoiceItem(invoices);
  const bouncedCheques = collections.filter(
    (col) => col.status === "Bounced"
  ).length;
  const productCounts = countProductOccurrences(schools);

  return (
    <div>
      <div className="mb-2 text-2xl text-blue-400">Top Metrics</div>
      <div className={isMobile ? styles["mobile-cont"] : styles.container}>
        {/* Collections card */}
        <Card label={"Collections"} count={collections.length} maxValue={100} />

        {/* Sign Ups Card */}
        <Card
          label={"Sign Ups"}
          count={totalSignUps}
          details={productCounts}
          maxValue={50}
        />

        {/* Revenue Card */}
        <Card
          label={"Revenue"}
          count={totalRevenue}
          details={revenuePerInvoiceItem}
          maxValue={500000}
        />

        {/* Bounced Cheques card */}
        <Card label={"Bounced Cheques"} count={bouncedCheques} maxValue={30} />
      </div>
    </div>
  );
};

export default TopCardMetrics;
