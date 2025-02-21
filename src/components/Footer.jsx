import React from "react";
import { Link } from 'react-router-dom';

import '../assets/styles/components/Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; 2025 Charlotte Gale. All rights reserved.</p>
                <div className="footer-links">
                    <Link to="/privacy-policy">Privacy Policy</Link> |
                    <Link to="/terms-of-service">Terms of Service</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer