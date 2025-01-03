"use client";
import React from "react";
import "./homepage.css";
import EastIcon from '@mui/icons-material/East';
import Image from "next/image";
import logo1 from "../Assets/sec1/logo1.png"
import logo3 from "../Assets/sec1/logo3.png"
import logo2 from "../Assets/sec1/logo2.png"

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
              <p>LYNC provides a scalable infrastructure for launching web3 games, without hampering the <span>gaming experience.</span><br/>So that you can deliver the next big hit!</p>
            </div>
          </div>

          <div className="home-sec2-blockchain">
            <div className="home-sec2-blockchain-inner">
              <h1>Making blockchain gaming<br/>accessible to <span>everyone!</span></h1>

            </div>

          </div>
          


        </div>


      </div>

    </>

  );
}

export default Home;
