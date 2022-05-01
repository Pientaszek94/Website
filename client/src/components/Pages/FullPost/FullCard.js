import React, { useEffect } from 'react'
import './style.scss'
import moment from 'moment'
import {useParams} from 'react-router'
import {useSelector, useDispatch} from 'react-redux'
import {getPosts} from '../../../redux/actions/posts'
function FullCard() {
    const dispatch=useDispatch();
    const {id}=useParams();
    const posts=useSelector((state)=>state.posts);

    useEffect(()=>{
        dispatch(getPosts(), [dispatch])
    })   


    return (
        <div>
        {posts.filter(post=> post._id===id).map((post)=>{
            
            document.title=`Pwl/Articles/${post.title}`;
           
                
            return(

                    
            <div className="article">
                    <div className='article-hero'>
                        <img src={post.selectedFile} alt={post.selectedFile} className="article-img"/>
                        <h1 className='article-title'>{post.title}</h1>
                        <h6 className='author'>Written by: {post.creator}<br/>Created on: {moment(post.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</h6>
                        <h3 className='article-des'>{post.des}</h3>
                    </div>
                    <div className='article-main'>

                    {post.messages.slice(1).map((message, index)=>{
                                return(
                                  <div key={index}  className="article-container">
                                        <h3 className='para-title'>{message.mtitle}</h3>
                                        <p className='article-para'>
                                          {message.para}
                                        </p>
                                  
                                  
                                  </div>
                                )
                              })}
                        
                    </div>

            </div>

            )
            
})}
    </div>
    )
}

export default FullCard
