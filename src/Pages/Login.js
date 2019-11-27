import React from 'react';

import Dashboard from '../UIComponent/Dashboard'
import SignIn from '../Pages/SignIn'

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