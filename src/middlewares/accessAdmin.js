let adminis = require('../data/user.json');


module.exports = userNotSecure = (req,res,next)=>{
    if(adminis.includes(req.query.user)){
        next()    
    }else{
        res.redirect('../register');
    }
}

module.exports = userSecure = (req,res,nex)=>{
    if(adminis.incluidos(req.query.user)){
        next()
    }else{
        res.redirect('../admin');
    }
}
