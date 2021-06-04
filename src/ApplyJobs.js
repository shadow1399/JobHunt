import React, { useState,useEffect } from 'react';
import useFetchJobs from './useFetchJobs';
import { Container } from 'react-bootstrap';
import Job from './Job';
import JobsPagination from './JobsPagination';
import SearchForm from './SearchForm';
import Navbar from "./Navbar";
import {Link} from "react-router-dom";
import {auth} from "./firebase";
import "./ApplyJobs.css";

function ApplyJobs() {
    const [params, setParams] = useState({});
    const [user,setUser]=useState(null);
    const [page, setPage] = useState(1);
    const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

    // const history=useHistory();
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

    function handleParamChange(e) {
        const param = e.target.name;
        const value = e.target.value;
        setPage(1);
        setParams(prevParams => {
            return { ...prevParams, [param]: value };
        });
    }

    return (
        <div>
            {user?
            
            <div>
                <div>
                
            
                <div className="about__nav">
                    <Navbar />
                </div>
                <Container className="my-4">

                    <h1 className="mb-4 applyjobs__header">APPLY JOBS</h1>
                    <SearchForm params={params} onParamChange={handleParamChange} />
                    <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
                    {loading && <h1>Loading...</h1>}
                    {error && <h1>Error. Try Refreshing.</h1>}
                    {jobs.map(job => {
                        return <Job key={job.id} job={job} />
                    })}
                    <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
                </Container>
            </div>
            </div>
            
            :
            
            <div className="apply__error">
                <h1>Sign In to continue.</h1>
                <Link to="/"><p>Click Here</p></Link>
            </div>}
            
            
        </div>
        
        

    )
}

export default ApplyJobs;
