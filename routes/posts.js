import express from 'express'
import { getPosts, createPost, updatePost, deletePost} from '../controller/posts.js';
import auth from '../middleware/auth.js';

const postRoutes=express.Router();


postRoutes.get('/', getPosts);
postRoutes.post('/', createPost);
postRoutes.patch('/:id', updatePost)
postRoutes.delete('/:id', deletePost)

export default postRoutes;