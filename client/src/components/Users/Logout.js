import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';

const Logout = () => {
    let navigate = useNavigate();

    const { state, dispatch } = useContext(UserContext);

    useEffect(() => {
        fetch('/logout', {
            method: "GET",
            headers: {
                Accept: "appllication/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            dispatch({ type: "USER", payload: false })
            //dispatch({type:"NoUSER"})
            //navigate('/login',{replace : true});
            if (res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            }
            else {
                navigate('/login', { replace: true });
            }
        }).catch((err) => {
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