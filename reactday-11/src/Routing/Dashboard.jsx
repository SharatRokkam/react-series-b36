import { Routes, Route, Link } from "react-router-dom";
import DashboardProfile from "./DashboardProfile";
import DashboardSett from "./DashboardSett";

const Dashboard = () => {
  return (
    <>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li>
            <Link to="profile">Profile</Link>
          </li>
          <li>
            <Link to="settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <hr />

      <Routes>
        <Route path="profile" element={<DashboardProfile />} />
        <Route path="settings" element={<DashboardSett />} />
      </Routes>
    </>
  );
};

export default Dashboard;
