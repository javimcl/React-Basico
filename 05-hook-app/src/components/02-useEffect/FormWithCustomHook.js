import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effect.css'

export const FormWithCustomHook = () => {

  const [formValues, handleInputChange] = useForm({
    name:'',
    email:'',
    password: ''
  });




  const{name, email, password}= formValues;

  useEffect(() => {
      console.log('email.cambio')
    
  }, [email])

//   const handleInputChange = ({target}) => {
//     setFormState({
//       ...formState,
//       [target.name]: target.value
//     });
//   }

const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formValues)
}



    return (
        <form onSubmit={handleSubmit}>
          <h1>useEffect</h1>  
          <hr/>
          <div className='form-group'>
            <input
              type= "text"
              name= "name"
              className="form-control"
              placeholder="Tu nombre"
              autoComplete="off"
              value={name}
              onChange={handleInputChange}>
            
            </input>

          </div>
          <div className='form-group'>
            <input
              type= "text"
              name= "email"
              className="form-control"
              placeholder="email@gmail.com"
              autoComplete="off"
              value={email}
              onChange={handleInputChange}>
            
            </input>

          </div>

          <div className='form-group'>
            <input
              type= "password"
              name= "password"
              className="form-control"
              placeholder="xxxxx"
              autoComplete="off"
              value={password}
              onChange={handleInputChange}>
            
            </input>

          </div>
          <hr/>

          <button type='submit' className='btn btn-primary'>
              Guardar
          </button>
         
        </form>
    )
}
