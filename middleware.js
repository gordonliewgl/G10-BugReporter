const { bugReportSchema, bugReportCommentSchema } = require('./schemas.js');
const ExpressError = require('./utils/ExpressError.js');
const { BugReport, BugReportComment } = require('./models/bugReportModel.js');

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl
        req.flash('error', 'You must be signed in first!');
        return res.redirect('/login');
    }
    next();
}

module.exports.isDevAllowedToEditReport = async (req, res, next) => {
    const { id } = req.params;
    const report = await BugReport.findById(id);
    if (req.user.role === "Developer" && !(report.bugAssignedTo === req.user.username)) {
        req.session.returnTo = req.originalUrl
        req.flash('error', 'You cannot edit a Bug Report that is not assigned to you!');
        return res.redirect(`/bugreports/${report._id}`);
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

module.exports.isDeveloper = (req, res, next) => {
    if (req.user.role !== "Developer") {
        req.session.returnTo = req.originalUrl
        req.flash('error', 'You are not a developer, you don\'t have any Bug Reports assigned to you!');
        return res.redirect('/bugreports');
    }
    next();
}

module.exports.isNotReviewer = (req, res, next) => {
    if (req.user.role === "Reviewer") {
        req.session.returnTo = req.originalUrl
        req.flash('error', 'You cannot edit any Bug Reports as a Reviewer!');
        return res.redirect('/bugreports');
    }
    next();
}

module.exports.updateBugReportLastBumpDate = (req, res, next) => {
    req.body.bugReport.bugLastBumpDate = new Date().toISOString();
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

module.exports.addBugReportCommentDetails = (req, res, next) => {
    req.body.bugReportComment.name = req.user.username;
    req.body.bugReportComment.role = req.user.role;
    req.body.bugReportComment.comment = req.body.bugReportComment.comment;
    req.body.bugReportComment.commentDate = new Date().toISOString();
    next();
}

module.exports.validateBugReportComment = (req, res, next) => {
    const { error } = bugReportCommentSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}