import React, { Suspense } from 'react';
import KITT from '../../Parts/KITT/KITT';
import Progress from '../../Parts/Progress/Progress';
import './About.scss'

function About() {
    document.title="Pwl/About Me";
    return (
        <div className="synth-container">
                
                 <video className="oldvideo" src="/videos/80ssynth.mp4" muted autoPlay loop/>
                 <h2 className='title-a' data-text="Junior Programmer" >Junior<br/> Programmer</h2>
                 
                 
                 <div className="me">

                        <h3 className="about-me">about character</h3>
                        <p className='bla-bla'> 

                        <Suspense fallback={<KITT/>}>

                            <img src="/images/portret.jpg" alt="portret" className="portret"/>
                            
                        </Suspense>

                        


                            Brought to life in 1994 as Paweł, Who is working on 
                            himself by learning new skills, all his life, 
                            necessary to accomplish his great goals.
                            Years ago, his only love, beloved Knowledge, gave him Strength and Wisdom.
                            To protect them, He must face numerous enemies such are Bordom, Uncertainty and,
                            most frightening of them all, Error.
                        </p>

                                    <div className="skills">
                                        <h3 className="about-me">His skills</h3>
                                        <Progress done="90" name="HTML"/>
                                        <Progress done="90" name="CSS/SCSS"/>
                                        <Progress done="80" name="JavaScript"/>
                                        <Progress done="75" name="React"/>
                                        <Progress done="60" name="MERN"/>
                                        <Progress done="30" name="Three.js"/>
                                    </div>
                                    <div>
                                    <h3 className="about-me">His hobbies</h3>
                                                <ul className='list-hobbies'>
                                                    <li>
                                                        <p className='bla-bla'>New Technology</p>
                                                    </li>
                                                    <li>
                                                        <p className='bla-bla'>Automotive</p>
                                                    </li>
                                                    <li>
                                                        <p className='bla-bla'>World Cuisines </p>
                                                    </li>
                                                    <li>
                                                        <p className='bla-bla'>Cute Cats </p>
                                                    </li>
                                                </ul>
                                     </div>
                     </div>
        
    </div>
    )
}

export default About;
