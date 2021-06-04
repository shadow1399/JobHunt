import React, { useState, useEffect } from 'react';
import { auth } from "./firebase";
import { Button, Input, makeStyles, Modal } from '@material-ui/core';
import "./SignUp.css";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
function SignIn() {
  const [openSignIn, setOpenSignIn] = useState(true);
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
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

  const signIn = (event) => {
    event.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));

    setOpenSignIn(false);
  }
  return (
    <div className="signin">
      <Modal
        open={openSignIn}
        onClose={() => setOpenSignIn(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="signup__form">
            <center>
              {/* <img 
                            className="app__headerImage"
                            src=""
                            alt=""
                            /> */}
              <h2>Job Hunt</h2>
            </center>
            <Input
              placeholder="Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" onClick={signIn}>Sign In</Button>
          </form>
        </div>
      </Modal>
    </div>
  )
}

export default SignIn;
