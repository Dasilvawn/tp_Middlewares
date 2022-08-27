const router = require('express').Router();
const {index,about,contact,music,admin,login,noEntry} = require('../controllers/mainControllers');

const accessAdmin = require('../middlewares/accessAdmin');


router.get('/', index)
router.get('/about', about)
router.get('/contact', contact)
router.get('/music', music)
router.get('/admin', accessAdmin, admin)
router.get('/login',login)
router.get('/noEntry',noEntry)



module.exports = router;