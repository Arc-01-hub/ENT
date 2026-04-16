import { Outlet } from 'react-router-dom';
import { HeaderDash } from '../../shared/components/headerDash/HeaderDash';
import { SideBar } from '../../shared/components/sideBar/SideBar';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <>
      <HeaderDash/>
      
      <section className="dashboard-container">
        <SideBar/>
        <div className="dashboard-content">
          <Outlet/>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
