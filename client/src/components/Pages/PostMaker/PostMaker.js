import React, {useEffect, useRef, useState} from 'react'
import './style.scss'
import {useDispatch, useSelector} from 'react-redux'
import {createPost, deletePost, getPosts, updatePost} from '../../../redux/actions/posts.js'
import FileBase from 'react-file-base64'

function PostMaker() {

  /* This subPage is designed to create or update posts stashed in MongoDB dataBase.
  Currently undergoing modifications. */



  /*STATES (of a mind)*/

  const initials={
    creator:'', title:'', cat:"", messages:[{mtitle:'', para:'', selectedImage:''}], tags:'', selectedFile:'', des: ''
  }

  const [postData, setPostData]=useState(initials);
  const [subtitle, setSubtitle]=useState("");
  const [paragraph, setParagraph]=useState("");
  const [search, setSearch]=useState('');
  const [currentId, setCurrentId]=useState(null);
  const [klik, setKlik]=useState(false)
  const user = JSON.parse(localStorage.getItem('profile'))!==null? JSON.parse(localStorage.getItem('profile')): null;


  
const posts=useSelector((state)=>state.posts)
const toManagePost=useSelector((state)=>currentId ? state.posts.find((p)=>p._id===currentId): null)

   
/*FUNCTIONS*/

    const dispatch=useDispatch();
    const ButnRef=useRef();


    const Submit=(e)=>{
      e.preventDefault();

      if(currentId){
        dispatch(updatePost(currentId, postData));
        clear();
      }
      else {dispatch(createPost(postData));
      clear();}
      console.log(postData)
    }


    useEffect(()=>{

          dispatch(getPosts(posts))
         settingCreator();
                  },[dispatch, posts])


      const settingCreator=()=>{

        setPostData({...postData, creator: user.result.name});
      
      }     


    const clear=()=>{
      setPostData(initials);
      setParagraph('');
      setSubtitle('');
      setCurrentId(null)
  }

 const newPara=(e)=>{
   e.preventDefault();
   setPostData({
     ...postData,
                  messages:[
                            ...postData.messages, {mtitle: subtitle, para: paragraph}
                            ]
                  
   })
   setParagraph('');
   setSubtitle('');
 }

 const CancelUpdate=()=>{
   setCurrentId(null);
   clear();
 }

 const clickSM=()=>{
   setKlik(!klik)
 }

 const startUpdate=()=>{
    if(toManagePost){
      setPostData(toManagePost)
    }
    clickSM();
 }

 



  return (
            <div className='pm-container'>

              


              {/*THE PERFECT UPDATE FUNCTION COMING SOON */}
              {/*pop-up sidebar with search bar and update buttons*/}
              <nav className={klik?'sidebar': 'sidebar-off'}>
                  <div onClick={clickSM} className={klik?'klikadlo': 'klikadlo-off'}><span>Posts</span></div>
                    <div className='sidebar-content'>
                            <input type="search" value={search} placeholder="find'n'update" onChange={(e)=> setSearch(e.target.value.replace('<script>', 'You wont do this NOPE'))}/>
                            
                            <ul className='posts-list'>
                  
                                {posts.filter((post)=>post.creator===user.result.name).filter((post)=>{
                                    if(search==="") return post;
                                    else if(post.title.toLowerCase().includes(search.toLowerCase())) return post;
                                                      }                   
                                              ).sort((a, b)=> a._id<b._id ? 1 : -1)
                                              .map(post=>{

                                                    const startManaging=()=>{
                                                                      setCurrentId(post._id)
                                                                  
                                                                      console.log(currentId)
                                                                     }
                                                    const startDelete=()=>{
                                                                      dispatch(deletePost(currentId))
                                                                      clear();
                                              
                                                                      setCurrentId(null)
                                                                    }


                                                      return (
                                                        <li key={post._id}>
                                                          <button type='button' onClick={startManaging} ><span>{post.title}</span></button>
                                                          {currentId===post._id&&(
                                                            <div>
                                                               <button type="button" style={{backgroundColor: "green"}} onClick={startUpdate}>UPDATE</button>
                                                                <button type="button" style={{backgroundColor: "red"}} onClick={startDelete}>DELETE</button>
                                                            </div>
                                                          )}
                                                        </li>
                                                      )
                                              }
                                  )
                                }
                            </ul>

                  </div>
              </nav>
                    
      


              {/* PostMAKER Form */}
              <h3 className='postmaker'>Post{currentId?'Updater': 'Maker'}</h3>
              <form action='http://localhost:5000/posts' noValidate={true} method="post" onSubmit={Submit} autoComplete="false">
                                
              <h4>
                Creator
                </h4>
                  {/* <textarea autoComplete='TRON' className='textarea' type="text" name="creator" value={postData.creator} onChange={(e)=>setPostData({...postData, creator: user.result.name.replace('<script>', 'You wont do this NOPE')})}/> */}
                  <h5 className='creator'>{postData.creator}</h5>
                
                <h4>
                Title
                </h4>
                  <textarea ref={ButnRef} autoComplete='TRON' className='textarea' type="text" name="title" value={postData.title} onChange={(e)=>setPostData({...postData, title: e.target.value.replace('<script>', 'You wont do this NOPE')})}/>
                
                  <FileBase className="img-seeker" type='file' multiple={false} onDone={({base64})=>setPostData({...postData, selectedFile: base64})}/>
                <h4>
                  Description
                </h4>
                  <textarea className='textarea' type="text" name="description" value={postData.des} onChange={(e)=>setPostData({...postData, des: e.target.value.replace('<script>', 'You wont do this NOPE').replace("<script>", "blabla")})}/>


             
                <div>

               
                    <div className='para-form'>

                        {postData.messages.slice(1).map((message, index)=>{
                                return(
                                  <div key={index}  className="article-container">
                                        <h3 className='para-title'>{message.mtitle}</h3>
                                        <p className='article-para'>
                                          {message.para}
                                        </p>
                                
                                  
                                  </div>
                                )
                              })}

                        <h4>
                        Title of the paragraph
                        </h4>
                          <textarea autoComplete='TRON' className='textarea' type="text" name="subtitle" value={subtitle} onChange={(e)=>setSubtitle(e.target.value.replace('<script>', 'You wont do this NOPE'))}/>
                                    
                        <h4>
                          Paragraph
                        </h4>
                          <textarea className='textarea' rows="5" type="text" name="paragraph" value={paragraph} onChange={(e)=>setParagraph(e.target.value.replace('<script>', 'You wont do this NOPE'))} />
                        
                          <button className='new-para-btn' type="button" onClick={newPara}>Add paragraph</button>
                        
                                    
                    

                    </div>
                </div>
                
                <div onChange={(e)=>setPostData({...postData, cat: e.target.value.replace('<script>', 'You wont do this NOPE')})} className="radio">
                <h4>Category of the post</h4>
                <span><input type='radio' name="Category" value="moto"/>Moto</span>
                <span> <input type='radio' name="Category" value="tech"/>Tech</span>
                <span><input type='radio' name="Category" value="food"/>Food</span>
                </div>

               
                
                <div className='buttons'>
                  
                  <button type="button"  onClick={clear}>Clear</button>
                  <button type="submit" disabled={postData.title===''|| postData.des===''||postData.cat===''}>{currentId? 'Update': 'Submit'}</button>
                  {currentId&&<button type="button"  onClick={CancelUpdate}>Cancel update</button> }
                  </div>

              </form>

             
             
    </div>
  )
}

export default PostMaker