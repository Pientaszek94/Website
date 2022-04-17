import React from 'react'
import { useNavigate } from 'react-router-dom'
import './NoMatch.scss'

function NoMatch() {

    const navigate=useNavigate();
    return (
        <div className="error">
            <div className="error-content">
            <h3 className="error-message"><span aria-hidden="true">404</span><span>404</span>
            <span aria-hidden="true">404</span></h3>
            <h4 className="mess">Please go <span onClick={()=>navigate('/')} style={{border: "1px solid white", padding:"5px"}}>Home</span></h4>
            
            </div>
        </div>
    )
}

export default NoMatch
