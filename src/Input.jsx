import {useState} from 'react';
import {useField} from 'formik';


function Input({label, id, name, value, onChange, type, placeholder, error, touched, className, onBlur
}){
  
  return(
    <>
      <div className="flex flex-col">
        <label htmlFor={id} className="sr-only">{label}</label>
        <input 
          onChange={onChange}
          value={value || ""}
          type={type}
          onBlur={onBlur}
          id={id} 
          name={name}
          placeholder={placeholder}
          className={className + "border-2 px-2 py-1 pl-8"}
          required
          />
          {touched && error && <p className="text-red-600 text-sm ">{error}</p>}
      </div>
    </>
  )
}

export default Input;