const express = require('express');
const router = express.Router();
const bugReportControl = require('../control/bugReportControl.js');
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn, isBugReporter, isNotReviewer, isDevAllowedToEditReport, updateBugReportLastBumpDate, validateBugReport, addBugReportCommentDetails, validateBugReportComment } = require('../middleware.js');

const BugReport = require('../models/bugReportModel.js');

router.route('/')
    .get(isLoggedIn, catchAsync(bugReportControl.index))
    .post(isLoggedIn, isBugReporter, validateBugReport, catchAsync(bugReportControl.createBugReport))

router.get('/new', isLoggedIn, isBugReporter, bugReportControl.renderNewForm)

router.route('/:id')
    .get(isLoggedIn, catchAsync(bugReportControl.showBugReport))
    .put(isLoggedIn, isNotReviewer, isDevAllowedToEditReport, updateBugReportLastBumpDate, validateBugReport, catchAsync(bugReportControl.updateBugReport))
    .post(isLoggedIn, addBugReportCommentDetails, validateBugReportComment, catchAsync(bugReportControl.createBugReportComment))
    .delete(isLoggedIn, catchAsync(bugReportControl.deleteBugReport));

router.get('/:id/edit', isLoggedIn, isNotReviewer, isDevAllowedToEditReport, catchAsync(bugReportControl.renderEditForm));

module.exports = router;