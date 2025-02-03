const { default: mongoose, model } = require("mongoose");

const Blog_Schema = new mongoose.Schema({
    blog_title : String,
    blog_name : String,
    blog_author : String,
    blog_content : String,
    blog_date : String,
    blog_img : String,
    blog_descipsion : String,
},{
    timestamps : true
})

const Blog_Model = model('Blog',Blog_Schema)

module.exports = Blog_Model