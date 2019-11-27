import React from 'react';

import StudentSearchBar from './components/StudentSearchBar'; 
import Dashboard from '../UIComponent/Dashboard';
import StudentEdit from './components/StudentEdit';

export default function StudentList() {
    return (
      <div>
        <main>
          <Dashboard />
          <StudentEdit />
        </main>
      </div>
    );
  }


