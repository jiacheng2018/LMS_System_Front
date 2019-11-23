import React from 'react';

import Dashboard from '../UI/dashboard/Dashboard';
import SignIn from '../login/SignIn';

function Login() {
    return (
      <div>
        <main>
          <Dashboard />
          <SignIn />
        </main>
      </div>
    );
  }

  export default Login;