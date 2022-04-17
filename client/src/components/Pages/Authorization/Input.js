import React from 'react'




function Input({name, onChange, autoFocus, type}) {

  return (
    
        <div >
            <label>
                <h5>
                {name}
                </h5>
                
            <input  
            name={name}
            onChange={onChange}
            required
            autoFocus={autoFocus}
            type={type}
            
            />
            </label>
        </div>

  )
}

export default Input