import { Button } from '@material-ui/core';
import React,{useState,useEffect} from 'react';
import "./HomeScreen.css";
import {db,auth} from "./firebase";
import { Link } from 'react-router-dom';

export const HomeScreen = () => {
    const [user, setUser] = useState(null);

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

    function fun(){
        alert("Sign In to continue");
    }
    return (
        <div className="homeScreen">
            <div className="homeScreen__banner">
                <h1>JOB SEARCH MADE EASY</h1>
                <p>One stop place for every job seekers.</p>
                {user?<div className="banner__button">
                    
                    <Link to="apply_jobs"><button>APPLY JOB</button></Link>
                    <Link to="post_jobs"><button>POST JOB</button></Link>
                </div>:
              
                <div className="banner__button">
                    
                    <button onClick={fun}>APPLY JOB</button>
                    <button onClick={fun}>POST JOB</button>
                </div>
                }
                

            </div>


        </div>
    )
}