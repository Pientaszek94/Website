import mongoose from "mongoose";


const messageSchema=mongoose.Schema({
    mtitle: String,
    para: String,
    selectedImage: String
})

const postSchema=mongoose.Schema({

    title: String,
    des: String,
    creator: String,
    cat: String,
    messages: [messageSchema],
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt:{
        type: Date,
        default: new Date()
    }


});

const PostMessage=mongoose.model('PostMessage', postSchema)

export default PostMessage;