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
}