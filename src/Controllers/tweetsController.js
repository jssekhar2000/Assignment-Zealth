const postModel = require('../Models/tweetstModel');
const mongoose = require('mongoose')






//===============================To Check Valid Object Id=============================
const isValidObjectId = (objectId) => {
    if (mongoose.Types.ObjectId.isValid(objectId)) return true;
    return false;
  };


//============================ Add Post Api ========================

const createPost = async (req,res) =>{
    try{
        let data = req.body;

        if (Object.keys(data).length == 0 ){
            return res.status(400).send({status:false ,msg:"Invalid Request,Please provide Post details "});
          }

        if(!data.title){
            return res.status(400).send({status:false,messaage:"Title is Mandatory"})
        }
        if(!data.description){
            return res.status(400).send({status:false,messaage:"Description is Mandatory"})
        }

        data.userId = req.userId
    let savedPost = await postModel.create(data)
    return res.status(201).send({status:true,Post:{PostId:savedPost._id,
    Title:savedPost.title,Description:savedPost.description,CreatedTime:savedPost.createdAt}})

    }
    catch(error){
        return res.status(500).send({status:false , msg: error.message})
    }
}

// ======================================= Get Latest Posts Api ===============================

const getPosts = async (req,res) =>{
    try{
        let userId = req.params.id

        if(!isValidObjectId(userId)){
            return res.status(400).send({status:false,message:"Invalid User ID"})
        }

        let foundPosts = await postModel.find({userId:userId}).select({__v:0,updatedAt:0,likedUsers:0,isDeleted:0,userId:0}).sort({createdAt:-1});
        
        let latestPosts = foundPosts.slice(0,9)
        return res.status(200).send({status:true,Posts:latestPosts})

    }
    catch(error){
        return res.status(500).send({status:false , msg: error.message})
    }
}






module.exports ={createPost,getPosts}