import { FaXTwitter } from "react-icons/fa6";
import { LuFacebook } from "react-icons/lu";

import React from 'react'
import "../Footer/footer.css"

// add modifications,css 

function Footer() {
  return (
    <footer className='pt-20 pr-7 ' style={{ backgroundColor: 'black', color: "white", paddingLeft: '160px', textAlign: 'center' }}>
      <div className='footerdiv flex flex-row justify-between '>
        <div>
          <h4> Company </h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h4> View Website in </h4>
          <ul>
            <li>English</li>
          </ul>
        </div>
        <div>
          <h4> Need Help ? </h4>
          <ul>
            <li>Visit Help Center</li>
            <li>Share Feedback</li>
          </ul>
        </div>
        <div className=''>
          <h4> Connent With us </h4>

          <div className="iconsdiv inline-block mr-3"> 
            <FaXTwitter style={{fontSize:"20px"}}/>
            <LuFacebook  style={{fontSize:"25px"}}/>
          </div>

        </div>



      </div>
        <div className="float-left">
          <h3>© 2024 STAR. All Rights Reserved.</h3>
        </div>
    </footer>
  )
}

export default Footer;
