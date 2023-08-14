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
