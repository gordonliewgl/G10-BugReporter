const User = require('../models/userModel.js');
const test = require('unit.js');
let assert = test.assert;

module.exports.renderRegister = (req, res) => {
    res.render('users/register');
}

module.exports.register = async (req, res, next) => {
    try {
        const { email, username, password, role} = req.body;
        const user = new User({ email, username, role });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash('success', 'Account successfully created!');

            // Unit testing for registration
            assert.strictEqual(username, req.user.username, "Testing that the entered username matches the registered (and logged in username in the database");
            console.log(`Entered username is: ${username}`);
            console.log(`Registered username is: ${req.user.username}`);

            assert.strictEqual(role, req.user.role, "Testing that the entered role matches the role in the database");
            console.log(`Entered role is: ${role}`);
            console.log(`Registered role is: ${req.user.role}`);

            assert.strictEqual(email, req.user.email, "Testing that the entered role matches the role in the database");
            console.log(`Entered email is: ${email}`);
            console.log(`Registered email is: ${req.user.email}`);
            res.redirect('/bugreports');
        })

    } catch (e) {
        req.flash('error', e.message);
        res.redirect('register');
    }
}

module.exports.renderLogin = (req, res) => {
    res.render('users/login');
}

module.exports.login = (req, res) => {
    req.flash('success', 'Welcome back!');
    const redirectUrl = req.session.returnTo || '/bugreports';
    delete req.session.returnTo;
    res.redirect(redirectUrl);
}

module.exports.logout = (req, res) => {
    req.logout();
    req.flash('success', "Goodbye!");
    res.redirect('/login');
}