const {check, body} = require('express-validator');

module.exports = [
    check('name')
       .notEmpty().withMessage('El nombre es obligatorio').bail()
       .isAlpha().withMessage('No se permiten números').bail() //para que nadie escriba un número en sunombre
       .isLength({ // minimos de 2 caracteres
        min : 2
       }).withMessage('Minimo 2 caracteres'),

    check('lastname')
       .notEmpty().withMessage('El apellido es obligatorio').bail()
       .isAlpha().withMessage('No se permiten números').bail() //para que nadie escriba un número en su apellido
       .isLength({ 
        min : 2
       }).withMessage('Minimo 2 caracteres'),
      
    check('email')   
        .notEmpty().withMessage('El mail es obligatorio').bail()
        .isEmail('Debe ser un mail válido').bail(),

    check('password')
        .notEmpty().withMessage('la contraseña es obligatoria').bail()
        .isLength({
            min:6,
            max:10
        }).withMessage('Debe contener minimo de 6 caracteres y maximo de 10'),

   check('repassword')
      .notEmpty().withMessage('Debe confirmar su contraseña').bail()
      .custom((value,{req})=>{
        if(value !== req.body.password){
            return false
        }else{
            return true
        }
        }).withMessage('Las contraseñas no coinciden'),

     check('terms')
       .isString('on').withMessage ('Debe aceptar los terminos y condiciones'),
         

]
