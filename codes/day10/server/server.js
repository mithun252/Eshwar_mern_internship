const express=require('express');//require is the keyword from node js,express is the library from javascript
const cors= require('cors');//import the custom module

const app=express();
const port=3000;//define the port number the server will listen on
//middleware
app.use(cors());
app.use(express.json());

app.get('/api/data',(req,res)=>{
    
    res.json({message:'Hello,this is a data from the server!'});
});

app.listen(port,()=> {
    //log message indicating the serve is running and provide the URL to access it
    console.log(`Server is running at http://localhost:${port}`);
});