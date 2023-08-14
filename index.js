const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const { default: mongoose } = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/passport-auth', {}).then(() => console.log(`connected to MongoDB...`)).catch(err => console.log('have problem to connect MongoDB !!'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(ejsLayouts);
app.set('view engine', 'ejs');
app.set('layout', './layouts/main.ejs');


app.listen(3000, () => console.log('server running on port 3000'))