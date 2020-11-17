const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bugReportCommentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['Developer', 'Triager', 'Bug Reporter', 'Reviewer']
    },
    comment: {
        type: String,
        required: true
    },
    commentDate: {
        type: Date,
        required: true
    }
});

const bugReportSchema = new Schema({
    bugID: {
        type: String,
        required: true
    },
    bugDescription: {
        type: String,
        required: true
    },
    bugStatus: {
        type: String,
        enum: ['Open', 'In Progress', 'Awaiting Testing', 'Closed'],
        required: true
    },
    bugSeverity: {
        type: Number,
        enum: [1, 2, 3, 4, 5],
        required: true
    },
    bugDateReported: {
        type: Date
    },
    bugLastBumpDate: {
        type: Date
    },
    bugAssignedTo: {
        type: String
    },
    bugComments: [bugReportCommentSchema]
});

const BugReportComment = mongoose.model('BugReportComment', bugReportCommentSchema);
const BugReport = mongoose.model('BugReport', bugReportSchema);

module.exports = {BugReport, BugReportComment};