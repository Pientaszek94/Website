import React, {useRef, useState} from 'react'
import './Downloads.scss'
import {Canvas, useFrame} from "@react-three/fiber";
import { Link } from 'react-router-dom';


const Box=(props)=>{

const mesh=useRef(null)
useFrame(()=>(mesh.current.rotation.y=mesh.current.rotation.x+=0.0010));

return(


<group position={[0,0,0]}>
    <mesh ref={mesh}>
      <icosahedronGeometry attach="geometry" args={[2.5,1]} />
      <meshStandardMaterial attach="material" color={0x00CDFF}
       wireframe={true}  />
    </mesh>
</group>

);

    };


/*DOWNLOADS starts here */


function Downloads() {
document.title="Pwl/Downloads";

const [code, setCode]=useState("");

const [match, setMatch]=useState("");



 const Match=()=>{

    if(code.toUpperCase()==="CV"||code.toUpperCase()==="CURRICULUM VITAE")
    {
    setMatch("CV");
    }
    else if(code.toUpperCase()==="BOOK"){
        setMatch("BOOK");
    }
    else if(code.toUpperCase()===""){
        setMatch("NOTHING")
    }
    else
    {
        setMatch("RICK");
    }

 }


 const EKey=(event)=>{

    if(event.key==='Enter'){    

               Match();
              
                }
            else if(event.key==="Delete")
                {
                    setMatch("")
                    setCode("")
                }
 }


 const Erase=()=>{
        setCode("");
        setMatch("");
     }




    return (
            <div className='downloads'> 
                        <div className="canv">
                            
                            <Canvas>
                                <ambientLight intensity={[0.15]} />
                                <directionalLight intensity={[2]} color={0xFFFF} position={[0,1,3]}/>
                            <Box/>
                            </Canvas>
                        </div>

                    {/*THE nonCanvas Code */}
                        <div className="code">
                    
                                            <h4>Type in secret code, below in the box,  and see what you can get</h4>
                                        <input type="text" className="iput" value={code} onChange={e=>setCode(e.target.value)}  onKeyDown={EKey}/>
                                        {
                                            match===""&&
                                        <button type="button" className="btn green" onClick={Match}>Verify</button>
                                        }
                                        <button type="button" className="btn red" onClick={Erase}>Clear</button>
                                        <div className="prize">
                                            {
                                                match==="CV"&& 
                                                <div className='resume'>
                                                    <h4>Congrats! You have unlocked rare item!</h4>

                                                    <img src="/images/resume.png" alt="QR" className='qr'/>
                                                        <a href="https://qrco.de/bcyI3V" target='_blank'>
                                                         Download Resume
                                                        </a>
                                                    
                                                </div>
                                            }
                                            {
                                                match==="BOOK"&&
                                                <div><p>I will write a book, someday!</p></div>
                                            }
                                            {
                                                match==="RICK"&&
                                                <div>
                                                    <h4>Oh my... You just typed a random string, didn't ya? </h4>
                                                    <img src="/images/rick.gif" alt="Ricked" className="rick"/>
                                                </div>

                                            }
                                            {
                                                match==="NOTHING"&&
                                                <div>
                                                    <h4>You didn't do anything and you want me to verify that blank bar? Oh come ooon...Click the "Clear" button anyway, and type some characters, bro or... sister. Dunno. I'm just a code typed by some kind of maniac...</h4>
                                                </div>

                                            }

                                        
                                        </div>
                        </div>
            </div>
    )
}

export default Downloads
