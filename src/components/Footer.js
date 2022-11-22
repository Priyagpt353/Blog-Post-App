import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter,FaLinkedin } from "react-icons/fa";
import '../components/css/index.css';


const Footer = () => {
  return (
    <div>

    
      <div className='text-center p-3 mt-180' dark style={{ backgroundColor: '#000000e6', color: 'white',position:'relative' }}>
                <div>
                   <ul className='list'>
                    <li><FaFacebook /></li>
                    <li><FaInstagram /></li>
                    <li><FaTwitter /></li>
                    <li><FaLinkedin /></li>
                   </ul>
                   <hr/>
                </div>
                © 2022 Copyright
        
      </div>
    </div>
  );


}

export default Footer;