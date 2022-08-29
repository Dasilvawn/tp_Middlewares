const { name } = require("ejs");

const {userLoad, userStore} = require('../middlewares/userLogs');
const {validationResult} = require('express-validator');

module.exports = {  
index : (req,res)=>{
  return res.render('index');
},
about : (req,res)=>{
  return res.render('about');
},
contact : (req,res)=>{
  return res.render('contact');
},
music : (req,res)=>{
  return res.render('music');
},
admin : (req,res)=>{
  return res.render('admin',{
    user : req.query.user
  });
},
login : (req,res)=>{
  return res.render('login');
},
noEntry : (req,res)=>{
  return res.render('noEntry');
},
register : (req,res)=>{
  return res.render('register');
},

userRegister: (req,res)=>{

  let errors = validationResult(req);

  const {Id, name, lastname, mail, password} = req.body;

userRequire = userLoad();

const userNew = {
  id: [user.length -1 ] .id +1,
  name: name.trim(),
  lastname: lastname.trim(),
  mail: mail(),
  password: password()
};
let userModyfi = [...user, userNew];
userStore(userModyfi);
res.render('userRegister');

}
}
