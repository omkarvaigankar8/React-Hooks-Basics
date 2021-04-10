import React,{ useEffect} from 'react';
// import {useForm} from './useForm';

import './App.css';

const UseEffect = () => {
// const [values, handleChange ] = useForm({ email: "", password : ""});

// useEffect(() => {
//     const onMouseMove = e => {
//         console.log(e);
//     } 
//     window.addEventListener("mousewheel",onMouseMove);
// },[]);

    useEffect(() => {
        console.log(1);
    },[]);
    useEffect(() => {
        console.log(2);
    },[]);

    return (   
        
        <div>
        {/* // <input name="email" value={values.email} onChange={handleChange} />
        // <input name="password" type="password" value={values.password} onChange={handleChange} /> */}
        </div>
    );
}

export default UseEffect;
