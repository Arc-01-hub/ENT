import './SideBar.css';

export const SideBar = () => {
  return (
    <div className="sidebar">
        <ul>
            <li><a href="/admin" className='active'>Dashboard</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/exams">Exams</a></li>
            <li><a href="/students">Students</a></li>
            <li><a href="/professors">Professors</a></li>
        </ul>
    </div>
  );
}