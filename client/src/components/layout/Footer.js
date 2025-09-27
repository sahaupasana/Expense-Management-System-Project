import React from 'react'
import './Footer.css' // This will now find the CSS file in the same folder

const Footer = () => {
  return (
    <footer className="modern-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3 className="brand-name">Spenzo</h3>
          <p className="brand-tagline">Smart Expense Management</p>
        </div>
        
        <div className="footer-links">
          <div className="link-group">
            <h5>Product</h5>
            <a href="#">Features</a>
            <a href="#">Analytics</a>
            <a href="#">Reports</a>
          </div>
          <div className="link-group">
            <h5>Company</h5>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Support</a>
          </div>
          <div className="link-group">
            <h5>Legal</h5>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Security</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-divider"></div>
        <p className="copyright">
          © 2025 Spenzo Limited. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer