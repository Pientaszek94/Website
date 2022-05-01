import React, {useState, useEffect, Suspense} from 'react'
import './Articles.scss'
import {useSelector} from 'react-redux'

import {useDispatch} from "react-redux"
import { getPosts } from '../../../redux/actions/posts'
import KITT from '../../Parts/KITT/KITT'





function Articles() {

    document.title="Pwl/Articles";


    const Post=React.lazy(()=> import('./Post/Post'))

    const [klik, setKlik]=useState(false)
    const [search, setSearch]=useState('');
    const [catego, setCatego]= useState('');

    

    const posts=useSelector((state)=>state.posts)
    const dispatch=useDispatch();

    useEffect(()=>{
      dispatch(getPosts(posts))
    }, [posts])


    const clickSM=()=>{
      setKlik(!klik)
    }
    



  

  return (
    <div className='articles'>
        <h1 className=''> Here's what WE think about <br/>{search===""?'...':`${search}?`}</h1>
        
        <div className='grid-container'>
        
                    {/*POSTS */}
                    <div className='grid-posts'>
                      
                    {posts.length===0? <div className='Loading'>Loading...</div>: 
                        posts.filter((post)=>{
                          let pipi=post.cat.toLowerCase().includes(catego.toLowerCase())
                          if (catego==='') return post;
                          else if(pipi) return post;
                        }).filter((post)=>{
                          let query=post.title.toLowerCase().includes(search.toLowerCase());
                          if(search==="") return post;
                          else if(query) return post;
                                      }                   
                                    ).sort((a, b)=> a._id<b._id ? 1 : -1).map((post)=>{
                            return(

                              // HERE Every Article/Post will loading when needed 
                                    <Suspense fallback={<KITT/>}>

                                           <Post post={post} key={post._id}/>

                                    </Suspense>
                                   
                            
                            )
                        })
                    }

                    </div>
                    {/*Sidebar active over screen's width 1200px  */}
                    <div className='grid-sidebar'>
                    <input type='search' className='searchbar' onChange={(e)=> setSearch(e.target.value)} placeholder="Smthin' to recall?"/>
                            {/* <h4 className='categories'>Creators</h4>
                              Here will be map of all creators and enabled buttons with
                               their names to make filter more... precise. Coming soon. */}
                              
                            <h4 className='categories'>Categories</h4>
  
                                <button className='sidebar-btn' onClick={()=> setCatego('')}>ALL</button>
                                <button className='moto sidebar-btn' onClick={()=> setCatego('moto')}>MOTO</button>
                                <button className='tech sidebar-btn' onClick={()=> setCatego('tech')}>TECH</button>
                                <button className='food sidebar-btn' onClick={()=> setCatego('food')}>FOOD</button>
                            
                    </div>
        </div>
        {/*Sidebar is active when screen's max-width: 1200px*/}
                    <div className={klik?'mobile-sidebar': 'sidebar-off'}>
                             
                              <div onClick={clickSM} className={klik?'klikadlo': 'klikadlo-off'}><span>Search</span></div>
                              <input type='search' className='searchbar' onChange={(e)=> setSearch(e.target.value)} placeholder="Smthin' to recall?"/>
                            {/* <h4 className='categories'>Creators</h4>
                              Here will be map of all creators and enabled buttons with
                               their names to make filter more... precise. Coming soon. */}
                              
                            <h4 className='categories'>Categories</h4>
  
                                <button className='sidebar-btn' onClick={()=> setCatego('')}>ALL</button>
                                <button className='moto sidebar-btn' onClick={()=> setCatego('moto')}>MOTO</button>
                                <button className='tech sidebar-btn' onClick={()=> setCatego('tech')}>TECH</button>
                                <button className='food sidebar-btn' onClick={()=> setCatego('food')}>FOOD</button>
                            
                    </div>
        

    </div>
  )
}

export default Articles;
