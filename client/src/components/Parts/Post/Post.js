import React from 'react'
import './style.scss'
import {Link} from 'react-router-dom'
import moment from 'moment'

function Post({post}) {


  return (
    <div className={`card ${post.cat}`}> 
                        <div className="card-cap">
                            <img src={post.selectedFile} alt={post.selectedFile} className="card-img"/>
                            <h2 className="card-title">{post.title}</h2>
                            <h5 className='time'>{moment(post.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</h5>
                            <p className="para">{post.des}</p>
                        </div>
                    
                    <Link to={`/articles/${post._id}`} className="link">Read more =&gt;</Link>
    </div>
  )
}

export default Post