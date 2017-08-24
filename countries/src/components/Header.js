import React from 'react';

function Header({ logo }) {
  return (
    <div>
      <div className="app-header">
        {/* <img src={logo} className="app-logo" alt="logo" /> */}
        <h1>Simple Country App</h1>
      </div>
      <div className="container">
        <p className="app-intro">
          Lista los paises que has visitado o quisieras visitar!
        </p>
      </div>
    </div>
  );
}

export default Header;
