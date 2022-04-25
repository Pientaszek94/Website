import React, {useState, useEffect} from 'react';
import './Navbar.scss';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

function Navbar() {

    const [click, setClick]=useState(false);
    const [navbar,setNavbar]=useState(false);
    const [user, setUser]=useState();
    const [profClick, setProfClick]=useState(false)

    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const handleClick=()=>{
        setClick(!click);
    };

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
    
        navigate('/');

        console.log(`Logout at`, new Date())
    
        setUser(null);
      };

    useEffect(() => {
        const token = user?.token;
    
        if (token) {
          const decodedToken = decode(token);
    
          if (decodedToken.exp * 2000 < new Date().getTime()) logout();
        }
    
        setUser(JSON.parse(localStorage.getItem('profile')));
      }, [location]);

    const closeMenu=()=>{
        setClick(false);

    }

    const CloseNLog=()=>{
        logout();
        closeMenu();
    }


    const changeBackground=()=>{
        if (window.scrollY>=30){
            setNavbar(true);
        }
        else{
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={navbar? 'navbar active': 'navbar'}>
            <div className='navbar-container'>

                <Link to='/' className='navbar-logo' onClick={closeMenu}>
                    Pwl<i className="fas fa-robot"></i>
                </Link>
                

                <ul className={click? 'nav-menu active': 'nav-menu'}>


                    <li className='nav-item' >
                            {user?(
                                        <div className='profile-menu'>
                                        
                                            <h5 onClick={()=>setProfClick(!profClick)}>{user.result.name}</h5>
                                           {profClick&&(
                                                <button type='button' onClick={CloseNLog} >LOGOUT</button>
                                           )}
                                        </div>
                                ):(
                                    <div>
                                        <Link to="/auth">
                                            <button type='button' onClick={closeMenu}>SIGN IN to create</button>
                                        </Link>
                                    </div>

                                )}
                    </li>


                    <li className='nav-item' onClick={closeMenu}>
                        <Link to='/' className='nav-links'>
                          Home
                        </Link>
                    </li>
                    <li className='nav-item' onClick={closeMenu}>
                        <Link to='/about%20me' className='nav-links'>
                            About Me
                        </Link>
                    </li>
                    <li className='nav-item' onClick={closeMenu}>
                        <Link to='/service' className='nav-links'>
                            Service
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/articles' className='nav-links' onClick={closeMenu}>
                            Articles
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/downloads' className='nav-links' onClick={closeMenu}>
                            Downloads
                        </Link>
                    </li>
                
                      {user?(
                            <li className='nav-item'>
                            <Link to='/postmaker' className='nav-links' onClick={closeMenu}>
                                PostMaker
                            </Link>
                    </li>
               
                      ):null}

               


                </ul>
                        
                        <div className="menu-icon" onClick={handleClick}>
                     
                            <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
                        </div>

            </div>
        </nav>
    )
}

export default Navbar;
