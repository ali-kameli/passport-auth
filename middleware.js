exports.checkAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    }
    return res.redirect('/login')
}
exports.redirectIfAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect('/profile')
    }
    return next()
}