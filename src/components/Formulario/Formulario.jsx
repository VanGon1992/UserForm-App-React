import React, {useState} from 'react'

export default function Formulario({addProfile}) {

    const [user, setUser] = useState ({
        firstName: '',
        lastName: '',
        city: '',
        image: ''
    })

    const {firstName, lastName, city, image} = user

    const handleChange = (e) => {
        const {name, value} = e.target

        setUser((prevValue) => ({
            ...prevValue,
            [name]: value
        }))
    }

    const submitForm = (e) =>{
        e.preventDefault();
        
        addProfile(user)
        setUser({
            firstName: '',
            lastName: '',
            city: '',
            image: ''
        })
    }

    
  return (
    <div>

        <form onSubmit={submitForm}>
            <label>
                Nombre
                <input type='text' name='firstName' value={firstName} onChange={handleChange}></input>
            </label>

            <label>
                Apellido
                <input type='text' name='lastName' value={lastName} onChange={handleChange}></input>
            </label>

            <label>
                Ciudad
                <input type='text' name='city' value={city} onChange={handleChange}></input>
            </label>

            <label>
                Imagen
                <input type='text' name='image' value={image} onChange={handleChange}></input>
            </label>

            <div>
                {image && (
                    <img src={image} alt='Imagen de usuario' width='200px'></img>
                )}
            </div>

            <button type='submit'>Añadir Perfil</button>
        </form>
        
    </div>
  )
}

