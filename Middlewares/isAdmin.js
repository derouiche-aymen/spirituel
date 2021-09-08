const User = require ('../Models/userModel');
const jwt = require ('jsonwebtoken');
const config = require ('config');


const isAdmin = async (req,res,next)=>{
    try {
        const token = req.headers['auth-token'];
        const decoded = await jwt.verify(token, config.get("SECRETKEY"));
        const user= await User.findById(decoded.id)
        if (!user.admin){
            return res.status(401).send({msg:'not admin'});
        }
        next();
    } catch (error) {
        console.log(error)
        
    }
}

module.exports = isAdmin;