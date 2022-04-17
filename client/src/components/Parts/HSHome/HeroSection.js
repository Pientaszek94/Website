import React, { Component} from 'react';
import './style.scss';

class HeroSection extends Component {


    render() {

        const date= new Date();
        const hour= date.getHours();
        const user=JSON.parse(localStorage.getItem('profile'));
        console.log(JSON.parse(localStorage.getItem('profile')))

        /*sooo how you doin', Neo?*/

        return (
            <div className='herosec'>
                <video className="sunrise" src="/videos/CybZach.mp4" muted autoPlay loop/>
              <h2 className="title">Good {hour>=12? hour>=16 ? 'Evening': 'Afternoon': 'Night'}{user!==null?(<span>,<br/> <span style={{color: "yellow"}}>{user.result.name}</span></span>): null}!
              <br/>{hour>=6? hour<17? "What have you planned for today?": "How was your day at office?": "Sleep well"}</h2>
            </div>
        )
    }
}

export default HeroSection;
