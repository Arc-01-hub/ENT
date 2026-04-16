import { Outlet, useLocation } from 'react-router-dom';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { HeaderDash } from '../../shared/components/headerDash/HeaderDash';
import { SideBar } from '../../shared/components/sideBar/SideBar';
import './Dashboard.css';

const Dashboard = () => {
  const location = useLocation();
  const isOnAdmin = location.pathname === '/admin';

  const chartData = [
    { month: 'Jan', users: 400, courses: 240, exams: 120 },
    { month: 'Feb', users: 520, courses: 340, exams: 180 },
    { month: 'Mar', users: 680, courses: 460, exams: 230 },
    { month: 'Apr', users: 750, courses: 580, exams: 290 },
    { month: 'May', users: 920, courses: 720, exams: 380 },
    { month: 'Jun', users: 1100, courses: 850, exams: 450 },
  ];

  const roleData = [
    { name: 'Admin', value: 45, color: '#3b82f6' },
    { name: 'Professor', value: 180, color: '#8b5cf6' },
    { name: 'Student', value: 725, color: '#10b981' },
  ];

  const stats = [
    { label: 'Total Users', value: '950', icon: '👥', color: '#3b82f6' },
    { label: 'Active Courses', value: '48', icon: '📚', color: '#8b5cf6' },
    { label: 'Scheduled Exams', value: '12', icon: '📝', color: '#10b981' },
    { label: 'Completion Rate', value: '87%', icon: '✓', color: '#f59e0b' },
  ];

  return (
    <>
      <HeaderDash />
      <section className="dashboard-container">
        <SideBar />
        <div className="dashboard-content">
          {isOnAdmin ? (
            <div className="dashboard-main">
              <div className="stats-section">
                <h2>Overview</h2>
                <div className="stats-grid">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="stat-card" style={{ borderLeftColor: stat.color }}>
                      <span className="stat-icon">{stat.icon}</span>
                      <div className="stat-content">
                        <p className="stat-label">{stat.label}</p>
                        <p className="stat-value">{stat.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="charts-section">
                <div className="chart-card">
                  <h3>Activity Trend</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} />
                      <Line type="monotone" dataKey="courses" stroke="#8b5cf6" strokeWidth={2} />
                      <Line type="monotone" dataKey="exams" stroke="#10b981" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="chart-card">
                  <h3>User Distribution</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie data={roleData} cx="50%" cy="50%" labelLine={false} label={({ name, value }) => `${name}: ${value}`} outerRadius={100} fill="#8884d8" dataKey="value">
                        {roleData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="chart-card full-width">
                <h3>Monthly Performance</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="users" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="courses" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="exams" fill="#10b981" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          ) : (
            <Outlet />
          )}
        </div>
      </section>
    </>
  );
};


export default Dashboard;
