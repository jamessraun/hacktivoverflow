const router = require('express').Router();
const passport = require('passport');
const authController = require('../controllers/auth')

router.post('/signup', authController.signup)
router.post('/signin', passport.authenticate('local', {session: false}), authController.signin)

module.exports = router;
