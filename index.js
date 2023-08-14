const express = require('express');
var expressLayouts = require('express-ejs-layouts');
const { default: mongoose } = require('mongoose');
const { AllRoutes } = require('./routes/index.routes');

const app = express();

mongoose.connect('mongodb://localhost:27017/passport-auth', {}).then(() => console.log(`connected to MongoDB...`)).catch(err => console.log('have problem to connect MongoDB !!'));


app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('layout', './layout/main.ejs');

// routes
app.use(AllRoutes)

app.listen(3000, () => console.log('server running on port 3000'))