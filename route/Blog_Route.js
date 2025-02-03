const express = require('express')
const router = express.Router()

const Blog_Controller = require('../Controller/Blog_Controller')
const upload = require('../middleware/multer')

router.post('/addblog',upload.single('blog_img'),Blog_Controller.addblog)
router.get('/deletblog/:id',Blog_Controller.deleteblog)
router.post('/updateblog/:id',upload.single('blog_img'),Blog_Controller.updateblog)
module.exports = router