import React,{useState} from 'react';
import FormData from './FormData';
const Form = () => {
    const [usuario, setUsuario]=useState({
        name:'',
        lastName:'',
        email:'',
        password:'',
        cpassword:''
    });

    const crearuser =(e)=>{
        e.preventDefault();//se puede prevenir el comportamiento por defecto 
        console.log("Bienvenido",usuario)
        setUsuario({
            name :'',
            lastName:'',
            email:'',
            password:'',
            cpassword:''
    })
    }


    
  return (
    <>
    <form className="formulario" onSubmit={crearuser}>
        <div className='row mb-3 bg-light'>
            <label  className='form-label'>Nombre</label>             {/*Spread operator ES6 */}
            <input className='form-control' type="text" onChange={e=>setUsuario({...usuario,name :e.target.value})} value={usuario.name} />
        </div>
        <div className='row mb-3 bg-light'>
            <label className='form-label'>Apellido</label>
            <input className='form-control' type="text" onChange={e=>setUsuario({...usuario,lastName :e.target.value})} value={usuario.lastName} />
        </div>
        <div className='row mb-3 bg-light'>
            <label className='form-label'>Email</label>
            <input className='form-control' type="email" onChange={e=>setUsuario({...usuario,email :e.target.value})} value={usuario.email} />
        </div>
        <div className='row mb-3 bg-light'>
            <label className='form-label'>Password</label>
            <input className='form-control' type="password" onChange={e=>setUsuario({...usuario,password :e.target.value})} value={usuario.password} />
        </div>
        <div className='row mb-3 bg-light'>
            <label className='form-label'>Confirmar Pass</label>
            <input className='form-control' type="password" onChange={e=>setUsuario({...usuario,cpassword :e.target.value})} value={usuario.cpassword} />
        </div>
        <input type="submit" className='btn bg-success' value="Crear Usuario"/>
    </form>
    <FormData usuario={usuario}/> {/*Pasamos estados a traves de props */}
    </>
  )
}

export default Form