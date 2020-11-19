const { BugReport, BugReportComment } = require('../models/bugReportModel.js');
const User = require('../models/userModel.js');
const { search } = require('../routes/userRoute.js');

module.exports.index = async (req, res) => {
    const bugreports = await BugReport.find({});
    res.render('bugreports/index', { bugreports });
}

module.exports.showAssignedReports = async (req, res) => {
    let devAssigned = {};
    devAssigned["bugAssignedTo"] = `${req.user.username}`;
    const bugreports = await BugReport.find(devAssigned);
    res.render('bugreports/assigned', { bugreports });
}

module.exports.showUnassignedReports = async (req, res) => {
    const bugreports = await BugReport.find({bugAssignedTo: "UNASSIGNED"});
    res.render('bugreports/unassigned', { bugreports });
}

module.exports.showReportsToReview = async (req, res) => {
    const bugreports = await BugReport.find({bugStatus: "Awaiting Testing"});
    res.render('bugreports/unassigned', { bugreports });
}

module.exports.renderNewForm = async (req, res) => {
    const users = await User.find({});
    res.render('bugreports/new', { users });
}

module.exports.renderSearchForm = async (req, res) => {
    const { bugID, bugDescription, bugDateReportedGTE, bugDateReportedLTE } = req.query;
    let searchTerm = {};
    let results = {};
    if (bugDateReportedGTE && bugDateReportedLTE) {
        searchTerm["bugDateReported"] = {$gte: `${bugDateReportedGTE}`, $lte: `${bugDateReportedLTE}`};
        results = await BugReport.find(searchTerm);
    } else if (bugID) {
        searchTerm["bugID"] = {$regex: `${bugID}`};
        results = await BugReport.find(searchTerm);
    } else {
        searchTerm["bugDescription"] = {$regex: `${bugDescription}`};
        results = await BugReport.find(searchTerm);
    }
    res.render('bugreports/search', { results } );
}

module.exports.createBugReport = async (req, res, next) => {
    const report = new BugReport(req.body.bugReport);
    await report.save();
    req.flash('success', 'Successfully made a new bug report!');
    return res.redirect(`/bugreports/${report._id}`);
}

module.exports.createBugReportComment = async (req, res, next) => {
    const { id } = req.params;
    const report = await BugReport.findById(id);
    const reportComment = new BugReportComment(req.body.bugReportComment);
    await BugReport.findByIdAndUpdate({_id: id}, {$push: {bugComments: reportComment}});
    req.flash('success', 'Comment added!');
    return res.redirect(`/bugreports/${report._id}`);
}

module.exports.showBugReport = async (req, res) => {
    const { id } = req.params;
    const report = await BugReport.findById(id);
    if (!report) {
        req.flash('error', 'Cannot find that bug report!');
        return res.redirect('/bugreports');
    };
    res.render('bugreports/show', { report });
}

module.exports.renderEditForm = async (req, res) => {
    const users = await User.find({});
    const { id } = req.params;
    const report = await BugReport.findById(id);
    if (!report) {
        req.flash('error', 'Cannot find that bug report!');
        return res.redirect('/bugreports');
    }
    res.render('bugreports/edit', { report, users });
}

module.exports.updateBugReport = async (req, res) => {
    const { id } = req.params;
    const report = await BugReport.findById(id);
    await BugReport.findByIdAndUpdate(id, { ...req.body.bugReport });
    req.flash('success', 'Successfully updated bug report!');
    return res.redirect(`/bugreports/${report._id}`);
}