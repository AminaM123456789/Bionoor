import React from 'react';

function Footer() {
  return (
  
    <footer className="bg-dark text-white py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2023 My Website</p>
          </div>
          <div className="col-md-6">
            <p className="float-md-end">Contact Us: info@mywebsite.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
