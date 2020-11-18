const { BugReport, BugReportComment } = require('../models/bugReportModel.js');
const User = require('../models/userModel.js');

module.exports.index = async (req, res) => {
    const bugreports = await BugReport.find({});
    res.render('bugreports/index', { bugreports })
}

module.exports.renderNewForm = async (req, res) => {
    const users = await User.find({});
    res.render('bugreports/new', { users });
}

module.exports.createBugReport = async (req, res, next) => {
    const report = new BugReport(req.body.bugReport);
    await report.save();
    req.flash('success', 'Successfully made a new bug report!');
    res.redirect(`/bugreports/${report._id}`)
}

module.exports.showBugReport = async (req, res) => {
    const { id } = req.params;
    const report = await BugReport.findById(id);
    if (!report) {
        req.flash('error', 'Cannot find that bug report!');
        return res.redirect('/bugreports');
    }
    res.render('bugreports/show', { report });
}

module.exports.renderEditForm = async (req, res) => {
    const users = await User.find({});
    const { id } = req.params;
    const report = await BugReport.findById(id)
    if (!report) {
        req.flash('error', 'Cannot find that bug report!');
        return res.redirect('/bugreports');
    }
    res.render('bugreports/edit', { report, users });
}

module.exports.updateBugReport = async (req, res) => {
    const { id } = req.params;
    const report = await BugReport.findByIdAndUpdate(id, { ...req.body.bugReport });
    report.bugLastBumpDate = new Date().toISOString();
    await report.save();
    req.flash('success', 'Successfully updated bug report!');
    res.redirect(`/bugreports/${report._id}`)
}

module.exports.deleteBugReport = async (req, res) => {
    const { id } = req.params;
    await BugReport.findByIdAndDelete(id);
    req.flash('success', 'Successfully deleted bug report!')
    res.redirect('/bugreports');
}