const router = require('express').Router();
const {index,about,contact,music,admin,noEntry,login, register, userRegister,} = require('../controllers/mainControllers');

const accessAdmin = require('../middlewares/accessAdmin');

const registerValidator = require('../validations/registerValidation');

router.get('/', index)
router.get('/about', about)
router.get('/contact', contact)
router.get('/music', music)
router.get('/admin', accessAdmin, admin)

router.get('/noEntry',noEntry)
router.get('/login',login)
router.get('/register', register)
router.post('/userRegister', registerValidator, userRegister)

module.exports = router;