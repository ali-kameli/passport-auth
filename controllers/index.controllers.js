const bcrypt = require('bcrypt');
const { userModel } = require('../model/user.model');
// GET
exports.getHome = (req, res) => {
    res.render('index.ejs', { title: 'home' })
}
exports.getLogin = (req, res) => {
    res.render('login.ejs', { title: 'login' })
}
exports.getRegister = (req, res) => {
    res.render('register.ejs', { title: 'register' })
}
exports.getProfile = (req, res) => {
    res.render('profile.ejs', { title: 'profile' })
}
// POST
exports.Register = async (req, res, next) => {
    try {
        const { username, fullname, password } = req.body;
        const hashPassword = bcrypt.hashSync(password, 10);
        const user = userModel.findOne({ username })
        if (user) {
            req.flash('error', 'this username already exsit !!')
            res.redirect('/register')
        }
        await userModel.create({
            username,
            fullname,
            password: hashPassword
        })
        res.redirect('/login')
    } catch (error) {
        next(error)
    }
}