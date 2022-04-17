import axios from 'axios'

const API=axios.create({baseURL: 'https://pwlfrontdev.herokuapp.com/api'});


API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

  const url = 'https://pwlfrontdev.herokuapp.com/api/posts';

  export const fetchPosts = () => axios.get(url);
  export const createPost = (newPost) => axios.post(url, newPost);
  export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
  export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
  export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const signIn=(formData)=> API.post('/users/signin', formData)
export const signUp=(formData)=> API.post('/users/signup', formData)