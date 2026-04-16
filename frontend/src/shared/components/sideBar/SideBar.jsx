import { MdOutlineDashboard } from 'react-icons/md';
import './SideBar.css';
import { GiPapers } from 'react-icons/gi';
import { PiExamDuotone } from 'react-icons/pi';
import { FaUsers } from 'react-icons/fa';

export const SideBar = () => {
  return (
    <div className="sidebar">
        <ul>
            <li><a href="/admin" className='active'> <MdOutlineDashboard />Dashboard</a></li>
            <li><a href="/courses"><GiPapers /> Courses</a></li>
            <li><a href="/exams"><PiExamDuotone />Exams</a></li>
            <li><a href="/admin/users"><FaUsers />Users</a></li>
        </ul>
    </div>
  );
}