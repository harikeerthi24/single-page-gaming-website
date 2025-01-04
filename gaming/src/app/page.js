"use client";
import React from "react";
import "./homepage.css";
import EastIcon from '@mui/icons-material/East';
import Image from "next/image";
import logo1 from "../Assets/sec1/logo1.png";
import logo3 from "../Assets/sec1/logo3.png";
import logo2 from "../Assets/sec1/logo2.png";

import line from "../Assets/sec2/Line 250.png";
import sec2logo1 from "../Assets/sec2/sec2logo1.svg";
import sec2logo2 from "../Assets/sec2/sec2logo2.svg";
import sec2logo3 from "../Assets/sec2/sec2logo3.svg";
import sec2logo4 from "../Assets/sec2/sec2logo4.svg";
import sec2logo5 from "../Assets/sec2/sec2logo5.svg";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-hero-section">
          <div className="home-content-container">
            <h1>
              Launch Your Game<br />on <span className="home-highlight">Web 3.0</span> in Minutes
            </h1>
            <p>
              We help game developers to launch their game on Web 3.0 by keeping blockchain complexities aside with WebWorld SDKs!
            </p>
            <div className="home-button-group">
              <button className="home-primary-button">Get Started <EastIcon sx={{ width: "20px" }} /></button>
              <button className="home-secondary-button">View Docs <EastIcon sx={{ width: "20px" }} /></button>
            </div>
          </div>

          <div className="home-backup">
            <h3>Backed by</h3>
            <div className="home-backup-imgs">
              <Image src={logo1} alt="logo1" />
              <Image src={logo3} alt="logo1" />
              <Image src={logo2} alt="logo1" />

            </div>

          </div>
        </div>

        <div className="home-sec2">
          <div className="home-sec2-inner">
            <div className="home-sec2-content">
              <Image src={line} alt="line"/>
              <p>LYNC provides a scalable infrastructure for launching web3 games, without hampering the <span>gaming experience.</span><br/>So that you can deliver the next big hit!</p>
              <Image src={line} alt="line"/>
            </div>
          </div>

          <div className="home-sec2-blockchain">
            <div className="home-sec2-blockchain-inner">
              <h1>Making blockchain gaming<br/>accessible to <span>everyone!</span></h1>
              <div className="home-sec2-imgs">
                <Image src={sec2logo2} alt="sec2logo1"/>
                <Image src={sec2logo3} alt="sec2logo1"/>  
                <Image src={sec2logo5} alt="sec2logo1"/>
                <Image src={sec2logo4} alt="sec2logo1"/>
                <Image src={sec2logo1} alt="sec2logo1"/>
              </div>

            </div>

          </div>
          


        </div>


      </div>

    </>

  );
}

export default Home;
