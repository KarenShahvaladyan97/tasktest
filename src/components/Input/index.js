import React from 'react';
import './style.css'
import {Field, useField} from "formik";

function Input({placeholder, name, type}) {
    const [field, meta] = useField({name});
    return (
        <div className="container">
            {type === 'textarea' && < Field as={type} name={name} placeholder={placeholder}/>}
            {type !== 'textarea' &&
                <div className={`input ${meta.error && meta.touched ? "errorContainer": ''}`}>
                    < Field type={type} name={name} placeholder={placeholder}/>
                </div>
            }
            {meta.touched && <p style={{color: 'red', fontSize: '8px', marginLeft: '2px', marginTop: '2px'}}>{meta.error || ''}</p>}
        </div>
    );
}

export default Input;
