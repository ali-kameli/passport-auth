const express = require('express');
var expressLayouts = require('express-ejs-layouts');
const { default: mongoose } = require('mongoose');
const { AllRoutes } = require('./routes/index.routes');
const flash = require('express-flash');
const session = require('express-session');
const { notFound } = require('./utils/errorHandler');
const passport = require('passport');
const { passportInit } = require('./passport.config');

const app = express();

mongoose.connect('mongodb://localhost:27017/passport-auth', {}).then(() => console.log(`connected to MongoDB...`)).catch(err => console.log('have problem to connect MongoDB !!'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(flash());
app.use(session({
    secret: 'secret key',
    resave: false, //! always false
    saveUninitialized: false
}))

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('layout', './layout/main.ejs');
// passport
passportInit(passport);
app.use(passport.initialize());
app.use(passport.session())
// routes
app.use(AllRoutes)
app.use(notFound)

app.listen(3000, () => console.log('server running on port 3000'))