const router = require('express').Router();
const { getHome, getLogin, getRegister, getProfile, Register, login } = require('../controllers/index.controllers');
const { checkAuth, redirectIfAuth } = require('../middleware');

function initialRoutes(passport) {
    router.get('/', getHome);

    router.get('/register', getRegister);

    router.post('/register', redirectIfAuth, Register);

    router.get('/profile', checkAuth, getProfile);

    router.get('/login', getLogin);

    router.post('/login', redirectIfAuth, passport.authenticate('local', {
        successRedirect: '/profile',
        failureRedirect: '/login',
        failureFlash: true
    }), login);

    router.get('/logout', (req, res) => {
        req.logOut({ keepSessionInfo: false }, (err) => {
            if (err) console.log(err);
        });
        res.redirect('/')
    })
    return router
}

module.exports = initialRoutes;