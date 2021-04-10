import React from 'react';
import {useForm} from './useForm';

import './App.css';

const UseState = () => {
const [values, handleChange ] = useForm({ email: "", password : ""});

    return (
        
        <div>
        <input name="email" value={values.email} onChange={handleChange} />
        <input name="password" type="password" value={values.password} onChange={handleChange} />
        </div>
    );
}

export default UseState;
