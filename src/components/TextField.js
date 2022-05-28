import React from "react"
import {ErrorMessage,useField} from "formik"


export const TextField = ({label, ...props})=>{
  const [field, meta] =useField(props);
  
  return (
    <div>
      <label htmlFor={field.name}>{label}</label>
      <input className="form-control shodow"
      {...field} {...props}
      autoComplete="off"
      />
      <div className="error">
      <ErrorMessage name={field.name}/>
      </div>
    </div>
  )
}