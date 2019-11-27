import React from 'react';

import Dashboard from '../UIComponent/Dashboard'
import AdminCard from './components/AdminCard';
import List from './components/List';

function ListPage() {
    return (
      <div>
        <main>
          <Dashboard />
          <AdminCard />
          <List />
        </main>
      </div>
    );
  }

  export default ListPage;