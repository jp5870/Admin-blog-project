const { default: mongoose } = require("mongoose")

    
exports.dbConnect = ()=>{
    mongoose.connect('mongodb://localhost:27017/admin_panel')
    .then(()=>console.log("db connected...."))
    .catch((err)=>console.log(err))
}

