const fs = require('fs');
const path = require('path');

const userLoad = () =>{
    return JSON.parse(fs.readFileSync(path.join(__dirname.at, 'user.json')));
};

const userStore = (user)=>{
    fs.writeFileSync(path.join(__dirname, '../data/user.json'),JSON.stringify(userNew,null,3),'utf-8');
}

module.exports = (req,res,next) => {
    fs.appendFileSync(path.join(__dirname, '../logs/userLogs.txt'), 'El usuario ingreso a la ruta:' + req.url)
    console.log('hola')
    
    next()
    userLoad 
    userStore
}
