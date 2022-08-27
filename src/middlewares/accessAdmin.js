let adminis = ['Greta', 'Ada', 'Vim', 'Tim',]

module.exports = (req,res,next)=>{
    if(adminis.includes(req.query.user)){
        next()    
    }else{
        res.redirect('../noEntry');
    }
}