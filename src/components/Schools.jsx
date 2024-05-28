import Layout from "./Layout";
import { Link } from "react-router-dom";

const Schools = () => {
  return (
    <>
      <Layout>
        <div>
          All Schools List
          <Link to={`/schools/cherry`}>Cherry Primary</Link>
        </div>
      </Layout>
    </>
  )
}

export default Schools;
