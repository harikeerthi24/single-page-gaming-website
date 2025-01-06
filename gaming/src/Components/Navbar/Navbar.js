"use client";
import React from "react";
import './Navbar.css';
import Logo from '../../Assets/sec1/Group 7.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion,useCycle } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const variantsul = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };


function Navbar(props){
    // const navigate = useNavigate()
    const {active ,navbarBg}=props;
    const [isOpen,toggleOpen] = useCycle(false,true);

   
    return(
        <>
            <div className="navbar">
                <div className="navbar-container">
                    <div className="navbar-logo">
                        <Image src={Logo} alt='ardeslogo'/>
                    </div>
                    <ul className="navbar-listitems">
                        <Link href='/'>
                            <li  className={active==='home'?'activenav':''} >home</li>
                        </Link>
                        <Link href='/doc'>
                            <li className={active==='aboutus'?'activenav':''}>Documentation</li>
                        </Link>
                        <Link href='/blogs'>
                            <li className={active==='product'?'activenav':''}>Blogs</li>
                        </Link>
                        <Link href='/LYNCPortal'>
                            <li className={active==='career'?'activenav':''}>LYNC Portal</li>
                        </Link>
                        <Link href='/demo'>
                            <li className={active==='contact'?'activenav':''}>Request a demo</li>
                        </Link>
                    </ul>
                    <div className="navbar-contactus">
                        <Link href='/contactus'>
                        <p style={{cursor:'pointer'}}>Get Started</p>
                        </Link>
                        
                    </div>
                    <div className="navbar-menuicon" onClick={()=>toggleOpen()}>
                        {isOpen?<CloseIcon/>:<MenuIcon sx={{color:"white"}}/>}
                    </div>

                    <div className={`navbar-sidebar ${isOpen?"sidebar-active":"sidebar-inactive"}`}>
                    <motion.ul animate={isOpen?"open":"closed"} variants={variantsul} className="sidebar-unorderlist">
                        <Link href='/'>
                            <motion.li
                                variants={variants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}>
                                Home</motion.li>
                        </Link>
                        <Link href='/doc'>
                        <motion.li 
                            variants={variants}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >Documentation</motion.li>
                        </Link>
                        <Link href='/blogs'>
                            <motion.li
                                variants={variants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >Blogs</motion.li>
                        </Link>

                        <Link href='/portal'>
                            <motion.li
                                variants={variants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >LYNC Portal</motion.li>
                        </Link>

                        <Link href='/demo'>
                            <motion.li
                                variants={variants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >Request a demo</motion.li>
                        </Link>

                        <Link href='/contactus'>
                            <motion.li
                                variants={variants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                >Get Started</motion.li>
                        </Link>
                    </motion.ul>
                </div>
                </div>
            </div>

            {/* sidebar container */}
            
            
            
            
        </>
    );
}

export default Navbar;