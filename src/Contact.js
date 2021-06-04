import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import Navbar from "./Navbar";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { IconButton } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import { Input } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import SubjectIcon from '@material-ui/icons/Subject';
import DescriptionIcon from '@material-ui/icons/Description';
import {Footer} from "./Footer";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact">
            <div className="about__nav">
                <Navbar />
            </div>
             <h1>
                Contact us
            </h1>
            <MDBRow className="contact__test">
                <MDBCol lg="5" className="lg-0 mb-4">
                    <MDBCard>
                        <MDBCardBody>
                            <div className="contact__formhead">
                                <h3>
                                    <IconButton>
                                        <MailIcon fontSize="large" color="primary" />
                                    </IconButton>
                                     Write to us:
                                </h3>
                            </div>
                            
                            <div className="contact__input">
                                <IconButton>
                                    <PersonIcon fontSize="large" />
                                </IconButton>
                                <Input id="contact__data" placeholder="Your Name" />
                            </div>
                            <div className="contact__input">
                                <IconButton>
                                    <MailIcon fontSize="large" />
                                </IconButton>
                                <Input placeholder="Your Email" />
                            </div>
                            <div className="contact__input">
                                <IconButton>
                                    <SubjectIcon fontSize="large" />
                                </IconButton>
                                <Input placeholder="Subject" />
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
                <MDBCol lg="7">
                    <div
                        id="map-container"
                        className="rounded z-depth-1-half map-container"
                        style={{ height: "400px" }}
                    >
                        <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
                        title="This is a unique title"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        style={{ border: 0 }}
                        />
                        </div>
                        <br />
                        <div className="contact__location">
                            
                            <div>
                                <IconButton>
                                    <LocationOnIcon fontSize="large" />
                                </IconButton>
                                <p>Noida, 201309</p>
                                <p className="mb-md-0">India</p>
                            </div>
                            
                            
                            <div>
                                <IconButton>
                                    <PhoneIcon fontSize="large" />
                                </IconButton>
                                <p>+91 1234567890</p>
                                <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
                            </div>
                            
                            
                            <div>
                                <IconButton>
                                    <MailIcon fontSize="large" />
                                </IconButton>
                                <p>jobhunt_skr@gmail.com</p>
                                <p className="mb-md-0">jobhunt_official@gmail.com</p>
                            </div>
                    </div>
                </MDBCol>
            </MDBRow>
            
            
            
        </div>
    );
}

export default Contact;