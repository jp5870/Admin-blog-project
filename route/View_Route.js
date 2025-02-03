
const express = require('express')
const Blog_Model = require('../model/Blog_Model')

const router = express.Router()


router.get('/',async(req,res)=>{
    res.render('pages/index')
})

router.get('/addblog',async(req,res)=>{
    res.render('pages/Add_Blog')
})

router.get('/viewblog',async(req,res)=>{

    const all_blog = await Blog_Model.find()
    res.render('pages/ViewBlog' , {all_blog})
})

router.get('/updateblog',async(req,res)=>{
    const { id } = req.query
    const blog = await Blog_Model.findById(id)
    res.render('pages/Update_Blog',{blog})
})
module.exports = router
