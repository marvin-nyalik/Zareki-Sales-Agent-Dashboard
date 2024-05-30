import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./Layout";
import styles from "../styles/Dashboard.module.css";
import TopCardMetrics from "./Dashboard/TopCardMetrics";
import Targets from "./Dashboard/Targets";
import SignUps from "./Dashboard/SignUps";
import UpcomingInv from "./Dashboard/UpcomingInv";
import { fetchCollections } from "../redux/collections/collectionSlice";
import { fetchInvoices } from "../redux/invoices/invoiceSlice";
import { fetchSchools } from "../redux/schools/schoolsSlice";
import Loading from "./Loading";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollections());
    dispatch(fetchSchools());
    dispatch(fetchInvoices());
  }, [dispatch]);

  const { schools, invoices, collections, loading, error } = useSelector(
    (state) => ({
      schools: state.schools.schools,
      invoices: state.invoices.invoices,
      collections: state.collections.collections,
      loading:
        state.collections.loading ||
        state.schools.loading ||
        state.invoices.loading,
      error:
        state.collections.error || state.schools.error || state.invoices.error,
    })
  );

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div>{error?.message}</div>;
  }

  return (
    <Layout>
      <section className={styles.container}>
        <div className="top-card-metrics">
          <TopCardMetrics
            schools={schools}
            collections={collections}
            invoices={invoices}
          />
        </div>

        <div className="targets">
          <Targets schools={schools} />
        </div>

        <div className="sign-ups">
          <SignUps schools={schools} />
        </div>

        <div className="upcoming-invoices">
          <UpcomingInv invoices={invoices} />
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
