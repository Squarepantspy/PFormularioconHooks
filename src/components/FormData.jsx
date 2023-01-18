import React from 'react'

const FormData = ({usuario}) => {
  return (
    <div className='container formulario'>
      <h2 className='mx-auto text-center'>Data del formulario </h2>
        <div className='data'>
          <label className='mb-3'>Nombre : </label>
          <p >{usuario.name}</p>
        </div>
        <div className='data'>
          <label className='mb-3'>Apellido :</label>
          <p >{usuario.lastName}</p>
        </div>
        <div className='data'>
          <label className='mb-3'>Email :</label>
          <p >{usuario.email}</p>
        </div>
        <div className='data'>
          <label className='mb-3'>Password: </label>
          <p >{usuario.password}</p>
        </div>
        <div className='data'>
          <label className='mb-3'>Confirmar Pass:</label>
          <p >{usuario.cpassword}</p>
        </div>
    </div>
  )
}

export default FormData