import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./Footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import { IconButton } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
    return (
        <MDBFooter color="mdb-color" className="font-small pt-4 mt-4 footer">
            <MDBContainer className="text-center text-md-left">


                <MDBRow className="d-flex align-items-center footer__container">
                    <div md="8" lg="8">
                        <p className="text-center text-md-left grey-text">
                            &copy; {new Date().getFullYear()} Copyright:{" "}
                            Job Hunt _ skr

                        </p>
                    </div>
                    <div md="4" lg="4" className="ml-lg-0">
                        <div className="text-center text-md-right">
                            <ul className="list-unstyled list-inline footer__list">
                                <li className="list-inline-item">
                                    <IconButton>
                                        <FacebookIcon />
                                    </IconButton>
                                </li>
                                <li className="list-inline-item">
                                    <IconButton>
                                        <InstagramIcon />
                                    </IconButton>
                                </li>
                                <li className="list-inline-item">
                                    <IconButton>
                                        <TwitterIcon />
                                    </IconButton>
                                </li>
                                <li className="list-inline-item">
                                    <IconButton>
                                        <LinkedInIcon />
                                    </IconButton>
                                </li>
                            </ul>
                        </div>
                    </div>
                </MDBRow>
            </MDBContainer>
        </MDBFooter >
    );
}

export { Footer };