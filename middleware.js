const { bugReportSchema, bugReportCommentSchema } = require('./schemas.js');
const ExpressError = require('./utils/ExpressError.js');

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl
        req.flash('error', 'You must be signed in first!');
        return res.redirect('/login');
    }
    next();
}

module.exports.isBugReporter = (req, res, next) => {
    if (req.user.role !== "Bug Reporter") {
        req.session.returnTo = req.originalUrl
        req.flash('error', 'You must be a Bug Reporter to create a Bug Report!');
        return res.redirect('/bugreports');
    }
    next();
}

module.exports.validateBugReport = (req, res, next) => {
    const { error } = bugReportSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}