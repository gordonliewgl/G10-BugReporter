const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const ExpressError = require('./utils/ExpressError');
const User = require('./models/userModel.js');

// "C:\Program Files\MongoDB\Server\4.4\bin\mongod.exe" --dbpath="C:\Users\Gordon\Desktop\bugreporter\db"

const userRoutes = require('./routes/userRoute.js');
const bugReportRoutes = require('./routes/bugReportRoute.js');

// Connect to mongoDB
mongoose.connect('mongodb://localhost:27017/bugReportDB', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "ERROR! Failed to connect to MongoDB!"));
db.once("open", () => {
    console.log("MongoDB Connection open!");
});

const app = express();
const port = 3000;

app.engine('ejs', ejsMate)

// Uses Embedded Javascript Templates (https://ejs.co/)
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }));

// Used to spoof forms as DELETE or PUT or PATCH methods (since forms can only be GET or POST)
app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, 'public')))

const sessionConfig = {
    secret: 'thisshouldbeabettersecret!',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

app.use(session(sessionConfig))
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
	res.locals.currentUser = req.user;
	if (res.locals.currentUser) {res.locals.currentRole = req.user.role};
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

app.use('/', userRoutes);
app.use('/bugreports', bugReportRoutes);

// Home Page
app.get('/', (req, res) => {
	res.render('users/login.ejs');
});

// Any invalid page
app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
})

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong!'
    res.status(statusCode).render('error', { err })
})

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});