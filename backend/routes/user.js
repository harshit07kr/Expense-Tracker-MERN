const { signup,login,logout,checkAuth } = require('../controllers/user');
const router = require('express').Router();
const requireAuth = require('../middleware/auth')

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);
router.get('/check-auth', requireAuth, checkAuth);

module.exports = router;
