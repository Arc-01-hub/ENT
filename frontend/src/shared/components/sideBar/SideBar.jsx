import { MdOutlineDashboard } from 'react-icons/md';
import './SideBar.css';
import { GiPapers } from 'react-icons/gi';
import { PiExamDuotone } from 'react-icons/pi';
import { FaUsers } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export const SideBar = () => {
  return (
    <div className="sidebar">
        <ul>
            <li><NavLink to="/admin" > <MdOutlineDashboard />Dashboard</NavLink></li>
            <li><NavLink to="/courses"><GiPapers /> Courses</NavLink></li>
            <li><NavLink to="/exams"><PiExamDuotone />Exams</NavLink></li>
            <li><NavLink to="/admin/users"><FaUsers />Users</NavLink></li>
        </ul>
    </div>
  );
}