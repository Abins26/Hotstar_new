import { FaXTwitter } from "react-icons/fa6";
import { LuFacebook } from "react-icons/lu";

import React from 'react'
import "../Footer/footer.css"

// add modifications,css 

function Footer() {
  return (
    <footer
      className="pt-20 pr-24"
      style={{
        backgroundColor: "black",
        color: "white",
        paddingLeft: "160px",
        textAlign: "center",
      }}
    >
      <div className="footerdiv flex flex-row justify-between ">
        <div>
          <h4> Company </h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <div className="float-left mt-8 bg-black w-">
              <h3>© 2024 STAR. All Rights Reserved.</h3>
            </div>
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
        <div className="">
          <h4> Connent With us </h4>

          <div className="iconsdiv inline-block mr-3">
            <FaXTwitter style={{ fontSize: "20px" }} /> <LuFacebook style={{ fontSize: "25px" }} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;




