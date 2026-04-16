import { FaAngleDown } from 'react-icons/fa';
import './HeaderDash.css';
import { PiStudent } from 'react-icons/pi';
export const HeaderDash = () => {
  return (
    <div className="header-dash">
        <div className="app-name">
            <span><PiStudent /></span>
            <h3>E.N.T</h3>
        </div>
        <div className='profile'>
            <div className='profile_info'>
              <span>John Doe</span>
              <h6>Admin</h6>
            </div>
            <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg" alt="Profile" className="profile-pic" />
            <button className='drop_down_profile'><FaAngleDown /></button>
        </div>
    </div>
  );
}   