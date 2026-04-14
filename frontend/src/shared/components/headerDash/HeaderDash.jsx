import { FaAngleDown } from 'react-icons/fa';
import './HeaderDash.css';
export const HeaderDash = () => {
  return (
    <div className="header-dash">
        <div className="app-name">
            <span>Admin</span>
            <h3>E.N.T</h3>
        </div>
        <div className='profile'>
            <span>John Doe</span>
            <img src="https://via.placeholder.com/40" alt="Profile" className="profile-pic" />
            <FaAngleDown />
        </div>
    </div>
  );
}   