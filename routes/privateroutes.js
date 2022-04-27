const jwt=require('jsonwebtoken');
const util =require('util');
const { sign, verify } = jwt;

module.exports=async function(req,res,next){
    const token=req.header('auth-token')
    if(!token) return res.status(403).json({message:'access denied', status:'error'})
    
    console.log("sdfd",token, process.env.SECRET)
    try{
    const verified=await util.promisify(verify)(token, process.env.SECRET);

 req.user=verified
 next()
}
catch (err){
    console.log(err)
 res.status(401).json({message:'invalid token ', status:'error'})
}
}

