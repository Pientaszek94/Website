import React from 'react'
import './Progress.scss'

function Progress(props) {

  

    return(


            // Here is Progress bar that is definded by props and it is static. No need for dynamic functions
                    <div className="progress">
                        <div className='progress-done' style={{width:`${props.done}%`}}>
                        {props.name}
                        </div>
                    </div>
    );
}

export default Progress;
