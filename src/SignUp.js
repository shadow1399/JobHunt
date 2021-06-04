import React,{useState,useEffect} from 'react';
import {auth} from "./firebase";
import { Button, Input, makeStyles, Modal } from '@material-ui/core';
import logo from "./logo.svg";
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
function SignUp() {
    const classes = useStyles();
    const [modalStyle] =useState(getModalStyle);
    const [open,setOpen]=useState(true);
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    const [user,setUser]=useState(null);

    useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        //user has logged in...
        console.log(user);
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
      else{
        //user has logged out...
        setUser(null);
      }
    })

    return ()=>{
      //perform some cleanup actions before you refire the useEffect
      unsubscribe();//it cleans the authUser so that we can prevent duplicates.
    }
  },[user,username]);//once user or username changes it fires the code again.


    const signUp= (event)=>{
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
        .then((authUser)=>{
            return authUser.user.updateProfile({
            displayName:username
            })
        })
        .catch((error)=>alert(error.message));

        setOpen(false);
  }
    return (
        <div className="signup">
            <Modal
                open={open}
                onClose={()=>setOpen(false)}>
                <div style={modalStyle} className={classes.paper}>
                    <form className="signup__form">
                    <center>
                        {/* <img 
                            className="app__headerImage"
                            src={logo}
                            alt=""
                        /> */}
                        <h2>Job Hunt</h2>
                    </center>
                    <Input
                        placeholder="Username"
                        type="text"
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                    />
                    <Input
                    placeholder="Email"
                    type="text"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <Input
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <Button type="submit" onClick={signUp}>Sign Up</Button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default SignUp;
