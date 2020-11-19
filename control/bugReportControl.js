const { BugReport, BugReportComment } = require('../models/bugReportModel.js');
const User = require('../models/userModel.js');
const { search } = require('../routes/userRoute.js');

module.exports.index = async (req, res) => {
    const bugreports = await BugReport.find({});
    res.render('bugreports/index', { bugreports });
}

module.exports.renderNewForm = async (req, res) => {
    const users = await User.find({});
    res.render('bugreports/new', { users });
}

module.exports.renderSearchForm = async (req, res) => {
    const { bugID, bugDescription, bugDateReported } = req.query;
    console.log(`Bug ID: ${bugID}`);
    console.log(`Bug Desc: ${bugDescription}`);
    console.log(`Bug Date Reported: ${bugDateReported}`);
    let searchTerm = {};
    let results = {};
    if (bugDateReported) {
        searchTerm["bugDateReported"] = {$lt: `${bugDateReported}`};
        console.log(`Search term: ${searchTerm}`);
        results = await BugReport.find(searchTerm);
    } else if (bugID) {
        searchTerm["bugID"] = {$regex: `${bugID}`};
        console.log(`Search term: ${searchTerm}`);
        results = await BugReport.find(searchTerm);
    } else {
        searchTerm["bugDescription"] = {$regex: `${bugDescription}`};
        console.log(`Search term: ${searchTerm}`);
        results = await BugReport.find(searchTerm);
    }
    console.log(`Search term: ${searchTerm}`);
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

module.exports.deleteBugReport = async (req, res) => {
    const { id } = req.params;
    await BugReport.findByIdAndDelete(id);
    req.flash('success', 'Successfully deleted bug report!');
    return res.redirect('/bugreports');
}