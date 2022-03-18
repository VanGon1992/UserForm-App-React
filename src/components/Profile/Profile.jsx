import React from 'react'

export default function Profile({profiles}) {

  let i = 0
  
  return (
    <div>
    {profiles.map((profile) => {
        return(
          <div key={i = i + 1}>
                <h3>{profile.firstName} {profile.lastName}</h3>
                <p>{profile.city}</p>
                <img src={profile.image} alt='' width='200px'></img>
          </div>
        )
    })}
    </div>
  )
}

// Opcion alternativa para generar 'key' unica *******************
// key={JSON.stringify(profile)}
