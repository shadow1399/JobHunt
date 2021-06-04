import React, { useContext, useState, useEffect } from 'react';
import logo from './logo_job.png';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { db, auth } from './firebase';
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import "./Navbar.css";
import { StateContext } from './StateContext';
import { Link } from 'react-router-dom';


function Navbar({value}) {
    const [clicked, setClicked] = useState(false);
    const [open, setOpen] = useState(false);
    const [openSignIn, setOpenSignIn] = useState(false);
    const [user, setUser] = useState(null);
    const handleClick = () => {
        setClicked(!clicked);
    }

    const handleOpen = () => {
        setOpen(!open);

    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                //user has logged in...
                // console.log(user);
                setUser(authUser);//this use cookie tracking and if you refresh then also you will be logged in if you are still logged in.

                // if(authUser.displayName){
                //   //dont update username
                // }else{
                //   //if we just created someone...
                //   return authUser.updateProfile({
                //     displayName:username,
                //   });
                // }
            }
            else {
                //user has logged out...
                setUser(null);
            }
        })

        return () => {
            //perform some cleanup actions before you refire the useEffect
            unsubscribe();//it cleans the authUser so that we can prevent duplicates.
        }
    }, [user]);//once user or username changes it fires the code again.

    return (
        <div className="navbar">

            <Link to="/"><img src={logo} className="navbar__logo" alt="" /></Link>

            <div className="navbar__icon" onClick={handleClick}>
                {!clicked ? <MenuIcon fontSize="large" /> : <CloseIcon fontSize="large" />}

            </div>
            
            
            <ul className={clicked ? 'navbar__menu active' : 'navbar__menu'} >
                
                <Link to="/"><li className={value=="home"?'nav__home':'nav__nothome'}>Home</li></Link>
                <Link to="/about"><li className={value=="home"?'nav__about':'nav__nothome'}>About</li></Link>
                <Link to="/contact"><li className={value=="home"?'nav__about':'nav__nothome'}>Contact Us</li></Link>
                {user ? (<li onClick={() => auth.signOut()} className={value=="home"?'nav__butt':'nav__nothome'}>Logout</li>)
                    : (
                        <div className="navbar__loginContainer">
                            <li onClick={() => setOpenSignIn(!openSignIn)} className={value=="home"?'nav__butt':'nav__nothome'}>SignIn</li>
                            <li onClick={handleOpen} className={value=="home"?'nav__butt':'nav__nothome'}>Sign Up</li>
                        </div>)

                }


            </ul>
            
            {open ? <SignUp /> : null}
            {openSignIn ? <SignIn /> : null}
            {/* {!open?<SignUp />:null} */}

        </div>
    );
}

export default Navbar;
