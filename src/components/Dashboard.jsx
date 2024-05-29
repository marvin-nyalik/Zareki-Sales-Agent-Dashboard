import Layout from "./Layout";
import styles from '../styles/Dashboard.module.css';
import TopCardMetrics from "./Dashboard/TopCardMetrics";
import Targets from "./Dashboard/Targets";
import SignUps from "./Dashboard/SignUps";
import UpcomingInv from "./Dashboard/UpcomingInv";

const Dashboard = () => {
  return (
    <>
      <Layout>
          <section className={styles.container}>
            <div className="top-card-metrics">
              <TopCardMetrics />
            </div>

            <div className="targets">
              <Targets/>
            </div>

            <div className="sign-ups">
              <SignUps />
            </div>

            <div className="upcoming-invoices">
              <UpcomingInv />
            </div>

          </section>
      </Layout>
    </>
  )
}

export default Dashboard;
