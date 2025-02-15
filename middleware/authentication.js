const jwt =require('jsonwebtoken');
const authentication=(req,res,next)=>{
    const token=req.headers?.authorization?.split("")[1];
    if(token){
        const decoded=jwt.verify(token,process)
    }
}