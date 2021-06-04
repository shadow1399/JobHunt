import React,{useState,useEffect} from 'react';
import "./PostJobs.css";
import Navbar from "./Navbar";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import { IconButton } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import { Input } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import LinkIcon from '@material-ui/icons/Link';
import CodeIcon from '@material-ui/icons/Code';
import SubjectIcon from '@material-ui/icons/Subject';
import DescriptionIcon from '@material-ui/icons/Description';
import {auth} from "./firebase";
import {Link} from "react-router-dom";
import {Footer} from "./Footer";

function PostJobs() {

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
    return (
        <div className="postJobs">
            {user?
                <div>
                    <div className="about__nav">
                        <Navbar value="posts"/>
                    </div>
                    <h1>Post A Job</h1>
                    <div className="postJobs__container">
                            <MDBCol lg="5" className="lg-0 mb-4 postJobs__container">
                                <MDBCard>
                                    <MDBCardBody>
                                        
                                        
                                        <div className="contact__input">
                                            <IconButton>
                                                <PersonIcon fontSize="large" />
                                            </IconButton>
                                            <Input id="contact__data" placeholder="Company Name" />
                                        </div>
                                        <div className="contact__input">
                                            <IconButton>
                                                <CodeIcon fontSize="large" />
                                            </IconButton>
                                            <Input placeholder="Profile Name" />
                                        </div>
                                        <div className="contact__input">
                                            <IconButton>
                                                <LinkIcon fontSize="large" />
                                            </IconButton>
                                            <Input placeholder="Job Link" />
                                        </div>
                                        <div className="contact__input">
                                            <IconButton>
                                                <DescriptionIcon fontSize="large" />
                                            </IconButton>
                                            <Input multiline="true" placeholder="Description" />
                                        </div>
                                        <div className="contact__formbut">
                                            <button>Submit</button>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                        </MDBCol>
                    </div>
                    
                    <Footer />
                </div>:
                <div className="apply__error">
                    <h1>Sign In to continue.</h1>
                    <Link to="/"><p>Click Here</p></Link>
                </div>
            }
            
            
        </div>
    )
}

export default PostJobs;
