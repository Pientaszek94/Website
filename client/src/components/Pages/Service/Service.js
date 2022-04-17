import React, { useEffect, useRef, useState } from 'react'
import { Contact } from '../../Parts/Contact/Contact';
import './Service.scss'
function Service() {

    const user = JSON.parse(localStorage.getItem('profile'))!==null? JSON.parse(localStorage.getItem('profile')): null;

    const quotes=['Everything is possible', "Do or Do not. There is no try.", "It's what you do right now that makes a difference.", "But I'm the Chosen One.", "Be good.", "You're pretty good."];

const [quote, setQuote]=useState("Never gonna give you up");
const [quoteTwo, setQuoteTwo]=useState("Do or Do not. There is no try.");

let styla={position:"relative" }
  useEffect(()=>{
         const interval = setInterval(
             ()=>{
                
                setQuote(quotes[Math.floor(Math.random()*(quotes.length))]);
                setQuoteTwo(quotes[Math.floor(Math.random()*(quotes.length))]);
                
                  
             }, 8000 )

         return ()=>{
            clearInterval(interval);
        }
        
        }, [])

       const FreeStyla=useRef({
            ...styla, 
            top:`${Math.random()*35}vh`, 
            left: `${Math.random()*45}%`,
            float: 'left'
        })
        const FreeStylaTwo=useRef({
            ...styla, 
            top:`${Math.random()*30}vh`, 
            left: `-${Math.random()*40}%`,
            transform: "translate(`-50%, -50%`)",
            float:'right',
           
        })


    return (
        <div>
            

                <div className='quote-container'>
                        <h1 >Hey, {user? user.result.name: 'Future Client'}!</h1>
                        <h5 className='quote' style={FreeStyla.current}>{quote}</h5>
                        <h5 className='quote' style={FreeStylaTwo.current}>{quoteTwo}</h5>
                
                </div>
                <div className='service'>
                <h4 style={{textAlign:"center", margin:'0 auto 0 auto'}}>What do We do, Boss?</h4>
                <p>Right so I got Junior Programmer guy, who can do everything you want if it's a frontend job. He can: 
                    <ul style={{listStyleType:'square'}}>
                        <li> Make Web Application</li>
                        <li> Advise/Help in building remarkable project</li>
                        <li> Fix problems with algorithm</li>
                    </ul>
                    Last time, I saw him doing some kind of Blog for everyone and it had a synth-retro-like design. Kinda cool.
                    So? What's it gonna be, Boss? 
                </p>
                </div>
                <div>
                <h4 style={{textAlign:"center", margin:'0 auto 0 auto'}}> Your only way to contact with him</h4>
                <Contact/>
                </div>
        </div>
    )
}

export default Service
