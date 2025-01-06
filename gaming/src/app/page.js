"use client";
import React from "react";
import "./homepage.css";
import Navbar from "@/Components/Navbar/Navbar";
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

import sec5logo1 from "../Assets/sec5/image 55.png";
import sec5logo2 from "../Assets/sec5/image 69.png";
import sec5logo3 from "../Assets/sec5/image 92.png";
import sec5logo4 from "../Assets/sec5/image 93.png";
import sec5logo5 from "../Assets/sec5/Layer 1.png";
import sec5logo6 from "../Assets/sec5/2.png";
import sec5logo7 from "../Assets/sec5/image 66.png";
import sec5logo8 from "../Assets/sec5/image 72.png";

import sec6logo from "../Assets/sec6/image 94.png";

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import sec7 from "../Assets/sec6/Join Discord.png";

import sec8logo1 from "../Assets/sec8/1.png";
import sec8logo2 from "../Assets/sec8/2.png";
import sec8logo3 from "../Assets/sec8/3.png";
import sec8logo4 from "../Assets/sec8/4.png";
import sec8logo5 from "../Assets/sec8/5.png";
import sec8logo6 from "../Assets/sec8/6.png";
import sec8logo7 from "../Assets/sec8/7.png";
import sec8logo8 from "../Assets/sec8/8.png";


function Home() {
  return (
    <>
    <Navbar/>
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
                <h1>Don&apos;t Worry about the <span className="chighlight">Web3</span> Complexities</h1>
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

              <div className="home-sec3-card-item">
                <Image src={sec4pic} alt="sec4pic" />
                <h2>LYNC Wallet SDK</h2>
                <p>Empowering developers to integrate
                  account abstraction in their game,
                  dapp, metaverse and more in
                  minutes.</p>

              </div>

              <div className="home-sec3-card-item">
                <Image src={sec4pic} alt="sec4pic" />
                <h2>LYNC Wallet SDK</h2>
                <p>Empowering developers to integrate
                  account abstraction in their game,
                  dapp, metaverse and more in
                  minutes.</p>

              </div>

              <div className="home-sec3-card-item">
                <Image src={sec4pic} alt="sec4pic" />
                <h2>LYNC Wallet SDK</h2>
                <p>Empowering developers to integrate
                  account abstraction in their game,
                  dapp, metaverse and more in
                  minutes.</p>

              </div>

              <div className="home-sec3-card-item">
                <Image src={sec4pic} alt="sec4pic" />
                <h2>LYNC Wallet SDK</h2>
                <p>Empowering developers to integrate
                  account abstraction in their game,
                  dapp, metaverse and more in
                  minutes.</p>

              </div>

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

        <div className="home-sec5">
          <div className="home-sec5-inner">
            <h1>With LYNC, build on your <br /><span>favorite chain.</span></h1>
            <div className="home-sec5-imgcon1">

              <Image src={sec5logo2} alt="sec5logo1" />
              <Image src={sec5logo4} alt="sec5logo1" />
              <Image src={sec5logo3} alt="sec5logo1" />
              <Image src={sec5logo1} alt="sec5logo1" />

            </div>

            <div className="home-sec5-imgcon1">
              <Image src={sec5logo5} alt="sec5logo1" />
              <Image src={sec5logo7} alt="sec5logo1" />
              <Image src={sec5logo8} alt="sec5logo1" />
              <Image src={sec5logo6} alt="sec5logo1" />

            </div>

          </div>

        </div>

        <div className="home-sec6">
          <div className="home-sec6-inner">
            <h1>From our <span>Blog</span></h1>
            <p>Level Up Your Web3 Gaming Experience: Explore Our Blog for Insights, Tips, and Innovations in Gaming SDKs!</p>
            <div className="home-sec6-cards">
              <div className="home-sec6-cards-arrow">
                <ChevronLeftIcon className="icon" />
              </div>


              <div className="home-sec6-card-item">
                <Image src={sec6logo} alt="sec6logo" />
                <h1>LYNC teamed up with Astar Network to effortlessly bring the next billion gamers into Web3 🎮</h1>
                <p>LYNC joins forces with Astar Network to allow game developers and studios to launch games in just a few minutes using LYNC&apos;s SDK and infrastructure.</p>
                <button>Read more</button>
              </div>

              <div className="home-sec6-card-item item2">
                <Image src={sec6logo} alt="sec6logo" />
                <h1>LYNC teamed up with Astar Network to effortlessly bring the next billion gamers into Web3 🎮</h1>
                <p>LYNC joins forces with Astar Network to allow game developers and studios to launch games in just a few minutes using LYNC&apos;s SDK and infrastructure.</p>
                <button>Read more</button>
              </div>

              <div className="home-sec6-card-item item1">
                <Image src={sec6logo} alt="sec6logo" />
                <h1>LYNC teamed up with Astar Network to effortlessly bring the next billion gamers into Web3 🎮</h1>
                <p>LYNC joins forces with Astar Network to allow game developers and studios to launch games in just a few minutes using LYNC&apos;s SDK and infrastructure.</p>
                <button>Read more</button>
              </div>

              <div className="home-sec6-cards-arrow">
                <ChevronRightIcon className="icon" />
              </div>

            </div>
          </div>

        </div>

        <div className="home-sec6">
          <div className="home-sec6-inner">
            <h1>Valuable  <span>Reviews</span></h1>
            <div className="home-sec6-cards">
              <div className="home-sec6-cards-arrow">
                <ChevronLeftIcon className="icon" />
              </div>


              <div className="home-sec6-card-item sec7">
                <p>Absolutely blown away by the capabilities of this company&apos;s Web3 gaming SDK! Integrating it into my project was seamless, and the innovative tools provided took my game to the next level. The support team was incredibly responsive and helpful throughout the process. Highly recommended!</p>
                <div className="home-sec7-inner">
                  <div className="home-sec7-circle">
                  </div>
                  <div className="home-sec7-info">
                    <h1>Alex George</h1>
                    <p>CEO, Polygon</p>
                  </div>
                </div>
              </div>

              <div className="home-sec6-card-item item2 sec7">
              <p>Absolutely blown away by the capabilities of this company&apos;s Web3 gaming SDK! Integrating it into my project was seamless, and the innovative tools provided took my game to the next level. The support team was incredibly responsive and helpful throughout the process. Highly recommended!</p>
                <div className="home-sec7-inner">
                  <div className="home-sec7-circle">
                  </div>
                  <div className="home-sec7-info">
                    <h1>Alex George</h1>
                    <p>CEO, Polygon</p>
                  </div>
                </div>
              </div>

              <div className="home-sec6-card-item item1 sec7">
              <p>Absolutely blown away by the capabilities of this company&apos;s Web3 gaming SDK! Integrating it into my project was seamless, and the innovative tools provided took my game to the next level. The support team was incredibly responsive and helpful throughout the process. Highly recommended!</p>
                <div className="home-sec7-inner">
                  <div className="home-sec7-circle">
                  </div>
                  <div className="home-sec7-info">
                    <h1>Alex George</h1>
                    <p>CEO, Polygon</p>
                  </div>
                </div>
              </div>

              <div className="home-sec6-cards-arrow">
                <ChevronRightIcon className="icon" />
              </div>

            </div>
          </div>

        </div>

        <div className="home-sec6 sec7">
          <div className="home-sec6-inner">
            <Image src={sec7} alt="sec7"/>

          </div>

        </div>

        <div className="home-sec8">
          <div className="home-sec8-inner">
           <h1>Our <span>Believers and Partners</span></h1>
           <div className="home-sec8-logos">
            <div className="home-sec8-logo-item">
              <Image src={sec8logo1} alt="sec8logo1"/>
            </div>
            <div className="home-sec8-logo-item">
              <Image src={sec8logo2} alt="sec8logo1"/>
            </div>
            <div className="home-sec8-logo-item">
              <Image src={sec8logo3} alt="sec8logo1"/>
            </div>
            <div className="home-sec8-logo-item">
              <Image src={sec8logo4} alt="sec8logo1"/>
            </div>
            <div className="home-sec8-logo-item">
              <Image src={sec8logo5} alt="sec8logo1"/>
            </div>
            <div className="home-sec8-logo-item">
              <Image src={sec8logo6} alt="sec8logo1"/>
            </div>
            <div className="home-sec8-logo-item">
              <Image src={sec8logo7} alt="sec8logo1"/>
            </div>
            <div className="home-sec8-logo-item">
              <Image src={sec8logo8} alt="sec8logo1"/>
            </div>

           </div>

          </div>

        </div>


      </div>

    </>

  );
}

export default Home;
