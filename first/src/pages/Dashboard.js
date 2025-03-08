import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/invoices">Invoices</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Dashboard;
