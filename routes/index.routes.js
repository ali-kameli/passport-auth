const router = require('express').Router();
const { getHome, getLogin, getRegister, getProfile, Register } = require('../controllers/index.controllers');

router.get('/', getHome);
router.get('/login', getLogin);
router.get('/register', getRegister);
router.post('/register', Register);

router.get('/profile', getProfile);

module.exports = { AllRoutes: router };