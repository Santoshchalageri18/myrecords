import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUser, FaHome, FaChartBar, FaFileUpload, FaSignOutAlt,  FaClipboardList, FaCogs, FaQuestionCircle } from 'react-icons/fa';
import swal from 'sweetalert';
import '../Styles/HomeDashboard.css';
import HomePage from './DashbordCompo/HomePage';
import MyMediRecords from './DashbordCompo/MyMediRecords';
import MyRecords from './DashbordCompo/MyRecords';
import Profile from './DashbordCompo/Profile';
import Graph from './DashbordCompo/Graph';

const HomeDashboard = () => {
  const [sidebarOpen] = useState(true);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const navigate = useNavigate();

  useEffect(() => {
    getUserInfo();
  }, []);

  

  const getUserInfo = () => {
    const token = localStorage.getItem('token');
    setLoading(true);

    axios.get('http://localhost:2000/get-user-info', {
      headers: {
        'token': token
      }
    })
    .then((res) => {
      setUser(res.data.user);
      setLoading(false);
    })
    .catch((err) => {
      setLoading(false);
      swal({
        text: err.response?.data?.errorMessage || "An error occurred",
        icon: "error",
        type: "error"
      });
      navigate('/login');
    });
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="dashboard-container">
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <img src="https://i.postimg.cc/SQWFvLcK/Screenshot-from-2024-05-21-15-09-26.png" alt="Logo" className="sidebar-logo" />
        </div>
        <div className="sidebar-menu">
          <a className={`sidebar-menu-item ${activeSection === 'overview' ? 'active' : ''}`} onClick={() => handleSectionChange('overview')}>
            <FaHome />
            <span>Overview</span>
          </a>
          <a className={`sidebar-menu-item ${activeSection === 'growth' ? 'active' : ''}`} onClick={() => handleSectionChange('growth')}>
            <FaChartBar />
            <span>Growth</span>
          </a>
          <a className={`sidebar-menu-item ${activeSection === 'customers' ? 'active' : ''}`} onClick={() => handleSectionChange('customers')}>
            <FaClipboardList />
            <span>Customers</span>
          </a>
          <a className={`sidebar-menu-item ${activeSection === 'reports' ? 'active' : ''}`} onClick={() => handleSectionChange('reports')}>
            <FaFileUpload />
            <span>Reports</span>
          </a>
          <a className={`sidebar-menu-item ${activeSection === 'support' ? 'active' : ''}`} onClick={() => handleSectionChange('support')}>
            <FaQuestionCircle />
            <span>Support</span>
          </a>
          <a className={`sidebar-menu-item ${activeSection === 'settings' ? 'active' : ''}`} onClick={() => handleSectionChange('settings')}>
            <FaCogs />
            <span>Settings</span>
          </a>
          <a className="sidebar-menu-item" onClick={() => {
            localStorage.removeItem('token');
            navigate('/login');
          }}>
            <FaSignOutAlt />
            <span>Log out</span>
          </a>
        </div>
      </div>
      <div className="main-content">
        <div className="top-bar">
          <input type="text" className="search-bar" placeholder="Search..." />
          <div className="profile-icon">
            <a onClick={() => handleSectionChange('profile')}><FaUser /></a>
          </div>
        </div>
        <div className="content">
          {loading ? (
            <div className="loading-spinner">
              <div className="spinner"></div>
              <p>Loading...</p>
            </div>
          ) : (
            <>
              {activeSection === 'overview' && <HomePage />}
              {activeSection === 'growth' && <Graph />}
              {activeSection === 'customers' && <MyMediRecords />}
              {activeSection === 'reports' && <MyRecords />}
              {activeSection === 'support' && <div>Support Section</div>}
              {activeSection === 'settings' && <div>Settings Section</div>}
              {activeSection === 'profile' && <Profile user={user} />}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;
