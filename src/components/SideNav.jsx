import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="fixed top-0 ml-2">
      <Link to="/" className="flex flex-row items-center space-x-2">
        <i className="bx bx-md bxs-dashboard"></i>
        <p className="font-bold">Dashboard</p>
      </Link>
      <Link to="/schools" className="flex flex-row items-center space-x-2">
        <i className="bx bx-md bxs-school"></i>
        <p className="font-bold">Schools</p>
      </Link>
    </div>
  );
};

export default SideNav;
