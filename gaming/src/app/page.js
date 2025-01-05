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

import dimond from "../Assets/sec3/OBJECTS.png";
import star from "../Assets/sec3/Vector.png";

import sec4pic from "../Assets/sec4/Rectangle.png";




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
              <Image src={line} alt="line" />
              <p>LYNC provides a scalable infrastructure for launching web3 games, without hampering the <span>gaming experience.</span><br />So that you can deliver the next big hit!</p>
              <Image src={line} alt="line" />
            </div>
          </div>

          <div className="home-sec2-blockchain">
            <div className="home-sec2-blockchain-inner">
              <h1>Making blockchain gaming<br />accessible to <span>everyone!</span></h1>
              <div className="home-sec2-imgs">
                <Image src={sec2logo2} alt="sec2logo1" />
                <Image src={sec2logo3} alt="sec2logo1" />
                <Image src={sec2logo5} alt="sec2logo1" />
                <Image src={sec2logo4} alt="sec2logo1" />
                <Image src={sec2logo1} alt="sec2logo1" />
              </div>

            </div>

          </div>



        </div>

        <div className="home-sec3">

          <div className="home-sec3-inner">
            <div className="home-sec3-heading">
              <h1>Power Up Your Web3 Game Development, With <span>LYNC SDKs</span></h1>
              <p>LYNC SDKs can be easily integrated into game engines like Unity 3D and Unreal Engine in a few clicks.</p>
            </div>

            <div className="containerbody">
              <div className="container">
                <h1>Don't Worry about the <span className="chighlight">Web3</span> Complexities</h1>
                <ul>
                  <li><span className="icon"><Image src={star} alt="star" /></span>&ensp; Save 9-12 months of development time</li>
                  <li><span className="icon"><Image src={star} alt="star" /></span>&ensp;Focus completely on Game Dev and Mechanics</li>
                  <li><span className="icon"><Image src={star} alt="star" /></span>&ensp;Save Up to $500K+ on Salaries & Smart Contract Auditing</li>
                  <li><span className="icon"><Image src={star} alt="star" /></span>&ensp;Go Cross-Chain in a few clicks</li>
                </ul>
                <Image src={dimond} alt="Ethereum Icon" className="icon-eth" />
              </div>
            </div>


          </div>

        </div>

        <div className="home-sec4">
          <div className="home-sec4-inner">
            <h1>Product <span>Suite</span></h1>
            <div className="home-sec3-cards">
              <div className="home-sec3-card-item">
                <Image src={sec4pic} alt="sec4pic" />
                <h2>LYNC Wallet SDK</h2>
                <p>Empowering developers to integrate
                  account abstraction in their game,
                  dapp, metaverse and more in
                  minutes.</p>

              </div>

            </div>

          </div>

        </div>


      </div>

    </>

  );
}

export default Home;
