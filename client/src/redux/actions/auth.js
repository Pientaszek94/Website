import * as api from '../api/index'



export const signIn=(FormData, navigate)=> async(dispatch)=>{
    
    try {

        const {data}=await api.signIn(FormData);
        dispatch({type: "AUTH", data })
        
        console.log("zalogowany");
        navigate('/postmaker')
    } catch (error) {
        console.log(error)
    }
}


export const signUp=(FormData, navigate)=> async(dispatch)=>{
    
    try {
        const {data}=await api.signUp(FormData);
        dispatch({type: "AUTH", data })
        console.log("New user is registered")
        navigate('/service')
        
    } catch (error) {
        console.log(error)
    }
}