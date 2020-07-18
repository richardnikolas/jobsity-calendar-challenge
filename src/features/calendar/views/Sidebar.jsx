import React from 'react';
import { MdControlPoint } from 'react-icons/md';
import './styles/Sidebar.css';

const Sidebar = function() {
  return (
    <section className="sidebar-section">
      <div className="sidebar">
        <button className="btn-new-reminder">
          <div className="btn-info">
            <i className="btn-icon"><MdControlPoint /></i>
            <p>New Reminder</p>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Sidebar;