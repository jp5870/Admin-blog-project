const Blog_Model = require("../model/Blog_Model")

const addblog = async(req,res)=>{
    const {blog_title , blog_name , blog_author , blog_content , blog_date, blog_descipsion } =req.body
    
    console.log({
        blog_title , blog_name , blog_author , blog_content , blog_date , blog_descipsion 
    })

    const blog_img = req?.file?.filename

    

    const blog_data = await Blog_Model.create({
        blog_title , blog_name , blog_author , blog_content , blog_date , blog_descipsion  , blog_img
    })  
    
    res.redirect('/viewblog')
    
}

const deleteblog = async(req,res)=>{
    try {
        const { id } = req.params
        console.log(id)
         await Blog_Model.findByIdAndDelete({_id : id })
  
         res.redirect('/viewblog')
    } catch (error) {
      console.log(error) 
    }
}

const updateblog = async(req,res)=>{
    const { id } = req.params
    


    const {blog_title , blog_name , blog_author , blog_content , blog_date, blog_descipsion } =req.body
    
    
    const blog_img = req?.file ? req.file.filename : null;  
    
    
    const existingBlog = await Blog_Model.findById(id);
    
    
    const imageToUpdate = blog_img ? blog_img : existingBlog.blog_img;


    await Blog_Model.findByIdAndUpdate({_id : id } , { blog_title , blog_name , blog_author , blog_content , blog_date, blog_descipsion ,

        blog_img: imageToUpdate 
     })  

    res.redirect('/viewblog')

}

module.exports = {addblog,deleteblog,updateblog}