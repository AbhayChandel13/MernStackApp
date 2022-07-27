import React ,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    let navigate = useNavigate();

    useEffect(()=>{
        fetch('/logout',{
            method: "GET",
            headers:{
                Accept:"appllication/json",
                "Content-Type":"application/json"
            },
            credentials: "include"
        }).then((res)=>{
            //navigate('/login',{replace : true});
            if(res.status != 200){
                const error = new Error(res.error);
                throw error;
            }else{
             navigate('/login',{replace : true});
            }   
        }).catch((err)=>{
            console.log(err);
        })
    })

  return (
    <> 
   <h1>Logout Page </h1> 
    </>
  )
}

export default Logout