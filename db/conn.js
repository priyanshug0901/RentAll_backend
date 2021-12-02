const mongoose=require('require');

mongoose.connect("mongodb://localhost:27017/rentDB",{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(()=>{console.log("database connection successful")}).catch((error)=> console.log(error));
